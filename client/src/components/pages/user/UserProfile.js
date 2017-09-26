import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

const styles = {
  userProfileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: [1, 'solid', 'red']
  }
}

const enhancer = injectSheet(styles)

const UserProfile = (props) => {
  return (
    <div>
      <h1> User Profile </h1>
      <div className={props.classes.userProfileCard}>
        First Name: {props.firstName}
        Last Name: {props.lastName}
        Email: {props.email}
      </div>
      <h1> End </h1>
    </div>
  )
}

UserProfile.propTypes = propTypes

export default enhancer(UserProfile)
