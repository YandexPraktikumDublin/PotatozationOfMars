import React, { FC, memo } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { Button } from '@components/organisms'

interface IValues {
  [key: string]: string
}

type TBaseFormProps = {
  schema: object
  initialValues: IValues
  textButton: string
}

const BaseForm: FC<TBaseFormProps> = memo(
  ({ initialValues, schema, children, textButton }) => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(
          values: IValues,
          { setSubmitting }: FormikHelpers<IValues>
        ) => {
          console.log(JSON.stringify(values, null, 2))
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
