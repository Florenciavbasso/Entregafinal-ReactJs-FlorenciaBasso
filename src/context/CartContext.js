import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState ([])


console.log(cart)

const addItem = (item,quantity) => {
    if(!isInCart(item.id)){
        setCart((prev) => [...prev, {...item, quantity}])
    } else {
        console.error('El producto ya fue ingresado')
    }
}

const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart ([])
}

const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId)
}

const calculateTotalQuantity = () => {
    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
    return totalQuantity;
};

const calculateTotal = () => {
    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return totalAmount;
};

return ( <
    CartContext.Provider value = {
        {
            cart,
            totalQuantity: calculateTotalQuantity(),
            total: calculateTotal(),
            addItem,
            removeItem,
            clearCart,
        }
    } >
    {
        children
    } </CartContext.Provider>)
}