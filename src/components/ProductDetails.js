import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsDash, BsPlus } from "react-icons/bs";

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const dispatch = useDispatch();

    const { product } = useSelector(state => state.ProductsReducer);


    useEffect(() => {
        dispatch({
            type: "PRODUCT",
            payload: id
        })
    }, [id])

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                </div>
                

                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                    <div className="details__prices">
                        <span className="details__actual">
                            {currencyFormatter.format(product.price * quantity, { code: 'USD' })}
                        </span>
                        <span className="details__discount">
                            {currencyFormatter.format(product.discountPrice * quantity, { code: 'USD' })}
                        </span>
                    </div>
                    <div className="details__info">
                        <div className="details__incDec">
                            <span className="dec" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}><BsDash /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus /></span>
                            <button className="btn-default" onClick={() => dispatch({
                                type: 'ADD_TO_CART',
                                payload: {
                                    product,
                                    quantity,
                                }
                            })}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className="details__product">
                        <h4>Details</h4>
                        {product.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
