import { useCart } from './CartContext';
import './Cart.css';

function Cart() {
    const { cartItems, removeFromCart } = useCart(); 

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleCheckout = () => {
        alert('Checkout process initiated!');
    };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p>{item.title}</p>
                                    <p>${item.price} x {item.quantity}</p>
                                    <button onClick={() => handleRemove(item.id)} className="remove-button">
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="checkout-section">
                        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                        <button onClick={handleCheckout} className="checkout-button">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
