import React from 'react'
import NavItem from './NavItem'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const styles = {
  header: {
    top: 40,
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
  },
  navDiv: {
    '&:hover': {
      background: 'black'
    }
  }
}

const enhancer = injectSheet(styles)

const Header = (props) =>
  <nav className={props.classes.header}>
    <div className={props.classes.navDiv}>
      <NavItem exact to='/'>Home</NavItem>
    </div>

    <div className={props.classes.navDiv}>
      <NavItem to='/about'>About</NavItem>
    </div>

    <div className={props.classes.navDiv}>
      <NavItem to='/products'>Products</NavItem>
    </div>

    <div className={props.classes.navDiv}>
      <NavItem to='/cart'>Cart</NavItem>
    </div>

    <div className={props.classes.navDiv}>
      {props.domainData.loggedIn ? <NavItem to='/user-profile'>User Profile</NavItem> : null}
    </div>

    <div className={props.classes.navDiv}>
      <NavItem to='/signup'>Sign Up </NavItem>
    </div>

    <div className={props.classes.navDiv}>
      {props.domainData.loggedOut ? <NavItem to='/login'>Login </NavItem> : null}
    </div>

    <div className={props.classes.navIcon}>
      <Link to='/signup'>
        <img className={props.classes.thumbnail} src='https://maxcdn.icons8.com/Share/icon/nolan/Users//circled_user_male1600.png' title='Sign Up' />
      </Link>

    </div>
    {props.domainData.loggedIn ? <button onClick={props.domainData.logoutUser} >Log Out</button> : null}

  </nav>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  domainData: AppPropTypes.domainData
}

export default enhancer(Header)
