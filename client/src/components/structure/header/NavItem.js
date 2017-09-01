import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const styles = {
  link: {
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    paddingRight: '20px'
  }
}

const NavItem = (props) =>
  <NavLink style={styles.link} to={props.to}> {props.children} </NavLink>
/* defining the props.to you could set 'to' to anything, just have to use the same name on the other end
      If I put props.children this is special way to then pass in the name later on <NavItem to='/'>Home</NavItem>
      now I do not need to define props.children I can just pass in what I want it to be like above
*/
NavItem.propTypes = propTypes

export default NavItem
