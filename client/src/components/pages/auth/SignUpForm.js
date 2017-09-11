import React from 'react'
import {Link} from 'react-router-dom'

const SignUpForm = () => {
  return (
    <div>
      <h1> Register User </h1>
      <form>
        First Name: <input type='text' />
        Last Name: <input type='text' />
        Email: <input type='text' />
        Password: <input type='text' />
      </form>
    </div>
  )
}

export default SignUpForm
