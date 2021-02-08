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

const BaseForm: FC<TBaseFormProps> = memo((props) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validate}
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
          {props.children}
          <Button className="mb-4" type="submit" disabled={isSubmitting}>
            {props.textButton}
          </Button>
        </Form>
      )}
    </Formik>
  )
})
BaseForm.displayName = 'BaseForm'

export default BaseForm
