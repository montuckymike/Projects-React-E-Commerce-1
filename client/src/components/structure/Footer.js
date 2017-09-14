import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  footer: {
    height: 25,
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#494949',
    bottom: 0,
    display: 'flex',
    left: 0,
    right: 0,
    color: 'white'
  }
}

const enhancer = injectSheet(styles)

const Footer = (props) => {
  return (
    <footer className={props.classes.footer}>
      &copy; &nbsp; <p> Some Company 2017 </p>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default enhancer(Footer)
