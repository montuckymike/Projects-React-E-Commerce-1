import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const propTypes = {
  domainData: AppPropTypes.domainData,
  street: PropTypes.string.isRequired,
  onStreetChanged: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  onCityChanged: PropTypes.string.isRequired,
  billState: PropTypes.string.isRequired,
  onBillStateChanged: PropTypes.func.isRequired,
  zipCode: PropTypes.string.isRequired,
  onZipCodeChanged: PropTypes.string.isRequired
}

const Checkout = (props) => {
  return (
    <div>
      <h1> Hello from Checkout </h1>
      <form>
        <label> Street Name: </label>
        <input type='text' value={props.street} onChange={props.onStreetChanged} />
        <label> City: </label>
        <input type='text' value={props.city} onChange={props.onCityChanged} />
        <label> State: </label>
        <input type='text' value={props.billState} onChange={props.onBillStateChanged} />
        <label> Zip Code: </label>
        <input type='text' value={props.zipCode} onChange={props.onZipCodeChanged} />
      </form>
      <div>
        Order Total: ${props.domainData.totalCart()}
      </div>
      <button type='submit'>Place Order</button>
      <h1> Bottom </h1>
    </div>
  )
}

Checkout.propTypes = propTypes

export default Checkout
