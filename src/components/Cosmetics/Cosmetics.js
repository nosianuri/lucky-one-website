import React, { useEffect, useState } from 'react';
import './Cosmetics.css';
import Cosmetic from '../Cosmetic/Cosmetic';
import Cart from '../Cart/Cart';





  

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    const [cart, setCart] = useState([]);
    // const [modalIsOpen, setIsOpen] = useState(false);
    
    

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics(data))
    }, []);

    const handleAddToCart = (cosmetic) =>{
        // console.log(cosmetic);
        // cart.push(cosmetic);
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
                
            <Cart cart={cart}></Cart>

            </div> 
             
        </div>
        </div>
        
    );
};

export default Cosmetics;