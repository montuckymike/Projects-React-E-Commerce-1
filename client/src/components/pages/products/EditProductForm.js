import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const EditProductForm = (props) =>
  <div>
    <h1> Edit </h1>
    <form onSubmit={props.onSubmit}>
      Name: <input type='text' value={props.name} onChange={props.onNameChanged} />
      Category: <input type='text' value={props.category} onChange={props.onCategoryChanged} />
      Image: <input type='text' value={props.image} onChange={props.onImageChanged} />
      Price: <input type='text' value={props.price} onChange={props.onPriceChanged} />
      <input
        type='submit'
        value='Submit Edit'
      />
    </form>
    <h1> End Edit </h1>
  </div>
EditProductForm.propTypes = propTypes

export default EditProductForm
