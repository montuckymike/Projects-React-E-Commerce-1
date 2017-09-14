import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '33.33%'
  }
}

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

const AddProductForm = (props) => {
  return (
    <div>
      <h1> Add Product Form </h1>
      <form style={styles.form} onSubmit={props.onSubmit}>
          Name: <input type='text' value={props.name} onChange={props.onNameChanged} />
          Category: <input type='text' value={props.category} onChange={props.onCategoryChanged} />
          Image: <input type='text' value={props.image} onChange={props.onImageChanged} />
          Price: <input type='text' value={props.price} onChange={props.onPriceChanged} />
        <input
          type='submit'
          value='Submit Form'
          disabled={!props.name || !props.category || !props.image || !props.price}
        />
      </form>
      <Link to='/products'>Cancel (Back to Products)</Link>
      <h1>End Add </h1>
    </div>
  )
}

AddProductForm.propTypes = propTypes

export default AddProductForm
