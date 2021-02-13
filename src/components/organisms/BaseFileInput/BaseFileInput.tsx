import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { useFormikContext, useField } from 'formik'

type TBaseFileInputProps = {
  type: string
  name: string
  placeholder: string
}

const BaseFileInput: FC<TBaseFileInputProps> = memo(
  ({ ...props }: TBaseFileInputProps) => {
    const [field, meta] = useField(props)
    console.log(field)
    const isError = meta.touched && meta.error
    const { setFieldValue } = useFormikContext()

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
          type={props.type}
          name={props.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement
            if (target.files) {
              setFieldValue(props.name, target.files[0])
            }
          }}
        />
        {isError ? (
          <div className="mt-1 text-left text-xs text-danger">{meta.error}</div>
        ) : null}
      </div>
    )
  }
)

BaseFileInput.displayName = 'BaseInput'

export default BaseFileInput
