import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cosmetic.css';

const Cosmetic = ({cosmetic, handleAddToCart}) => {
    // const {cosmetic, handleAddToCart} = props;
    const {id, name, image, price} = cosmetic;
    
    return (
        <div className='cosmetic'>
            <img src={image} alt=""></img>
            <div className='cosmetic-info'>
            <p className='cosmetic-name'>{name}</p>
            <p>ID: {id}</p>
            <p><small>Price: ${price}</small></p>
            </div>
            <button onClick={() => handleAddToCart(cosmetic)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cosmetic;