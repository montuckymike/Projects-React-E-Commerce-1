import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const styles = {
  pListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'solid #e74c3c 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  productHeader: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const enhancer = injectSheet(styles)

const ProductList = (props) =>
  <div>
    <div className={props.classes.productHeader}>
      <h1> Our Fine List of Products </h1>
      <button className={props.classes.button}> <Link className={props.classes.link} to='/products/add'>Add A Product</Link> </button>
    </div>
    <div className={props.classes.pListContainer}>
      {
        props.domainData.products.map(product =>
          <ProductCard
            key={product._id}
            product={product}
            addToCart={() => props.domainData.addToCart(product._id)}
            onDelete={() => props.domainData.deleteProduct(product._id)}              onEdit={() => props.history.push(`/products/edit/${product._id}`)}
          />
        )
      }
    </div>
  </div>

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
}
ProductList.propTypes = propTypes

export default enhancer(ProductList)
