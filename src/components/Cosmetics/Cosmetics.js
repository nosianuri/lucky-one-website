import React, { useEffect, useState } from 'react';
import './Cosmetics.css';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    const [cart, setcart] = useState([]);
    
    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics(data))
    }, []);

    const handleAddToCart = (cosmetic) =>{
        console.log(cosmetic);
        // cart.push(cosmetic);
        const newCart = [...cart, cosmetic];
        setcart(newCart);
    }

    return (
        <div className='cosmetics-container'>
            <div className='products-container'>
                {
                    cosmetics.map(cosmetic=><Cosmetic 
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                        handleAddToCart={handleAddToCart}
                        ></Cosmetic>)
                }
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>    
        </div>
    );
};

export default Cosmetics;