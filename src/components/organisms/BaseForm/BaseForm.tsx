import React, { FC, memo, ReactNode } from 'react'
import { Formik, Form, FormikValues } from 'formik'
import { Button } from '@components/organisms'
import { BaseFormError } from '@components/atoms'

type TBaseFormProps = {
  children: ReactNode
  initialValues: FormikValues
  validationSchema: Record<string, any>
  onSubmit: (values: FormikValues) => Promise<Record<string, any> | void> | void
  buttonText: string
  formError?: string
  isResetOnSubmit?: boolean
}

const BaseForm: FC<TBaseFormProps> = memo(
  ({
    children,
    initialValues,
    validationSchema,
    onSubmit,
    buttonText,
    formError = '',
    isResetOnSubmit = false
  }: TBaseFormProps) => {
    return (
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (isResetOnSubmit) resetForm()

          onSubmit(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            {children}
            <Button type="submit" disabled={isSubmitting}>
              {buttonText}
            </Button>
            {formError.length > 0 && <BaseFormError>{formError}</BaseFormError>}
          </Form>
        )}
      </Formik>
    )
  }
)
BaseForm.displayName = 'BaseForm'

export default BaseForm
