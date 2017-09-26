import PropTypes from 'prop-types'
import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

const styles = {
  productItem: {
    background: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '33%',
    margin: 25
  },
  thumbnail: {
    width: '100%'
  },
  productTitle: {
    textAlign: 'center',
    color: 'white'
  },
  imageTitle: {
    background: '#2c3e50'
  },
  catEgory: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  p: {
    fontSize: 12
  },
  price: {
    fontSize: 50
  },
  button: {
    backgroundColor: '#34495e',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    marginBottom: 10,
    justifyContent: 'space-around'
  }
}

const enhancer = injectSheet(styles)

const ProductCard = (props) =>
  <div className={props.classes.productItem}>
    <div className={props.classes.imageTitle}>
      <img className={props.classes.thumbnail} src={props.product.image} />
      <h1 className={props.classes.productTitle}>{props.product.name}</h1>
    </div>
    <div className={props.classes.catEgory}>
      <p className={props.classes.p}> Category:</p>
      <h2>{props.product.category}</h2>
    </div>
    <h3 className={props.classes.price}>${props.product.price}</h3>
    <div className={props.classes.buttonContainer}>
      <button className={props.classes.button} onClick={props.onEdit}>Edit</button>
    </div>
    <div className={props.classes.buttonContainer}>
      <button className={props.classes.button} onClick={props.onDelete}>Delete</button>
    </div>
    <div className={props.classes.buttonContainer}>
      <button className={props.classes.button} onClick={props.addToCart}>Add to Cart</button>
    </div>
  </div>

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: AppPropTypes.product,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

ProductCard.propTypes = propTypes

export default enhancer(ProductCard)
