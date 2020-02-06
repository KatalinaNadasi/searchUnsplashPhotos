import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';


const Imagelist = ({ images }) => {

  return (
    <>
      { images.map((image) =>
          <ImageCard image={image} />
      )}
    </>
  )
}

Imagelist.propTypes = {
  images: PropTypes.arrayOf,
}


export default Imagelist;
