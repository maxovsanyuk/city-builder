import { message } from 'antd'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { historyPush } from 'services/navigation'
import { Button, Typography, TextField } from '@material-ui/core'

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, any>>()

  const { formatMessage } = useIntl()

  const onSubmit = handleSubmit(data => {
    message.success(`Sent to ${data?.email}`)
    historyPush('/login')
  })

  return (
    <Wrapper>
      <Typography variant="h5" className="h-5" gutterBottom style={{ fontWeight: 600 }}>
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
