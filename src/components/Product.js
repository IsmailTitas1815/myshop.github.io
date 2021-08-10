import React from 'react'
import currencyFormatter from 'currency-formatter';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className="col-3">
            <div className="product">
                <div className="product__img">
                    <Link to={`/productdetails/${product.id}`}>
                        <img src={`/images/${product.image}`} alt={product.name} />
                    </Link>
                </div>
                <div className="product__name">
                    {product.name} 
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="product__price">
                            <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                            <span className="discount">{product.discount}%</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product__discount__price">
                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
