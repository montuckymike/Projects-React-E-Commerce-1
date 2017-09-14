import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

// concerned with State management

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null
  }

  componentDidMount () {
    this.getAllProducts()
    ServerApi.getUser()
      .then(user =>
        this.setState({
          user: user
        }))
  }

  getAllProducts = () =>
    ServerApi.getAllProducts()
      .then(products =>
        this.setState({
          isLoaded: true,
          products: products
        }))

  addProduct = (newProduct) =>
    ServerApi.addProduct(newProduct)
      .then(this.getAllProducts)

  deleteProduct = (productId) =>
    ServerApi.deleteProduct(productId)
      .then(this.getAllProducts)

  updateProduct = (product) =>
    ServerApi.updateProduct(product)
      .then(this.getAllProducts)

  findProductById = (productId) =>
    this.state.products.find(p => p._id === productId)

  signUpUser = (user) =>
    ServerApi.signUpUser(user)
      .then((savedUser) => {
        this.setState({
          user: savedUser
        })
        return savedUser
      })

  loginUser = (email, password) =>
    ServerApi.loginUser(email, password)
      .then((savedUser) => {
        this.setState({
          user: savedUser
        })
        return savedUser
      })

  /* headerUser = (email, password) =>
      ServerApi.loginUser(email, password)
        .then((savedUser) => {
          this.setState({
            user: savedUser
          })
          return savedUser
        })
*/

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      updateProduct: this.updateProduct,
      findProductById: this.findProductById,
      signUpUser: this.signUpUser,
      loginUser: this.loginUser,
      user: this.state.user
      // headerUser: this.headerUser
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
