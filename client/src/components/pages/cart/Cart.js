import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import CartCard from './CartCard'
import {Link} from 'react-router-dom'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Cart = (props) => {
  console.log(props.domainData)
  const cartKeys = Object.keys(props.domainData.cart)
  return (
    <div>
      {
        cartKeys.length
          ? <div>
            {
              cartKeys.map((productId, i) =>
                <CartCard
                  key={i}
                  product={props.domainData.findProductById(productId)}
                  quantity={props.domainData.cart[productId]}
                  onDelete={() => props.domainData.setQuantityInCart(productId, 0)}
                  onSetQuantity={(quantity) => props.domainData.setQuantityInCart(productId, quantity)}
                />
              )
            }
            <div>
              <h3>Total: ${props.domainData.totalCart()}</h3>
              <Link to='/checkout'> Checkout Here </Link>
            </div>
            <h1> bottom </h1>
          </div> : <h1>Shopping Cart is empty</h1>
      }
    </div>
  )
}
Cart.propTypes = propTypes

export default Cart
