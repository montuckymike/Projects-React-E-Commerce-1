import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'
import AddressFields from './AddressFields'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Checkout = (props) => {
  return (
    <div>
      <h1> Checkout </h1>
      <form>
        <AddressFields domainData={props.domainData} addressType={'billing'} />
        <AddressFields domainData={props.domainData} addressType={'shipping'} />
      </form>
      <div>
        Order Total: ${props.domainData.totalCart()}
      </div>
      <button type='submit'>Place Order</button>
      <h1> _ </h1>
    </div>
  )
}

Checkout.propTypes = propTypes

export default Checkout
