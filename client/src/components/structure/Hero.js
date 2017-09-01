import React from 'react'

const styles = {
  hero: {
    position: 'fixed',
    top: 50,
    height: 200,
    right: 0,
    left: 0,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("http://sedonamtbfestival.com/wp-content/uploads/2017/05/Where-to-ride_.jpg")'
  }
}

const Hero = () => {
  return (
    <div style={styles.hero}>
      <h1> Hero </h1>
    </div>
  )
}

export default Hero
