import React, { FC, memo, ReactNode } from 'react'
import { useField, useFormikContext } from 'formik'
import classNames from 'classnames'

type TBaseSelectProps = {
  name: string
  children: ReactNode
  onChange?: (event: any) => void
}

const BaseSelect: FC<TBaseSelectProps> = memo(
  ({ ...props }: TBaseSelectProps) => {
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
        <select
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
  }
)

BaseSelect.displayName = 'BaseSelect'

export default BaseSelect
