import React from 'react'
import { useSelector } from 'react-redux';

import Header from './Header';
import Product from './Product';

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer)
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home

