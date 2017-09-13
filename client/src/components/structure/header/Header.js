import React from 'react'
import NavItem from './NavItem'
import {Link} from 'react-router-dom'

const styles = {
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '10px',
    backgroundColor: '#494949',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'space-between',
    paddingRight: 25
  },
  thumbnail: {
    width: '100%'
  },
  navIcon: {
    display: 'flex',
    flexDirection: 'column',
    width: 50,
    alignItems: 'center'
  }
}

const Header = () =>
  <nav style={styles.header}>
    <div>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/products'>Products</NavItem>
      <NavItem to='/signup'>Sign Up </NavItem>
      <NavItem to='/login'>Login </NavItem>
    </div>
    <div style={styles.navIcon}>
      <Link to='/signup'>
        <img style={styles.thumbnail} src='https://maxcdn.icons8.com/Share/icon/nolan/Users//circled_user_male1600.png' title='Sign Up' />
      </Link>
    </div>
  </nav>

export default Header
