import React, { Component } from 'react';
import axios from "axios";
import TransparentLoader from "./transparentLoader";
import OrderConfirmPopup from "./OrderConfirmPopup";
import ProductBar from "./sanjiwaniMallPLBar";
import ToManyError from "./ToManyError";
import strings from './stringsoflanguages';
import { Redirect } from 'react-router';
import NoProductImage from "../assets/images/images.jpg";

class SanjiwaniMallplaceOrder extends Component {
    constructor(props) {
        super(props);
        this.DeleteCartAllData = this.DeleteCartAllData.bind(this);
        this.state={
            product_Id:null,
            orderPlace:false,
            transparentLoader:false,
            loadError:false,
            viewHistory:false,
            SanjiwaniMall:false,
            productQuantity:null,
            totalPrice:null,
            wholsellerId:null,
            cartProductInfo:JSON.parse(localStorage.getItem("cartProductInfoArray")), 
        };
    }
    
    UNSAFE_componentWillMount(){
      console.log("Product count in order Place",this.state.cartProductInfo.length);
      let PID="";
      let PQ="";
      let WHOLESELER_ID="";
      let count=this.state.cartProductInfo.length;
      for(let i=0;i<count;i++){
        if(i===count-1){
          PID+=this.state.cartProductInfo[i]["product_id"];
          PQ+=this.state.cartProductInfo[i]["quantity"];
          WHOLESELER_ID+=this.state.cartProductInfo[i]["wholeseller_id"];
        }else{
          PID+=this.state.cartProductInfo[i]["product_id"]+",";
          PQ+=this.state.cartProductInfo[i]["quantity"]+",";
          WHOLESELER_ID+=this.state.cartProductInfo[i]["wholeseller_id"]+",";
        }
        
      }
      console.log("product id",PID);
      console.log("product quantity",PQ);
      console.log("wholeseller id",WHOLESELER_ID);
      this.setState({
        product_Id:PID,
        productQuantity:PQ,
        wholsellerId:WHOLESELER_ID,
      })
    }
    
    render() {
        if(this.state.transparentLoader === true){
            return (<TransparentLoader/>);
            }else if(this.state.viewHistory === true){
              return <Redirect to="order-details"/>;
              }else if(this.state.SanjiwaniMall === true){
                return <Redirect to="order-history"/>;
                }else if(localStorage.getItem("cartTotalCount") === null){
                  return <Redirect to="cart"/>;
                  }else if(this.state.loadError === true){
                    return (<ToManyError redirectURL="/mall"/>);
                  }else if(localStorage.getItem("language") !== null){
                    strings.setLanguage(localStorage.getItem("language"));
                  }else if(localStorage.getItem("language") === null){
                    strings.setLanguage("en");
                  }
        return (
            <>
            <ProductBar productTitle={"Order Confirm"}backUrl={"payment"}search={false}like={false}cart={false}/> 
            <div className="divider-45">
                <div className="order_place_details_title">Owner Details</div>
                <div className="paddingTopBottom10">
                <div className="order_place_details_data">{localStorage.getItem("ownerName")}</div>
                <div className="order_place_details_data">{localStorage.getItem("mobileNumber")}</div>
                </div>
                <div className="order_place_details_title">Shipping Address</div>
                <div className="paddingTopBottom10">
                <div className="order_place_details_data">{localStorage.getItem("shippingAddress")}</div>
                </div>
                <div className="order_place_details_title">Payment Method</div>
                <div className="paddingTopBottom10">
                <div className="order_place_details_data">{localStorage.getItem("paymentMethod")}</div>
                </div>
                <div className="order_place_details_title">Product Info</div>
                
                {this.state.cartProductInfo.map((cartProduct, index) => (
                    <div className="rowDataPadding10 divider-10 hrLineBottom" key={index}>
                        <div className="rowInner">
                        <div className="rowData productImage">
                            <div className="cartproductImage">
                            <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + cartProduct.front_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image" />
                            </div>
                        </div>
                        <div className="rowDataPadding10 productData">
                            <div className="cartProductName">{cartProduct.product_name}</div>
                            <div className="cartProductName cartQuantityTitleSmall" >Quantity - {cartProduct.quantity}</div>
                        </div> 
                    </div>
                </div>))}
                <div className="rowDataPadding10 priceDetails">
                <div className="rowInner">
                        <div className="cartTotalTitle">Total Amount</div>
                        <div className="cartTotalPriceButton-place-order">
                                <i className="icon-rupees colorBlackIcon"> </i>
                                {localStorage.getItem("totalPrice")}
                        </div>
                    </div>
                    </div>
            </div>
            <div className="divider-90"></div>
            <div className="bottom-fixed-button">
                <button className="bottomButton" onClick={()=>this.OrderConfirm()}>Confirm order</button>
            </div>

            {this.state.orderPlace?<OrderConfirmPopup
                title="Thank you for shopping with us"
                body="Your order has been place"
                content="You will receive an order confirmation email with details of your order"
                buttonText="View Order"
                closePopup={this.ClosePopup.bind(this)}
                viewOrderHistory={this.ViewOrderHistory.bind(this)}
            />:null}
            </>
        );
    }
  ClosePopup(){
    console.log("close Popup called");
      this.setState({
          orderPlace:false,
          SanjiwaniMall:true,
      });
  }
  ViewOrderHistory(){
    console.log("ViewOrderHistory called");
    this.setState({
      orderPlace:false,
      viewHistory:true,
    })
  }

