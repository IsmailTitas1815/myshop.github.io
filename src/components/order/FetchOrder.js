import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../store/productActionCreator';
import Orders from './Orders';

const FetchOrder = () => {
    const dispatch = useDispatch();
    const { token, userId } = useSelector(state => state.AuthReducer);
    const { orders } = useSelector(state => state.ProductsReducer);

    useEffect(() => {
        dispatch(fetchOrder(token, userId));
    }, [])

    let userOrders = [];

    if (orders.length === 0) {
        userOrders = <p style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px"
        }}>You have no order!</p>
    }
    else {
        userOrders = orders.map(order => {
            return <Orders order={order} key={order.id} />
        });
    }



    return (
        <div className="mt-100">
            {userOrders}
        </div>
    )
}

export default FetchOrder;
