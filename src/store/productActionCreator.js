import axios from 'axios';


const orderSuccess = (orders) => {
    return {
        type: "LOAD_ORDERS",
        payload: orders
    }
}


export const fetchOrder = (token, userId) => dispatch => {
const header ={
    headers:{
        "Authorization":`Bearer ${token}`
    }
}
    axios.get(`http://localhost:8000/api/order?id=${userId}`, header)

        .then(response => {
            dispatch(orderSuccess(response.data));
        })
        .catch(err => {
            console.log("err.messege");
        })
}