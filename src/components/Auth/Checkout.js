import React, { Component } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => {
    return {
        products: state.CartReducer.products,
        totalPrice: state.CartReducer.totalPrice,
        userId: state.AuthReducer.userId,
        token: state.AuthReducer.token
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

class Checkout extends Component {

    state = {
        values: {
            address: "",
            phone: "",
            paymentType: "Cash On Delivery"
        },
        modalMsg: "",
        isModalOpen: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = () => {

        // const products = {...this.props.products}
        let pro = {
            name : "something",
            price : '10',
            discount: 1,
            discountPrice: "9",
            quantity : 1,
            description : "lorem dsafdslkafj dsaf;dslfk;jsd afjefsd fdslkf"
        }

        const order = {
            products: pro,
            totalPrice: this.props.totalPrice,
            orderDetails: this.state.values,
            orderTime: new Date(),
            user: this.props.userId
        }
        const header = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.props.token}`
            }
        }
        console.log("response")
        console.log(order)
        
        axios.post("http://localhost:8000/api/order/", order, header)
            .then(response => {
                console.log(response)
                if (response.status === 201) {
                    this.setState({
                        isModalOpen: true,
                        modalMsg: "Order Successfull!",
                    })
                }
                else {
                    this.setState({
                        isModalOpen: true,
                        modalMsg: "Order Failed!"
                    })
                }
            })
            .catch(err =>
                {
                this.setState({
                    isModalOpen: true,
                    modalMsg: "Order Failed in catch!",
                })
            }
            )
    }


    goBack = () => {
        this.props.history.goBack('/');
    }
    render() {

        let form = (
            <div className="container">
                <h4 style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    marginTop: "100px"
                }}>Payment: {this.props.totalPrice} $</h4>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    <textarea name="address" onChange={(e) => this.inputChangeHandler(e)} value={this.state.values.address} className="form-control" placeholder="Your Address" ></textarea>
                    <br />
                    <input name="phone" onChange={(e) => this.inputChangeHandler(e)} className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" />
                    <br />
                    <select name="paymentType" onChange={(e) => this.inputChangeHandler(e)} className="form-control" value={this.state.values.paymentType} >
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                    </select>
                    <br />
                    <Button className="mr-auto" style={{ backgroundColor: "#D70F64" }} onClick={this.submitHandler} >Order</Button>
                    <Button className="ml-2" style={{ backgroundColor: "secondary", marginLeft: "10px" }} onClick={this.goBack} >Cancel</Button>
                </form>
            </div>
        )
        return (
            <div>
                {form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
