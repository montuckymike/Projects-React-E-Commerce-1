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
  }

  getAllProducts = () =>
    ServerApi.getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products
      }))

  addProduct = (newProduct) =>
    ServerApi.addProduct(newProduct, this.getAllProducts)

  deleteProduct = (productId) =>
    ServerApi.deleteProduct(productId, this.getAllProducts)

  updateProduct = (product) =>
    ServerApi.updateProduct(product, this.getAllProducts)

  findProductById = (productId) =>
    this.state.products.find(p => p._id === productId)

  signUpUser = (user) =>
    ServerApi.signUpUser(user, (savedUser) => this.setState({
      user: savedUser
    }))

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      updateProduct: this.updateProduct,
      findProductById: this.findProductById,
      signUpUser: this.signUpUser
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
