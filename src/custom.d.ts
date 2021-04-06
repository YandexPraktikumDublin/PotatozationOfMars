import { IUser } from '@models'

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare global {
  namespace Express {
    interface Request {
      user: IUser
      universalCookies: {
        cookies: Record<string, any>
      }
    }
  }
}
