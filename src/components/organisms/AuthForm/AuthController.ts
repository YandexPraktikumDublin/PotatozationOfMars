import { signin } from '@api'

const onSubmitAuth = (value: object) => {
  console.log(value)
  signin(value)
}

export { onSubmitAuth }
