import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

// concerned with State management

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    cart: {},
    address: {}
  }

methods = {

  getAllProducts: () =>
    ServerApi.getAllProducts()
      .then(products =>
        this.setState({
          isLoaded: true,
          products: products
        })),

  addProduct: (newProduct) =>
    ServerApi.addProduct(newProduct)
      .then(this.methods.getAllProducts),

  deleteProduct: (productId) =>
    ServerApi.deleteProduct(productId)
      .then(this.methods.getAllProducts),

  updateProduct: (product) =>
    ServerApi.updateProduct(product)
      .then(this.methods.getAllProducts),

  findProductById: (productId) => {
    for (let i = 0; i < this.state.products.length; i++) {
      const currentProduct = this.state.products[i]
      if (currentProduct._id === productId) {
        return currentProduct
      }
    }
  },

  /* updateUser: (userId) =>
    ServerApi.updateUser(userId),
  */
  signUpUser: (user) =>
    ServerApi.signUpUser(user)
      .then((savedUser) => {
        this.setState({
          user: savedUser
        })
        return savedUser
      }),

  loginUser: (email, password) =>
    ServerApi.loginUser(email, password)
      .then((loggedInUser) => {
        console.log(loggedInUser)
        this.setState({
          user: loggedInUser
        })
        return loggedInUser
      }),

  getUser: () =>
    ServerApi.getUser()
      .then(user => {
        this.setState({user})
        return user
      }),

  logoutUser: () =>
    ServerApi.logoutUser()
      .then(() => this.setState({user: null})),
  /* headerUser = (email, password) =>
      ServerApi.loginUser(email, password)
        .then((savedUser) => {
          this.setState({
            user: savedUser
          })
          return savedUser
        })
*/

  addToCart: (productId) => {
    const cart = this.state.cart
    cart[productId] = cart[productId] || 0
    cart[productId] += 1
    this.setState({cart})
  },
  setQuantityInCart: (productId, quantity) => {
    const cart = this.state.cart
    if (quantity > 0) {
      cart[productId] = quantity
    } else {
      delete cart[productId]
    }
    this.setState({cart})
  },
  emptyCart: () => {
    const cartItems = this.state.cart
    cartItems.splice(0, cartItems.length)
    this.setState({cart: cartItems})
  },
  totalCart: () => {
    const products = this.state.products
    const cart = this.state.cart
    return products.filter((product) => cart[product._id])
      .reduce((sum, product) => sum + (product.price * cart[product._id]), 0).toFixed(2)
  }
}

componentDidMount () {
  this.methods.getAllProducts()
  ServerApi.getUser()
    .then(user =>
      this.setState({
        user: user
      }))
}

render () {
  const domainData = {
    ...this.state,
    ...this.methods,
    loggedIn: this.state.user != null,
    loggedOut: this.state.user == null,
    isAdmin: this.state.user != null && this.state.user.local.isAdmin
    // headerUser: this.headerUser
  }

  return this.state.isLoaded ? <Layout domainData={domainData} /> : null
}
}

export default DomainDataProvider
