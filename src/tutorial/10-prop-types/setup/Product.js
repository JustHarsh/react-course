import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({image, name, price}) => {

  const url = image && image.url // fetch the url only if the image is defined

  return <article className='product'>
    <img src={url || defaultImage} alt="" /> {/*if the url doesnt exist then display defaultImage*/}
    <h4>{name}</h4>
    <p>${price || 24.99}</p>
  </article>;

};

Product.PropTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}


export default Product;
