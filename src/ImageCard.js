import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const ImageCard = ({ image }) => {
  const imgHeight = useRef()
  const [span, setSpan] = useState(0)

  const setSpans = () => {
    const height = imgHeight.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpan(spans)
  }

  useEffect(() => {
    imgHeight.current.addEventListener('load', setSpans);
  })

  return (
    <>
      <div style={{ gridRowEnd: `span ${span}` }}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          key={image.id}
          style={{ width: '250px', gridRowEnd: 'span 2' }}
          ref={imgHeight}
          />
      </div>
    </>
  )
}

ImageCard.propTypes = {
  images: PropTypes.arrayOf,
}


export default ImageCard;
