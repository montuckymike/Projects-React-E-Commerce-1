import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

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

const enhancer = injectSheet(styles)

const SignUpForm = (props) => {
  return (
    <div className={props.classes.mainSign}>
      <div className={props.classes.signHeader}>
        <h1> Register User </h1>
        <img className={props.classes.thumbnail} src='https://maxcdn.icons8.com/Share/icon/nolan/Users//circled_user_male1600.png' />
      </div>
      <form className={props.classes.form} onSubmit={props.onSubmit}>
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

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired
}

SignUpForm.propTypes = propTypes

export default enhancer(SignUpForm)
