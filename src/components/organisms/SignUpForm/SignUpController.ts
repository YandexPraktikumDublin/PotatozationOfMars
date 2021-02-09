import { signup } from '@api'

const onSubmitSignUp = (value: object) => {
  signup(value)
}

export { onSubmitSignUp }
