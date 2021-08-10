import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Nav = () => {
    const { products } = useSelector(state => state.CartReducer);
    const { token } = useSelector(state => state.AuthReducer);
    let nav = null;

    if (token === null) {
        nav = (
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/">
                        <img src="/images/logo.webp" alt="logo" />
                    </Link>
                </div>
                <div className="nav__auth">
                    <Link to='/login' className="navlink" > Login </Link>
                </div>
            </div>
        )
    }
    else {
        nav = (
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/">
                        <img src="/images/logo.webp" alt="logo" />
                    </Link>
                </div>
                <div className="nav__right">
                    <div className="nav__auth">
                        <Link to="/cart">
                            <div className="basket">
                                <BsFillBagFill className="cart-icon" />
                                <span>{products.length}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav__auth">
                        <Link to='/orders' className="navlink" > Orders </Link>
                    </div>
                    <div className="nav__auth">
                        <Link to='/logout' className="navlink" > Logout </Link>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="nav">
            <div className="container">
                {nav}
            </div>
        </div>
    )
}

export default Nav;
