import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

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
    height: 100
  },
  inputNeat: {
    borderRadius: [50, 0, 0, 50],
    height: '50%',
    paddingLeft: 25,
    background: 'rgba(255, 255, 255, 1)',
    border: 'rgba(255, 255, 255, 0.6)',
    '&::placeholder': {
      color: '#A9B0C1'
    }
  },
  inputNeatPassword: {
    background: 'rgba(229, 237, 239, 1)',
    height: '50%',
    paddingLeft: 25,
    border: 'rgba(255, 255, 255, 0.6)',
    '&::placeholder': {
      color: '#A9B0C1'
    }
  },
  inputNeatButton: {
    borderRadius: [0, 50, 50, 0],
    height: '52%',
    paddingLeft: 10,
    paddingRight: 20,
    background: 'linear-gradient(to right, #31E58B 0%, #24BD7A 100%)',
    color: 'white',
    fontSize: '1em',
    border: 'solid white 2px',
    fontWeight: 'bold'
  },
  inputs: {
    width: '40%'
  },
  go: {
    width: '20%'
  }
}

const enhancer = injectSheet(styles)

const LoginForm = (props) =>
  <div>

    <form className={props.classes.form} onSubmit={props.onSubmit}>
      <div className={props.classes.inputs}>
        <input
          className={props.classes.inputNeat}
          type='text'
          value={props.email}
          placeholder='Email Address'
          onChange={props.onEmailChanged} />
      </div>
      <div className={props.classes.inputs}>
        <input
          className={props.classes.inputNeatPassword}
          type='text'
          value={props.password}
          placeholder='Password'
          onChange={props.onPasswordChanged} />
      </div>
      <div className={props.classes.go}>
        <input
          className={props.classes.inputNeatButton}
          type='submit'
          value='GO' />
      </div>
    </form>
  </div>

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
}

LoginForm.propTypes = propTypes
export default enhancer(LoginForm)
