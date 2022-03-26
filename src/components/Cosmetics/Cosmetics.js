import React from 'react';

const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name: 'Olay', image:'', price: 950},
        {id: 2, name: 'Estee Lauder', image:'', price: 830},
        {id: 3, name: 'Nivea', image:'', price: 650},
        {id: 4, name: 'Oreal Paris', image:'', price: 750},
        {id: 5, name: 'Neutrogena', image:'', price: 420},
        {id: 6, name: 'Simple', image:'', price: 380},
        {id: 7, name: 'Cetaphil', image:'', price: 1000},
        {id: 8, name: 'Avene', image:'', price: 1200},
        {id: 9, name: 'Cerave', image:'', price: 600},
        {id: 10, name: 'Clinique', image:'', price: 580},
        {id: 11, name: 'LAshield', image:'', price: 300},
        {id: 12, name: 'Lancome', image:'', price: 500}
]
    return (
        <div>
            <h1>Welcome to my cos metics store</h1>
                {
                    cosmetics.map(cosmetic => console.log(cosmetic))
                }
        </div>
    );
};

export default Cosmetics;