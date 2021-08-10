import React from 'react'

const Orders = ({ order }) => {
    const orders = Object.entries(order.products)
    let objList = []
    for(let i in orders){
        console.log(typeof(i));
   }
    console.log(orders);
    const productSummary = orders.map(product => {
        return (
            <span
                style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "5px",
                    marginRight: "10px"
                }}
                key={Math.random()}>
                {product.name} X <span style={{ textTransform: "capitalize" }}>
                    {product.quantity}</span> </span>
        )
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px"
        }}>
            <p>ID: {order.userId}</p>
            <p>Address: {order.orderDetails.address}</p>
            <hr />
            {productSummary}
            <hr />
            <p>TotalCost: {order.totalPrice} BDT</p>
        </div>
    )
}

export default Orders