  OrderConfirm(){
      this.setState({
          transparentLoader:true,
      })
      var payload ={
          productId:this.state.product_Id,
          shopId:localStorage.getItem("shopIdLocal"),
          shippingAddress:localStorage.getItem("shippingAddress"),
          contactDetails:localStorage.getItem("mobileNumber"),
          productQuantity:this.state.productQuantity,
          totalPrice:localStorage.getItem("totalPrice"),
          wholsellerId:this.state.wholsellerId,

      }
      let currentComponent = this;
      axios
      .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"order/place",payload)
      .then(function(response) { 
        if(response.data.error !== null){
          console.log("Null Error");
          if(response.data.error.errorName === "DB_ERROR"){
              currentComponent.setState({
                transparentLoader:false,

              });
              console.log("Order not place something goes wrong");          
            }
          }else if (response.data.status.isSuccess === true) {
            currentComponent.DeleteCartAllData();
            localStorage.setItem("mallBooking","SCHEDULED");
            console.log("Order successfully place");
            }else{
              currentComponent.setState({
                transparentLoader:false,
              });
              console.log("To Many Error In Order place");
          } 
      })
      .catch(function(error) {
        console.log(error);
      });        
  }

  OrderHistoryGetting(){
      this.setState({
          transparentLoader:true,
      })
      let currentComponent = this;
      var payload ={
          shopId:localStorage.getItem("shopIdLocal"),
      }
      axios
      .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"order/getorderhistory",payload)
      .then(function(response) { 
        if(response.data.error !== null){
          console.log("Null Error");
          if(response.data.error.errorName === "NO_ORDER_HISTORY"){
              currentComponent.setState({
                transparentLoader:false,

              });
              console.log("No order history available");          
            }if(response.data.error.errorName === "DB_ERROR"){
              currentComponent.setState({
                transparentLoader:false,
                loadError:true,
              });
              console.log("Order not place something goes wrong");          
            }
          }else if (response.data.status.isSuccess === true) {
              currentComponent.setState({
              transparentLoader:false,
              orderPlace:true,
            });
                console.log("Order history successfully getting");
            }else{
              currentComponent.setState({
                transparentLoader:false,
              });
              console.log("To Many Error In Order getting history");
          } 
      })
      .catch(function(error) {
        console.log(error);
      });        
  }


  DeleteCartAllData(){
      var payload ={
          shopId:localStorage.getItem("shopIdLocal"),

      }
      let currentComponent = this;
      axios
      .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"usercart/delete-all",payload)
      .then(function(response) { 
        if(response.data.error !== null){
          console.log("Null Error");
          if(response.data.error.errorName === "NO_PRODUCT_TO_DELETE"){
              currentComponent.setState({
                transparentLoader:false,

              });
              console.log("delete data from cart something goes wrong");          
            }
          }else if (response.data.status.isSuccess === true) {
             currentComponent.setState({
              transparentLoader:false,
              orderPlace:true,
            });
            localStorage.setItem("OrderPlace",true);
            localStorage.removeItem("cartTotalCount");
            localStorage.removeItem("paymentMethod");
            localStorage.removeItem("shippingAddress");
            localStorage.removeItem("cartProductInfoArray");
            localStorage.removeItem("totalPrice");
                console.log("user cart all data successfully deleted");
            }else{
              currentComponent.setState({
                transparentLoader:false,
              });
              console.log("To Many Error In Deleting all data from cart");
          } 
      })
      .catch(function(error) {
        console.log(error);
        currentComponent.setState({
          transparentLoader:false,
          loadError:true,
        });
      });        
  }

}

export default SanjiwaniMallplaceOrder;