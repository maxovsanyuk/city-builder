import * as model from 'processes/auth/registration-model'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { Button, Typography, TextField } from '@material-ui/core'
import { AutocompleteInput, PasswordInput, GoogleMapsLocationsInput } from 'shared/ui/molecules'

const categoryOptions = [
  { fmId: 'citizen', id: 19924 },
  { fmId: 'entrepreneur', id: 55924 },
  { fmId: 'admin', id: 14324 },
]

const Registration = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Record<string, any>>()

  const { formatMessage } = useIntl()
  const password = watch('password')

  const onSubmit = handleSubmit((data: any) => model.$registerationNewUser({ ...data, token: 'JWT_TOKEN' }))

  return (
    <Wrapper>
      <Typography variant="h5" className="h-5" gutterBottom style={{ fontWeight: 600 }}>
        {formatMessage({ id: 'join.us' })}
      </Typography>
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <TextField
            className="login-input"
            placeholder="Max"
            error={!!errors?.firstName}
            label={!!errors?.firstName ? errors.firstName.message : formatMessage({ id: 'firstName' })}
            required
            {...register('firstName', {
              required: true,
              minLength: { value: 3, message: formatMessage({ id: 'min.length.3' }) },
              maxLength: { value: 20, message: formatMessage({ id: 'max.length.20' }) },
            })}
          />

          <TextField
            className="login-input"
            placeholder="Ovsianiuk"
            error={!!errors?.surname}
            label={!!errors?.surname ? errors.surname.message : formatMessage({ id: 'surname' })}
            required
            {...register('surname', {
              required: true,
              minLength: { value: 5, message: formatMessage({ id: 'min.length.5' }) },
              maxLength: { value: 20, message: formatMessage({ id: 'max.length.20' }) },
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

          <GoogleMapsLocationsInput required register={register} style={{ margin: '0 20px' }} />

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
