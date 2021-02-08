import React, { FC, memo } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@components/organisms'

interface IValues {
  email: string
  login: string
  firstName: string
  lastName: string
  phone: string
  password: string
}

type TBaseFormProps = {}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  phone: Yup.number()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required')
})

const BaseForm: FC<TBaseFormProps> = memo((props) => (
  <Formik
    initialValues={{
      email: '',
      login: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: ''
    }}
    validationSchema={SignupSchema}
    onSubmit={(values: IValues, { setSubmitting }: FormikHelpers<IValues>) => {
      console.log(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }}
  >
    {({ isSubmitting }) => (
      <Form noValidate>
        {props.children}
        <Button className="mb-4" type="submit" disabled={isSubmitting}>
          Sing up
        </Button>
      </Form>
    )}
  </Formik>
))
BaseForm.displayName = 'BaseForm'

export default BaseForm
