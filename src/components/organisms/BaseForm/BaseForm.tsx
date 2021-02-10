import React, { FC, memo, ReactNode } from 'react'
import { Formik, Form, FormikValues } from 'formik'
import { Button } from '@components/organisms'

type TBaseFormProps = {
  initialValues: FormikValues
  validationSchema: Record<string, any>
  onSubmit: (values: Record<string, any>) => void | Promise<any>
  textButton: string
  children: ReactNode
}

const BaseForm: FC<TBaseFormProps> = memo(
  ({
    initialValues,
    validationSchema,
    onSubmit,
    textButton,
    children
  }: TBaseFormProps) => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
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
