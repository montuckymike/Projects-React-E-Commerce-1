import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Layout = (props) => (
  <div id='layout'>
    <Header />
    <Main domainData={props.domainData} />
    <Footer />
  </div>
)

Layout.propTypes = propTypes

export default Layout

// header, footer, and main component
// <h2>Number of products: {props.domainData.products.length}</h2>
