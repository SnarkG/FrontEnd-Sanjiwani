import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";
import ProductBar from "./sanjiwaniMallPLBar";

class SanjiwaniMallPaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state={
            paymentMethodChecked:true,
            classChangeButton:"disabled-button",
        }
    }
    PaymentMethod(value){
        this.setState({
            paymentMethodChecked:false,
            classChangeButton:"bottomButton",
        });
        localStorage.setItem("paymentMethod",value);
//var array = [1, 2, 3];
// localStorage.setItem("array", JSON.stringify(array));
// array = JSON.parse(localStorage.getItem("array"));


// console.log(typeof array); //object
// console.log(array);
    }
    render() {
        if(localStorage.getItem("cartTotalCount") === null){
            return <Redirect to="cart"/>;
            }
        return (
            <>
            <ProductBar productTitle={"Payment Method"}backUrl={"check-address"}search={false}like={false}cart={false}/> 
            <div className="rowData divider-55">
                <div className="titleLabel">Choose Payment Method</div>
                    <div className="radio selected_address divider-15">
                        <label>
                        <input type="radio" className="option-input radio" id="paymentMode" name="paymentMode" value="Cash on delivery" onClick={event=>this.PaymentMethod(event.target.value)} />
                        Cash on delivery</label>
                    </div>
            {/* <div className="selected_address">{this.props.location.query.shippingAddress}</div> */}
            </div>
            <div className="bottom-fixed-button" >
            <Link to={{pathname:"/placeOrder"}}><button className={this.state.classChangeButton} disabled={this.state.paymentMethodChecked}>Next</button></Link>
            </div>
            </>
        );
    }
}

export default SanjiwaniMallPaymentMethod;