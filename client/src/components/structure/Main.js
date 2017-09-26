import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Hero from './Hero'
import Products from '../pages/products/Products'
import SignUpFormContainer from '../pages/auth/SignUpFormContainer'
import LoginContainer from '../pages/auth/LoginContainer'
import UserProfileContainer from '../pages/user/UserProfileContainer'
import Checkout from '../pages/checkout/Checkout'
import Cart from '../pages/cart/Cart'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Main = (props) => {
  return (
    <article>
      <Hero domainData={props.domainData} />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route
        path='/products'
        render={() => <Products domainData={props.domainData} />}
      />
      <Route
        path='/signup'
        render={() => <SignUpFormContainer domainData={props.domainData} />}
      />
      <Route
        path='/login'
        render={() => <LoginContainer domainData={props.domainData} />}
      />
      <Route
        path='/user-profile'
        render={() => <UserProfileContainer domainData={props.domainData} />}
      />
      <Route
        path='/cart'
        render={() => <Cart domainData={props.domainData} />}
      />
      <Route
        path='/checkout'
        render={() => <Checkout domainData={props.domainData} />}
      />
    </article>
  )
}

Main.propTypes = propTypes

export default Main
