import React, { FC, memo } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { Button } from '@components/organisms'

interface IValues {
  [key: string]: string
}

type TBaseFormProps = {
  schema: object
  initialValues: IValues
  onSubmit: (values: object) => any
  textButton: string
}

const BaseForm: FC<TBaseFormProps> = memo(
  ({ initialValues, schema, onSubmit, children, textButton }) => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(
          values: IValues,
          { setSubmitting }: FormikHelpers<IValues>
        ) => {
          onSubmit(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            {children}
            <Button type="submit" disabled={isSubmitting}>
              {textButton}
            </Button>
          </Form>
        )}
      </Formik>
    )
  }
)
BaseForm.displayName = 'BaseForm'

export default BaseForm
