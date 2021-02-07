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
  return (
    <div className="mb-2">
      <input
        className={classNames(
          'min-h-45 w-96 border rounded-md opacity-40 p-4 mb-1',
          'dark:text-white dark:border-white',
          { 'border-danger': meta.touched && meta.error }
        )}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="ml-1 text-danger">{meta.error}</div>
      ) : null}
    </div>
  )
})

BaseInput.displayName = 'BaseInput'

export default BaseInput
