import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    //Add to Cart Function and check if the book is already in the cart
    const addToCart = (book) => {
        setCart((prev) => {
            const existing = prev.find((item) => item._id === book._id);

            if (existing) {
                return prev.map((item) =>
                    item._id === book._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...book, quantity: 1 }];
        });
    };

    //Remove from Cart Function one by one.
    const removeFromCart = (bookId) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item._id === bookId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
//Custom Hook to use Cart Context
export function useCart() {
    return useContext(CartContext);
}