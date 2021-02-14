import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { useFormikContext, useField } from 'formik'

type TBaseInputProps = {
  onChange?: (event: any) => void
  type: string
  name: string
  placeholder: string
  autoComplete?: string
}

const BaseInput: FC<TBaseInputProps> = memo(({ ...props }: TBaseInputProps) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error
  const { handleChange } = useFormikContext()

  return (
    <div
      className={classNames({
        'mb-2': isError,
        'mb-4': !isError
      })}
    >
      <input
        className={classNames(
          'w-full py-2 px-4 border rounded-md bg-transparent placeholder-primary placeholder-opacity-60',
          'dark:text-white dark:border-white dark:placeholder-white dark:placeholder-opacity-60',
          { 'border-danger': isError }
        )}
        {...field}
        {...props}
        onChange={handleChange}
      />
      {isError ? (
        <div className="mt-1 text-left text-xs text-danger">{meta.error}</div>
      ) : null}
    </div>
  )
})

BaseInput.displayName = 'BaseInput'

export default BaseInput
