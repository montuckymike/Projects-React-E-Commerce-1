import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import LoginForm from './LoginForm'

class LoginFormContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

state = {
  email: '',
  password: ''
}

onEmailChanged = (event) => this.setState({
  email: event.target.value
})

onPasswordChanged = (event) => this.setState({
  password: event.target.value
})

onSubmit = (event) => {
  event.preventDefault()
  console.log('domainData', this.props.domainData)
  this.props.domainData.signInUser(this.state)
  this.props.history.push('user ffdfs dfs ******')
}

render () {
  return (
    <LoginForm
      email={this.state.email}
      onEmailChanged={this.onEmailChanged}
      password={this.state.password}
      onPasswordChanged={this.onPasswordChanged}
      onSubmit={this.onSubmit}
    />
  )
}
}

export default LoginFormContainer
