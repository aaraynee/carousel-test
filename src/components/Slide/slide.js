import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image.webformatURL})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  }
  return <div className="slide uk-width-1-5@s uk-width-1-1" style={styles}></div>
}

export default Slide