import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Hero from './Hero'
import Products from '../pages/products/Products'
import SignUpFormContainer from '../pages/auth/SignUpFormContainer'

const styles = {
  main: {
    position: 'fixed',
    top: 250,
    left: 0,
    right: 0,
    bottom: 25,
    overflow: 'scroll'
  }
}

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Main = (props) => {
  return (
    <div>
      <Hero />
      <main style={styles.main}>
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
      </main>
    </div>
  )
}

Main.propTypes = propTypes

export default Main
