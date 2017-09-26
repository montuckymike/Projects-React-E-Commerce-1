import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData,
  addressType: PropTypes.string.isRequired
}

const AddressFields = (props) => {
  return (
    <div>
      {
        props.addressType === 'billing' ? <h3> Billing Address </h3> : <h3> Shipping Address </h3>
      }
      <label> Street Name: </label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'street', props.addressType)}
      />
      <label> City: </label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'city', props.addressType)}
      />
      <label> State: </label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'state', props.addressType)}
      />
      <label> Zip Code: </label>
      <input type='text'
        onChange={(event) => props.domainData.updateAddressField(event.target.value, 'zipCode', props.addressType)}
      />
    </div>
  )
}

AddressFields.propTypes = propTypes

export default AddressFields
