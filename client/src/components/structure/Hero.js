import React from 'react'
import LoginContainer from '../pages/auth/LoginContainer'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../lib/propTypes'

const styles = {
  hero: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://static.pexels.com/photos/2242/wall-sport-green-bike.jpg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 96%, 0 100%)'
  },
  heroText: {
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black',
    width: '66.67%',
    paddingLeft: '15%'
  },
  heroTitle: {
    fontSize: 36
  },
  heroSubTitle: {
    fontSize: 34
  },
  heroFun: {
    width: '100%',
    float: 'right'
  },
  heroFunPic: {
    marginTop: 500,
    width: '33.33%'
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  link: {
    padding: 20,
    width: '33%'
  }
}

const enhancer = injectSheet(styles)

const Hero = (props) => {
  return (
    <div className={props.classes.hero}>
      <div className={props.classes.heroBucket}>
        <div className={props.classes.heroText}>
          <h1 className={props.classes.heroTitle}> Start Playing with React Now! </h1>
        </div>
        <div className={props.classes.buttonDiv}>
          <LoginContainer domainData={props.domainData} />
        </div>
      </div>
      <div className={props.classes.heroFun}>
        <img className={props.classes.heroFunPic} src='https://i.giphy.com/media/XHf0Fn7sKeSRy/giphy.webp' />
      </div>
    </div>
  )
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
  domainData: AppPropTypes.domainData
}

export default enhancer(Hero)
