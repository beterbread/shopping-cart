import { useState, useEffect } from 'react';
import Item from './Item'; 
import './Shop.css'; 

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading-container">
                    <div className="loading-message">Loading...</div>
                    <div className="spinner"></div>
                </div>
            ) : (
                <ul className="shop-container">
                    {products.map(product => (
                        <li key={product.id} className="shop-item">
                            <Item product={product} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Shop;
