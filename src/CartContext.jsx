import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const loadCartItems = () => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    };

    const [cartItems, setCartItems] = useState(loadCartItems);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
