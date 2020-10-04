import React, { Component } from "react";
import { Link} from "react-router-dom";
import "../assets/css/snackbarToast.css";
import SanjiwaniMallCurrentOrderView from "./sanjiwaniMallCurrentOrderView";

class SanjiwaniMallEmptyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setClassName: "show"
    };
  }
  CallOnMobile(){
    console.log("Call Cell phone");
    window.open('tel:7709419926');
  }
  render() {
    
    return (
      <div className="emptyCart">
         <div className="divider-70"></div>
          {/* <div className="rowDataPadding16">
            <img src={logo} height="40%" width="90%" alt="logo" />
          </div> */}
          <div className="textCenter">
          <span className="flaticon-Empty-cart">
          </span>
          </div>
   
        <div className="rowDataPadding16">
          <div className="textCenter">
            <div className="SanjiwaniMallEmptyCart-title">Your cart is currently empty !</div>
            <div>Load up the cart with items</div>
          </div>
        </div>
        {/* <div className="divider-5"></div> */}
        <div className="rowDataPadding16">
          <div className="textCenter lineHeight2">
              You can place order by calling at
            <div><i className="icon-address-card">&nbsp;&nbsp;</i><span className="linkColorYellow" onClick={()=>this.CallOnMobile()}> +91 7709419926</span></div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="textCenter ">
            <Link to="/mall"><span className="linkColorYellow fontSize18">Start shopping with us!</span></Link>
          <div className="divider-bottom10"></div>
        </div>
        <div className="bottom-fixed-button">
        <Link to="/mall"><button className="bottomButton">Continue Shopping</button></Link>
          </div>
          {localStorage.getItem("mallBooking")==="SCHEDULED"?<SanjiwaniMallCurrentOrderView/>:null}
          
      </div>
    );
  }
  componentDidMount() {
    localStorage.removeItem("cartTotalCount");
  }
}
export default SanjiwaniMallEmptyCart;
