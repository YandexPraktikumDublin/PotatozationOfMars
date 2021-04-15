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

declare namespace Express {
  export interface Request {
    enjoyer: any
    universalCookies: {
      cookies: Record<string, any>
    }
  }
}
