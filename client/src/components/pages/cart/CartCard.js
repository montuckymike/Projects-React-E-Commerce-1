import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'

const propTypes = {
  onSetQuantity: PropTypes.func.isRequired,
  classes: PropTypes.object,
  quantity: PropTypes.number.isRequired,
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired
}

const styles = {
  header: {
    color: 'red'
  }
}

const enhancer = injectSheet(styles)

const CONFIRM_MESSAGE = 'Are you sure you want to delete the last item from your cart'

const CartCard = (props) => {
  console.log(props)

  const onChange = (event) => {
    const quantity = parseInt(event.target.value, 10)
    if (quantity > 0 || window.confirm(CONFIRM_MESSAGE)) {
      props.onSetQuantity(quantity)
    }
  }
  return (
    <div>
      <div>
        <h1 className={props.classes.header}> Cart Card </h1>
      </div>
      <div>
        <h1>Product Name: {props.product.name}</h1>
        <button onClick={props.onDelete}>Delete Items In Cart</button>
        <input
          type='number'
          value={props.quantity}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

CartCard.propTypes = propTypes

export default enhancer(CartCard)
