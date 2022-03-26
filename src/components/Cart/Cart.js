import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <div>
                    <div className='for-btn'>
                        <button>CHOOSE 1 FOR ME</button>
                    </div>
                    <div className='again-btn'>
                        <button>CHOOSE AGAIN</button>
                    </div>
                
                </div>
        </div>
    );
};

export default Cart;