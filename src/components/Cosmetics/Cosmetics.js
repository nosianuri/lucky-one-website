import React, { useEffect, useState } from 'react';
import './Cosmetics.css';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    const [cart, setCart] = useState([]);
    
    
    

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics(data))
    }, []);

    const handleAddToCart = (cosmetic) =>{
        const newCart = [...cart, cosmetic];
        setCart(newCart);
    }

    return (
        <div className='store'>
            <div className='store-name'>
            <h1>Online Beauty Store</h1>
            </div>
            
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
           
                {
                    cart.map((cart) => (
                    
                <p key={cart.id}> {cart.name}</p>
                       
                    ))
                    
                }
                
                <button onClick={(cart[Math.floor(Math.random()*cart.length)])}>Choose 1 For Me</button>
                <button closeHandleAddToCart>Choose Again</button>
            

            </div> 
             
        </div>
        </div>
        
    );
};

export default Cosmetics;