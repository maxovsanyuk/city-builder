import { passwordValidationConfig } from './passwordValidationConfig'
import { usePasswordValidationState } from 'hook/usePasswordValidationState'
import { useIntl } from 'react-intl'

import AnimatedContainer from 'containers/AnimatedContainer/index'
import { PasswordInputComponent } from './style'

import CheckCircleFi from '../../../assets/icons/fi_check-circle.png'
import CheckCircleX from '../../../assets/icons/fi_x-circle.png'
import Dropdown from '../../../assets/icons/Dropdown.png'
import ShowPassword from '../../../assets/icons/show-password.png'
import FiEyeOff from '../../../assets/icons/fi_eye-off.png'

import { TextField, Typography } from '@material-ui/core'
import get from 'lodash/get'

const PasswordInput = ({ password, register, errors, setValue }) => {
  const { passwordState, setPasswordState, isPassedValidation } = usePasswordValidationState(password)
  const { formatMessage } = useIntl()

  return (
    <PasswordInputComponent isPasswordErr={get(errors, 'password.message') || (!isPassedValidation && password)}>
      <TextField
        type={passwordState?.showPassword ? 'text' : 'password'}
        className="input password-input"
        error={!!get(errors, 'password.message') || !!(!isPassedValidation && password)}
        placeholder={formatMessage({ id: 'password' })}
        {...register('password', {
          required: true,
          minLength: { value: 10, message: formatMessage({ id: 'min.length.20' }) },
          maxLength: { value: 30, message: formatMessage({ id: 'max.length.30' }) },
          validate: () => {
            if (!isPassedValidation) {
              return false
            }
          },
        })}
        onFocus={() => setPasswordState({ ...passwordState, isFocused: true })}
        onBlur={e =>
          !e.currentTarget.contains(e?.relatedTarget) && setPasswordState({ ...passwordState, isFocused: false })
        }
      />

      <img
        onClick={() => setPasswordState({ ...passwordState, showPassword: !passwordState?.showPassword })}
        className="hide-password-icon"
        src={passwordState?.showPassword ? ShowPassword : FiEyeOff}
        alt="icon"
      />

      {get(passwordState, 'isFocused') && (
        <AnimatedContainer transition={0.4}>
          <div className="check-password-box">
            <Typography variant="h7" gutterBottom className="title">
              {formatMessage({ id: 'password.must.contain.the.following' })}
            </Typography>

            {passwordValidationConfig.map(({ type, text }) => {
              return (
                <div key={type} className="validation-row">
                  <AnimatedContainer>
                    <img
                      style={{ margin: '0 10px 0 0' }}
                      src={passwordState.validation[`${type}`] ? CheckCircleFi : CheckCircleX}
                      alt="icon"
                    />
                  </AnimatedContainer>
                  {text}
                </div>
              )
            })}
          </div>
        </AnimatedContainer>
      )}

      {(get(errors, 'password.message') || (!isPassedValidation && password)) && (
        <AnimatedContainer>
          <img onClick={() => setValue('password', '')} className="error-icon" src={Dropdown} alt="dropdown" />
        </AnimatedContainer>
      )}
    </PasswordInputComponent>
  )
}

export default PasswordInput
