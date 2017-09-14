import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'

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

const enhancer = injectSheet(styles)

const NavItem = (props) =>
  <NavLink className={props.classes.link} to={props.to}> {props.children} </NavLink>
/* defining the props.to you could set 'to' to anything, just have to use the same name on the other end
      If I put props.children this is special way to then pass in the name later on <NavItem to='/'>Home</NavItem>
      now I do not need to define props.children I can just pass in what I want it to be like above
*/
NavItem.propTypes = {
  classes: PropTypes.object.isRequired
}
NavItem.propTypes = propTypes

export default enhancer(NavItem)
