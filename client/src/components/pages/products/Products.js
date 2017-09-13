import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductList from './ProductList'
import AddProductContainer from './AddProductContainer'
import EditProductContainer from './EditProductContainer'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}

const Products = (props) => {
  return (
    <div>
      <Route
        path='/products' exact
        render={(routeProps) => <ProductList domainData={props.domainData} history={routeProps.history} />} />
      <Route
        path='/products/add'
        render={(routeProps) => <AddProductContainer domainData={props.domainData} history={routeProps.history} />}
      />
      <Route
        path='/products/edit/:productId'
        render={(routeProps) =>
          <EditProductContainer
            domainData={props.domainData}
            history={routeProps.history}
            match={routeProps.match}
          />
        }
      />
    </div>

  )
}

Products.propTypes = propTypes

export default Products
