import React from 'react'
import NavItem from './NavItem'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '10px',
    backgroundColor: '#494949',
    alignItems: 'center',
    color: 'white'
  }
}

const Header = () =>
  <header style={styles.header}>
    <NavItem to='/'>Home</NavItem>
    <NavItem to='/about'>About</NavItem>
    <NavItem to='/products'>Products</NavItem>
    <NavItem to='/signup'>Sign Up </NavItem>
    <NavItem to='/login'>Login </NavItem>
  </header>

export default Header
