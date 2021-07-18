import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'

import { Button, Typography, TextField } from '@material-ui/core'

const ForgotPassword: any = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, any>>()

  // const dispatch = useDispatch()
  const { formatMessage } = useIntl()
  const history = useHistory()

  const onSubmit = handleSubmit(data => {
    alert(`Sent to ${data?.email}`)
    // dispatch({ type: ActionType.LOGIN_USER, payload: data })
    history.push('/login')
  })

  return (
    <Wrapper>
      <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
        {formatMessage({ id: 'forgot.password' })}
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
              minLength: { value: 10, message: formatMessage({ id: 'min.length.10' }) },
              maxLength: { value: 30, message: formatMessage({ id: 'max.length.30' }) },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: formatMessage({ id: 'wrong.email' }),
              },
            })}
          />

          <div className="btn-box">
            <Button className="submit-btn" variant="contained" type="submit" color="primary">
              {formatMessage({ id: 'confirm' })}
            </Button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default ForgotPassword
