import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from './CartContext'; 
import './Item.css';

function Item({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart(); 

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleInputChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value, 10) || 1); 
        setQuantity(value);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity); 
        console.log(`Added ${quantity} of ${product.title} to the cart.`);
    };

    return (
        <div className="item">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />

            <div>
                <button onClick={decrement}>-</button>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}
                    min="1"
                />
                <button onClick={increment}>+</button>
            </div>

            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

Item.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;
