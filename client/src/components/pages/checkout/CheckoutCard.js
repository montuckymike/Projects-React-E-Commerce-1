import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'

const propTypes = {
  quantity: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  checkoutCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: 'solid blue'
  }
}

const enhancer = injectSheet(styles)

const CheckoutCard = (props) => {
  return (
    <div className={props.classes.checkoutCard}>
      <div>
        Product Name: {props.product.name}
      </div>
      <div>
        Product Quantity:{props.quantity}
      </div>
      <div>
        Product Price: {props.product.price}
      </div>
      <div>
        Total Line Item Price: ${props.product.price*props.quantity}
      </div>
    </div>
  )
}

export default enhancer(CheckoutCard)
