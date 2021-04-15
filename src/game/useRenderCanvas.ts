import { useRef, useEffect } from 'react'
import { GameplayController, InputsController } from '@game/controllers'
import { controlTypes, KEYS } from '@game/config'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getControlsSelector } from '@store/game/selectors'
import {
  requestNewGame,
  resetScore,
  togglePause,
  updatePlayerHealth,
  updateScore
} from '@store/game/actions'
import { isServer } from '@utils/misc'
import { updateLeaderboardRequest } from '@store/leaderboard/updateLeaderboard/actions'
import { getUserSelector } from '@store/user/fetchUser/selectors'

const useRenderCanvas = () => {
  const store = useStore()
  const dispatch = useDispatch()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const backgroundRef = useRef<HTMLCanvasElement>(null)
  const user = useSelector(getUserSelector)

  let controls = isServer()
    ? useSelector(getControlsSelector)
    : window.localStorage.controlWithMouse ?? useSelector(getControlsSelector)

  let { isPaused, score } = store.getState().game

  const updateHealth = (health: number) => {
    dispatch(updatePlayerHealth({ health }))
  }

  const updateGameScore = (score: number) => {
    dispatch(updateScore({ score }))
  }

  const initNewGame = () => {
    dispatch(requestNewGame({ newGame: false }))
    dispatch(resetScore())
  }

  const updateLeaderBoard = (score: number) => {
    if (!user) return
    dispatch(
      updateLeaderboardRequest({
        data: {
          potatozationOfMarsScores: score,
          potatozationOfMarsUserId: user.id,
          potatozationOfMarsUserLogin: user.login
        }
      })
    )
  }

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const backgroundCanvas = backgroundRef.current as HTMLCanvasElement

    const game = new GameplayController(canvas, backgroundCanvas, {
      updateHealth,
      updateGameScore,
      initNewGame,
      updateLeaderBoard
    })

    const toggleModal = () => {
      dispatch(togglePause({ isPaused: !isPaused }))
    }

    const listener = () => {
      const {
        isPaused: newIsPaused,
        controls: newControls,
        score: newScore,
        newGame
      } = store.getState().game

      if (newGame) {
        game.newGame()
      }

      if (controls !== newControls) {
        controls = newControls
        if (newControls === controlTypes.mouse) {
          game.controlWithMouse()
        }
        if (newControls === controlTypes.keyboard) {
          game.controlWithKeyboard()
        }
      }

      if (isPaused !== newIsPaused) {
        isPaused = newIsPaused
        if (isPaused) {
          game.stop()
        } else {
          game.start()
        }
      }

      if (score !== newScore) {
        score = newScore
        game.score = score
      }
    }
    const unsubscribe = store.subscribe(listener)

    const handlePause = InputsController.onKeyPress(KEYS.pause, toggleModal)

    game.init()
    game.start()

    if (controls === controlTypes.mouse) {
      game.controlWithMouse()
    }
    if (controls === controlTypes.keyboard) {
      game.controlWithKeyboard()
    }

    return () => {
      game.stop()
      game.kill()
      handlePause()
      unsubscribe()
    }
  }, [])

  return {
    canvasRef,
    backgroundRef
  }
}

export default useRenderCanvas
