import React, { FC, memo, ReactNode } from 'react'

type TBaseFormErrorProps = {
  children: ReactNode
}

const BaseFormError: FC<TBaseFormErrorProps> = memo(
  ({ children }: TBaseFormErrorProps) => (
    <div className="text-sm text-danger text-center mt-1">{children}</div>
  )
)

BaseFormError.displayName = 'BaseFormError'

export default BaseFormError
