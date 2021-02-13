import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TFormTopicMessageProps = {
  body: string
  userName: string
  date: string
}

const FormTopicMessage: FC<TFormTopicMessageProps> = memo(
  ({ body, userName, date }: TFormTopicMessageProps) => (
    <div
      className={classNames(
        'text-left border border-primary rounded-2xl p-4 mb-4 last:mb-0',
        'dark:border-white'
      )}
    >
      <div className="mb-4">{body}</div>
      <div className="text-xs">
        {userName} {date}
      </div>
    </div>
  )
)

FormTopicMessage.displayName = 'FormTopicMessage'

export default FormTopicMessage
