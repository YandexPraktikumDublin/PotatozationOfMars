import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormikValues } from 'formik'
import { BaseForm, BaseSelect } from '@components/organisms'
import * as Yup from 'yup'
import { updateUserSettingsRequest } from '@store/userSettings/updateUserSettings/actions'
import {
  getUserSettingsErrorSelector,
  getUserSettingsSelector
} from '@store/userSettings/fetchUserSettings/selectors'
import { getThemesSelector } from '@store/themes/fetchThemes/selectors'

type TProfileThemeFormProps = {}

const validationSchema = Yup.object().shape({
  themeId: Yup.string().required('Required')
})

const ProfileThemeForm: FC<TProfileThemeFormProps> = memo(() => {
  const dispatch = useDispatch()

  const userSettings = useSelector(getUserSettingsSelector)
  const userSettingsError = useSelector(getUserSettingsErrorSelector) ?? ''
  const themes = useSelector(getThemesSelector)

  const handleSubmit = (values: FormikValues) => {
    dispatch(updateUserSettingsRequest({ themeId: values.themeId }))
  }

  return (
    <BaseForm
      initialValues={userSettings ?? {}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Save"
      formError={userSettingsError}
    >
      <BaseSelect name="themeId">
        <option disabled className="text-black">
          Select theme
        </option>

        {themes?.map((theme) => (
          <option key={theme.id} value={theme.id} className="text-black">
            {theme.name}
          </option>
        ))}
      </BaseSelect>
    </BaseForm>
  )
})

ProfileThemeForm.displayName = 'ProfileThemeForm'

export default ProfileThemeForm
