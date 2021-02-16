import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { useFormikContext, useField } from 'formik'

type TBaseFileInputProps = {
  name: string
}

const BaseFileInput: FC<TBaseFileInputProps> = memo(
  ({ ...props }: TBaseFileInputProps) => {
    const [, meta] = useField(props)
    const isError = meta.touched && meta.error
    const { setFieldValue } = useFormikContext()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement

      if (target.files) {
        setFieldValue(props.name, target.files?.[0])
      }
    }

    return (
      <div
        className={classNames({
          'mb-2': isError,
          'mb-4': !isError
        })}
      >
        <input type="file" name={props.name} onChange={handleChange} />
        {isError && (
          <div className="mt-1 text-left text-xs text-danger">{meta.error}</div>
        )}
      </div>
    )
  }
)

BaseFileInput.displayName = 'BaseInput'

export default BaseFileInput
