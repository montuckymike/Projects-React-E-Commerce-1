const getAllProducts = (callback) => {
  const options = {
    method: 'GET'
  }

  fetch('/api/products', options)
  // fetch() is asyncronus - so you have to incorporate the following to make it work
    .then(response => response.json())
    .then(json => callback(json.data))
    // the callback is now passing in the json data aka product array -
}

const addProduct = (newProduct, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(newProduct)
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const deleteProduct = (productId, callback) => {
  const options = {
    method: 'DELETE'
  }

  fetch(`/api/products/${productId}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export {getAllProducts, addProduct, deleteProduct}
