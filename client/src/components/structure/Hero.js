import React from 'react'
import LoginContainer from '../pages/auth/LoginContainer'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  hero: {
    height: 800,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://static.pexels.com/photos/261681/pexels-photo-261681.jpeg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 96%, 0 100%)'

  },
  heroText: {
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black',
    width: '66.67%'
  },
  heroTitle: {
    fontSize: 36
  },
  heroSubTitle: {
    fontSize: 34
  },
  heroFun: {
    width: '33.33%'
  },
  heroFunPic: {
    width: '100%'
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    display: 'inline-block',
    width: '150px',
    padding: '25px',
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    border: '1px solid #fff',
    textAlign: 'center',
    outline: 'none',
    textDecoration: 'none'
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
      <div className={props.classes.heroText}>
        <h1 className={props.classes.heroTitle}> Start Playing with React Now! </h1>
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
  classes: PropTypes.object.isRequired
}

export default enhancer(Hero)
