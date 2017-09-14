import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50
  },
  inputNeat: {
    height: 35,
    background: 'rgba(255, 255, 255, 0.6)',
    border: 'rgba(255, 255, 255, 0.6)',
    borderRight: 'white'
  },
  inputNeatButton: {
    height: 36,
    background: 'rgba(52, 152, 219, 0.6)',
    border: 'solid white 1px'
  }
}

const LoginForm = (props) =>
  <div>
    <div style={styles.header}>
      <h1>Login</h1>
    </div>
    <form style={styles.form} onSubmit={props.onSubmit}>
      <input
        style={styles.inputNeat}
        type='text'
        value={props.email}
        placeholder='Email Address'
        onChange={props.onEmailChanged} />
      <input
        style={styles.inputNeat}
        type='text'
        value={props.password}
        placeholder='Password'
        onChange={props.onPasswordChanged} />
      <input
        style={styles.inputNeatButton}
        type='submit'
        value='Submit' />
    </form>
  </div>

LoginForm.propTypes = propTypes
export default LoginForm
