import PropTypes from 'prop-types'
import React, {Component} from 'react'
import EditProductForm from './EditProductForm'
import * as AppPropTypes from '../../../lib/propTypes'

class EditProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  constructor (props) {
    super()
    const productId = props.match.params.productId
    const product = props.domainData.findProductById(productId)

    this.state = {
      _id: product._id,
      name: product.name,
      category: product.category,
      image: product.image,
      price: product.price
    }
  }

  onNameChanged = (event) => this.setState({
    name: event.target.value
  })

  onCategoryChanged = (event) => this.setState({
    category: event.target.value
  })

  onImageChanged = (event) => this.setState({
    image: event.target.value
  })

  onPriceChanged = (event) => this.setState({
    price: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.updateProduct(this.state)
    this.props.history.push('/products')
  }

  render () {
    return <EditProductForm
      name={this.state.name}
      onNameChanged={this.onNameChanged}
      category={this.state.category}
      onCategoryChanged={this.onCategoryChanged}
      image={this.state.image}
      onImageChanged={this.onImageChanged}
      price={this.state.price}
      onPriceChanged={this.onPriceChanged}
      onSubmit={this.onSubmit}
    />
  }
}

export default EditProductContainer
