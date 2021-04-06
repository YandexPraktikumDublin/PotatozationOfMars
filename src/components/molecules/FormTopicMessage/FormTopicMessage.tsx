import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { ITopic } from '@models'

type TFormTopicMessageProps = {
  topic: ITopic
}

const FormTopicMessage: FC<TFormTopicMessageProps> = memo(
  ({ topic }: TFormTopicMessageProps) => (
    <div
      className={classNames(
        'text-left border border-primary rounded-2xl p-4 mb-10',
        'dark:border-white'
      )}
    >
      <div className="mb-4">{topic.content}</div>
      <div className="text-xs">
        {topic?.user?.name} {topic.createdAt}
      </div>
    </div>
  )
)

FormTopicMessage.displayName = 'FormTopicMessage'

export default FormTopicMessage
