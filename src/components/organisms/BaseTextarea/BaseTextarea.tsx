import React, { FC, memo } from 'react'
import { useField } from 'formik'
import classNames from 'classnames'

type TBaseTextareaProps = {
  name: string
  placeholder: string
}

const BaseTextarea: FC<TBaseTextareaProps> = memo(
  ({ ...props }: TBaseTextareaProps) => {
    const [field, meta] = useField(props)
    const isError = meta.touched && meta.error

    return (
      <div
        className={classNames({
          'mb-2': isError,
          'mb-4': !isError
        })}
      >
        <textarea
          className={classNames(
            'w-full py-2 px-4 border rounded-md bg-transparent placeholder-primary placeholder-opacity-60',
            'dark:text-white dark:border-white dark:placeholder-white dark:placeholder-opacity-60',
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
  }
)

BaseTextarea.displayName = 'BaseTextarea'

export default BaseTextarea
