import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'
import AddressFields from './AddressFields'
import injectSheet from 'react-jss'
import CheckoutCard from './CheckoutCard'

const styles = {
  checkOut: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '25%',
    border: 'solid red'
  },
  checkOutImg: {
    width: '100%'
  },
  cartImage: {
    width: '15%'
  }
}

const enhancer = injectSheet(styles)

const propTypes = {
  domainData: AppPropTypes.domainData,
  product: AppPropTypes.product,
  findProductById: PropTypes.func.isRequired,
  classes: PropTypes.object
}

const Checkout = (props) => {
  return (
    <div className={props.classes.checkOut}>
      <div>
        <img className={props.classes.checkOutImg} src='https://www.webjet.com.au/site/images/vc_checkout_button.png' />
      </div>
      <form>
        <AddressFields domainData={props.domainData} addressType={'billing'} />
        <AddressFields domainData={props.domainData} addressType={'shipping'} />
      </form>
      <div>
        <h1> Order Details </h1>
        {
          Object.keys(props.domainData.cart)
            .map(productId => {
              const quantity = props.domainData.cart[productId]
              return (
                <CheckoutCard
                  quantity={quantity}
                  product={props.domainData.findProductById(productId)}
                />
              )
            })
        }
        <h2> Order Total: ${props.domainData.totalCart()} </h2>
      </div>
      <button type='submit'>Place Order</button>
      <h1> _ </h1>
    </div>
  )
}

Checkout.propTypes = propTypes

export default enhancer(Checkout)
