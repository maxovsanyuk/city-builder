import * as model from 'processes/auth/login-model'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PasswordInput } from 'shared/ui/molecules'
import { Button, Typography, TextField } from '@material-ui/core'

const Login: any = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Record<string, any>>()

  const password = watch('password')
  const { formatMessage } = useIntl()

  const onSubmit = handleSubmit((data: model.UserInterface) => model.$loginUser(data))

  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom className="title-h5">
        {formatMessage({ id: 'build.our.city.together' })}
      </Typography>

      <form onSubmit={onSubmit}>
        <div className="form-content">
          <TextField
            className="login-input"
            placeholder="example@mail.com"
            error={!!errors?.email}
            label={!!errors?.email ? errors.email.message : formatMessage({ id: 'email' })}
            required
            {...register('email', {
              required: true,
              minLength: { value: 10, message: formatMessage({ id: 'min.length.20' }) },
              maxLength: { value: 30, message: formatMessage({ id: 'max.length.30' }) },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'wrong email',
              },
            })}
          />

          <PasswordInput password={password} register={register} errors={errors} setValue={setValue} />

          <Link color="inherit" className="link" to="/forgot-password">
            {formatMessage({ id: 'forgot.password' })}
          </Link>

          <div className="btn-box">
            <Button className="submit-btn" variant="contained" type="submit" color="primary">
              {formatMessage({ id: 'login' })}
            </Button>

            <Link to="/registration" className="link-box">
              <Button className="submit-btn" variant="contained" color="primary">
                {formatMessage({ id: 'registration' })}
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default Login
