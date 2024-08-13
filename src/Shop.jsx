import { useState, useEffect } from 'react';
import Item from './Item'; 

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <Item product={product} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Shop;
