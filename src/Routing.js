import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Auth from './components/Auth/Auth';
import Logout from './components/Auth/Logout';

import { authCheck } from './store/authActionCreator';
import Checkout from './components/Auth/Checkout';
import FetchOrder from './components/order/FetchOrder';

const mapStateToProps = state => {
    return {
        token: state.AuthReducer.token
    }
}

const mapDispatchToProps = dispatch => {

    return {
        authCheck: () => dispatch(authCheck())
    }
}

class Routing extends Component {

    componentDidMount() {
        this.props.authCheck();
    }

    render() {

        let routes = null;

        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login" component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )
        }

        else {
            routes = (
                <Switch>
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/productdetails/:id" exact component={ProductDetails} />
                    <Route path="/orders" exact component={FetchOrder} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <div className="container">
                {routes}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routing);