import React, { FC, memo } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { Button } from '@components/organisms'

interface IValues {
  email: string
  login: string
  firstName: string
  lastName: string
  phone: string
  password: string
}

type TBaseFormProps = {
  validate: object
  initialValues: IValues
  textButton: string
}

const BaseForm: FC<TBaseFormProps> = memo(
  ({ initialValues, validate, children, textButton }) => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
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
            <Button className="mb-4" type="submit" disabled={isSubmitting}>
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
