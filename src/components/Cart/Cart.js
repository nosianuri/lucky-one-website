import React from 'react';
import  {useState} from 'react';
import './Cart.css';
import Modal from 'react-modal';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    const [modalIsOpen, setIsOpen] = useState(false);
    // const randomCart = cart[Math.floor(Math.random()*cart.length)];


    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }
    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <div>
                
                    <div className='for-btn'>
                        <button onClick={ openModal }>CHOOSE 1 FOR ME</button>
                    </div>
                    <div className='again-btn'>
                        <button onClick={closeModal}>CHOOSE AGAIN</button>
                    </div>
                
                </div>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button >CHOOSE AGAIN</button>
               <div>
                    {cart.map(cart=><h1 key={cart.id}>{cart.name}</h1>)}
                </div> 
            </Modal>
        </div>
    );
};
Modal.setAppElement('#root');
export default Cart;