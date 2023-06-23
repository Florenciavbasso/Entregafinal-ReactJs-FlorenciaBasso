import React from 'react';

const CartItem = ({ name, quantity, price, onRemove, id }) => {

    const handleRemove = () =>{
        onRemove(id);
    };

    return (
    <div className="CartItem">
        <h4>{name}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio por unidad: ${price}</p>
        <p>Subtotal: ${quantity*price}</p>
        <button onClick={handleRemove}>X</button>
    </div>
    );
};

export default CartItem;