import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'

import { registerNewUserAction } from 'store/authentication/actions'

import PasswordInput from 'components/Common/PasswordInput/PasswordInput'
import GoogleMapsLocationsInput from 'components/Common/GooglemapsLocationsInput'
import AutocompleteInput from 'components/Common/AutocomplateInpyt'

import { Button, Typography, TextField } from '@material-ui/core'

const categoryOptions = [
  { fmId: 'citizen', id: 19924 },
  { fmId: 'entrepreneur', id: 55924 },
  { fmId: 'admin', id: 14324 },
]

const Registration: any = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Record<string, any>>()

  const dispatch = useDispatch()
  const { formatMessage } = useIntl()
  const password = watch('password')

  const onSubmit = handleSubmit((data: any) => dispatch(registerNewUserAction({ ...data, token: 'JWT_TOKEN' })))

  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
        {formatMessage({ id: 'join.us' })}
      </Typography>

      <form onSubmit={onSubmit}>
        <div className="form-content">
          <TextField
            className="login-input"
            placeholder="Max Ovsianiuk"
            error={!!errors?.fullName}
            label={!!errors?.fullName ? errors.fullName.message : formatMessage({ id: 'full.name' })}
            required
            {...register('fullName', {
              required: true,
              minLength: { value: 10, message: formatMessage({ id: 'min.length.10' }) },
              maxLength: { value: 30, message: formatMessage({ id: 'max.length.30' }) },
            })}
          />

          <TextField
            className="login-input"
            placeholder="example@mail.com"
            error={!!errors?.email}
            label={!!errors?.email ? errors.email.message : formatMessage({ id: 'email' })}
            required
            {...register('email', {
              required: true,
              minLength: { value: 10, message: formatMessage({ id: 'min.length.10' }) },
              maxLength: { value: 30, message: formatMessage({ id: 'max.length.30' }) },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'wrong email',
              },
            })}
          />

          <PasswordInput password={password} register={register} errors={errors} setValue={setValue} />

          <AutocompleteInput
            style={{ margin: '4px 20px 10px 20px' }}
            register={register}
            name="authorizationType"
            fmId="authorization.type"
            options={categoryOptions}
            setValue={setValue}
            required
          />

          <GoogleMapsLocationsInput register={register} style={{ margin: '0 20px' }} />

          <div className="btn-box">
            <Button className="submit-btn" variant="contained" type="submit" color="primary">
              {formatMessage({ id: 'registration' })}
            </Button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default Registration
