import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Layout = (props) => (
  <main id='layout'>
    <Header domainData={props.domainData} />
    <Main domainData={props.domainData} />
    <Footer />
  </main>
)

Layout.propTypes = propTypes

export default Layout

// header, footer, and main component
// <h2>Number of products: {props.domainData.products.length}</h2>
