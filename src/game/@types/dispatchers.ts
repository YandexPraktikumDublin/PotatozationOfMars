type TDispatchers = {
  updateHealth: (health: number) => void
  updateGameScore: (score: number) => void
  updateLeaderBoard: (score: number) => void
  initNewGame: () => void
}

export default TDispatchers
