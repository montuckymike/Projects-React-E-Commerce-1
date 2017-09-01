import React from 'react'

const styles = {
  footer: {
    height: 25,
    position: 'fixed',
    alignItems: 'center',
    backgroundColor: '#494949',
    bottom: 0,
    display: 'flex',
    left: 0,
    right: 0,
    color: 'white'
  }
}

const Footer = () => {
  return (
    <footer style={styles.footer}>
      &copy; &nbsp; <p> Some Company 2017 </p>
    </footer>
  )
}

export default Footer
