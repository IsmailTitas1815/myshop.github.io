import axios from 'axios';
import jwt_decode from 'jwt-decode';

const authSuccess = (token, userId) => {
    return {
        type: "AUTH_SUCCESS",
        payload: {
            token: token,
            userId: userId
        }
    }
}

const storeLocally = token => {
    const decoded = jwt_decode(token);
    const expTime = decoded.exp;
    const user_id = decoded.user_id;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', user_id);
    const expirationTime = new Date(expTime * 1000);
    localStorage.setItem('expirationTime', expirationTime);

    return user_id;
}


export const auth = (email, password, mode) => dispatch => {

    const authData = {
        email: email,
        password: password,
    }

    const header = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    let authUrl = null;
    if (mode === "Sign Up") {
        authUrl = "http://localhost:8000/api/user/";
    }
    else {
        authUrl = "http://localhost:8000/api/token/";
    }
    axios.post(authUrl, authData, header)
        .then(response => {
            if (mode !== "Sign Up") {
                const token = response.data.access;
                const user_id = storeLocally(token);
                dispatch(authSuccess(token, user_id))
            }
            else {
                return axios.post("http://localhost:8000/api/token/", authData, header)
                    .then(response => {
                        const token = response.data.access;
                        const user_id = storeLocally(token);
                        dispatch(authSuccess(token, user_id))
                    })
            }

            return response.data;
        })
        .then(data => dispatch(authSuccess(data.idToken, data.localId)))
        .catch(err => {
            // console.log("Something error");
        })
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: "AUTH_LOGOUT",
    }
}

export const authCheck = () => dispatch => {

    const token = localStorage.getItem('token');

    if (!token) {
        dispatch(logout());
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime > new Date()) {
            const userId = localStorage.getItem('userId');

            dispatch(authSuccess(token, userId))
        }
        else {
            dispatch(logout());
        }
    }
}


