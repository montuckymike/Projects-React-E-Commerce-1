import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../pages/auth/LoginForm'

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

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroText}>
        <h1 style={styles.heroTitle}> Start Playing with React Now! </h1>
        <div style={styles.buttonDiv}>
          <LoginForm />
        </div>
      </div>
      <div style={styles.heroFun}>
        <img style={styles.heroFunPic} src='https://quicksell.com/wp-content/uploads/2016/12/iphone-6-png-background-11.png' />
      </div>
    </div>
  )
}

export default Hero
