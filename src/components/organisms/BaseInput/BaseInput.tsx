import React, { FC, memo } from 'react'
import { useField } from 'formik'
import classNames from 'classnames'

type TBaseInputProps = {
  type: string
  name: string
  placeholder: string
}

const BaseInput: FC<TBaseInputProps> = memo(({ ...props }: TBaseInputProps) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error
  return (
    <div
      className={classNames({
        'mb-2': isError,
        'mb-4': !isError
      })}
    >
      <input
        className={classNames(
          'w-full py-2 px-4 border rounded-md bg-transparent',
          'dark:text-white dark:border-white',
          { 'border-danger': isError }
        )}
        {...field}
        {...props}
      />
      {isError ? (
        <div className="mt-1 text-left text-xs text-danger">{meta.error}</div>
      ) : null}
    </div>
  )
})

BaseInput.displayName = 'BaseInput'

export default BaseInput
