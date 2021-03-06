import PropTypes from 'prop-types'

export const product = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
})

export const domainData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(product).isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  findProductById: PropTypes.func.isRequired,
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired
}).isRequired
