import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image.webformatURL})`,
    height: '100px',
    width: '100px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}

export default Slide