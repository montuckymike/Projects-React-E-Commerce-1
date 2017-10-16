import React, {Component} from 'react'
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

class Checkout extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    classes: PropTypes.object
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.placeOrder()
    /* this.props.history.push('/') */
  }
  render (props) {
    return (
      <div className={this.props.classes.checkOut}>
        <div>
          <img className={this.props.classes.checkOutImg} src='https://www.webjet.com.au/site/images/vc_checkout_button.png' />
        </div>
        <form>
          <AddressFields domainData={this.props.domainData} addressType={'billing'} />
          <AddressFields domainData={this.props.domainData} addressType={'shipping'} />
        </form>
        <div>
          <h1> Order Details </h1>
          {
            Object.keys(this.props.domainData.cart)
              .map(productId => {
                const quantity = this.props.domainData.cart[productId]
                return (
                  <CheckoutCard
                    quantity={quantity}
                    product={this.props.domainData.findProductById(productId)}
                  />
                )
              })
          }
          <h2> Order Total: ${this.props.domainData.totalCart()} </h2>
        </div>
        <button type='submit' onSubmit={this.onSubmit}>Place Order</button>
        <h1> _ </h1>
      </div>
    )
  }
}

export default enhancer(Checkout)
