import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string,
  onEmailChanged: PropTypes.func,
  password: PropTypes.string,
  onPasswordChanged: PropTypes.func,
  firstName: PropTypes.string,
  onFirstNameChanged: PropTypes.func,
  lastName: PropTypes.string,
  onLastNameChanged: PropTypes.func,
  onSubmit: PropTypes.func
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  signHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%'
  },
  thumbnail: {
    width: '100%'
  },
  mainSign: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const SignUpForm = (props) => {
  return (
    <div style={styles.mainSign}>
      <div style={styles.signHeader}>
        <h1> Register User </h1>
        <img style={styles.thumbnail} src='https://maxcdn.icons8.com/Share/icon/nolan/Users//circled_user_male1600.png' />
      </div>
      <form style={styles.form} onSubmit={props.onSubmit}>
        First Name: <input type='text'
          value={props.firstName}
          onChange={props.onFirstNameChanged}
        />
        Last Name: <input type='text'
          value={props.lastName}
          onChange={props.onLastNameChanged}
        />
        Email: <input type='text'
          value={props.email}
          onChange={props.onEmailChanged}
        />
        Password: <input type='text'
          value={props.password}
          onChange={props.onPasswordChanged}
        />
        <input
          type='submit'
          value='Submit User'
        />
      </form>
    </div>
  )
}

SignUpForm.propTypes = propTypes

export default SignUpForm
