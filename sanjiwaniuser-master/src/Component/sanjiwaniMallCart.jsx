import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProductBar from "./sanjiwaniMallPLBar";
import axios from "axios";
import EmptyCart from "./sanjiwaniMallEmptyCart";
import TransparentLoader from "./transparentLoader";
import OrderConfirmPopup from "./OrderConfirmPopup";
import NoProductImage from "../assets/images/images.jpg";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import SanjiwaniMallCurrentOrderView from './sanjiwaniMallCurrentOrderView';

class SanjiwaniMallCart extends Component {
    constructor(props) {
        super(props);
        this.UpdateQuantity = this.UpdateQuantity.bind(this);
        this.getGst = this.getGst.bind(this);
        this.state={
            cartList:[],
            totalPrice:0,
            withGstTotalPrice:0,
            isEmpty:true,
            deliveryFees:0,
            Count:0,
            fees:0,
            loadError:false,
            emptyCartError:false,
            transparentLoader:true,
            offerPercentage:0,
            wishList:false,
            totalItem:0,
            GstAndSgst:10,
        }
    }
    UNSAFE_componentWillMount(){
        this.getCartList();
    }

    getCartList(){
        let currentComponent = this;
        var payload ={
            shopId:localStorage.getItem("shopIdLocal"),
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"usercart/get",payload)
        .then(function(response) { 
          console.log("product list"+response.data.payload);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "NO_PRODUCT_IN_CART"){
                currentComponent.setState({
                  loadError:false,
                  emptyCartError:true,
                  loaded:false,
                  transparentLoader:false,

                });
                console.log("No product available");          
              }
            }else if (response.data.status.isSuccess === true) {
                const count=response.data.payload.length;
                    if(count <= 0){
                        currentComponent.setState({
                            emptyCartError:true,
                            transparentLoader:false,
                        });
                    }else{
                        let CartList=[];
                        let ALLPRICE=0;
                        let OFFERPRICE=0;
                        let QUANTITY=0;
                        for (let i=0; i<count; i++) {
                            CartList.push(response.data.payload[i]);
                            ALLPRICE+=response.data.payload[i]["total_price"];
                            OFFERPRICE+=response.data.payload[i]["net_actual_price"]*response.data.payload[i]["quantity"]-response.data.payload[i]["net_offer_price"]*response.data.payload[i]["quantity"];
                            QUANTITY+=response.data.payload[i]["quantity"];
                            console.log("Shop product Information"+response.data.payload[i]);
                        }
                            localStorage.setItem("cartProductInfoArray", JSON.stringify(CartList));
                            localStorage.setItem("cartTotalCount", count);
                            console.log("OFFERPRICE",OFFERPRICE);
                            currentComponent.setState({
                                cartList:CartList,
                                Count:count,
                                totalPrice:ALLPRICE,
                                totalItem:QUANTITY,
                                offerPercentage:OFFERPRICE,
                                emptyCartError:false,
                                transparentLoader:false,
                            });
                    }
                  console.log("Shop product Information");
              }else{
                currentComponent.setState({
                  loaded:false,
                  transparentLoader:false,
                });
                console.log("To Many Error In Shop product");
            } 
        })
        .catch(function(error) {
          console.log(error);
        });        
    }

    render() {
        var OfferPrice=0;
        var Increase=0;
        var Per=0;
        const CartListAll = this.state.cartList.map((item,index)=>
                <div className="divider-5 singleProduct" key={index}>
                    <div className="rowInner marginTop2">
                        <div className="productData">
                            <div className="productName">{item.product_name}</div>
                                <div className="cartPrice">
                                    <span className="price"><span className="icon-rupees fontSize14"> </span> {item.net_offer_price}</span>
                                    <span className="actualPrice"> {item.net_actual_price}</span>
                                    <span className="hide">{OfferPrice+=item.net_actual_price-item.net_offer_price}</span>
                                    <span className="hide">{Increase =item.net_actual_price-item.net_offer_price}</span>
                                    <span className="hide">{Per =Increase/item.net_actual_price*100}</span>
                                    <span className="offerPercentage colorGreen"> {Math.round(Per)}% off</span>
                                </div>
                            </div>
                        <div className="rowData productImage">
                            <div className="cartproductImage">
                                <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + item.front_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image" />
                            </div>
                            <div className="cartQuantity">
                                <select onChange={(event)=>this.UpdateQuantity(event.target.value,item.product_id,item.shop_id,item.net_actual_price,item.net_offer_price,item.wholeseller_id)}>
                                    <option value={item.quantity}>Qty {item.quantity}</option>
                                    <option value="1">Qty: 1</option>
                                    <option value="2">Qty: 2</option>
                                    <option value="3">Qty: 3</option>
                                    <option value="4">Qty: 4</option>
                                    <option value="5">Qty: 5</option>
                                    <option value="6">Qty: 6</option>
                                    <option value="7">Qty: 7</option>
                                    <option value="8">Qty: 8</option>
                                    <option value="9">Qty: 9</option>
                                    <option value="10">Qty: 10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="hrLine divider-10"></div>
                    <div className="rowInner">
                    {/* onClick={()=>this.GetFavourite(item.shop_id)} */}
                        <div className="cartSaveLater" onClick={()=>this.AddToFavourite(item.product_id,item.shop_id)}><span className="icon-download"> </span> save for later</div>
                        <div className="cartRemove" onClick={()=>this.RemoveFromCart(item.product_id,item.total_price)}><span className="icon-removeCart"> </span> Remove</div>
                    </div>
                </div>

            );    
            
        return (
            <div className="cart">
                <ProductBar productTitle={"cart"}backUrl={"description"}search={false}like={false}cart={false}/> 
                <div className="divider-45"></div>
                {this.state.transparentLoader?<TransparentLoader/>:this.state.emptyCartError?<EmptyCart/>:<>{CartListAll}

               <div className="rowDataPadding16 priceDetails">
                    <div className="cartPriceDetails" >Price  Details</div>
                    <div className="hrLineAll"></div>
                    <div className="rowInner">
                        <div className="cartTitle">Price ( {this.state.totalItem} items )</div>
                        <div className="cartProductPrice"><i className="icon-rupees colorBlackIcon fontSize12"> </i>{this.state.totalPrice}</div>
                    </div>
                    {/* <div className="rowInner">
                        <div className="cartDelivery">SGST</div>
                        <div className="cartDeliveryPrice"> 
                                <i className="icon-rupees colorBlackIcon fontSize12"></i>{this.gst(this.state.totalPrice)}
                          </div>
                    </div>
                    <div className="rowInner">
                        <div className="cartDelivery">CGST</div>
                        <div className="cartDeliveryPrice"> 
                                <i className="icon-rupees colorBlackIcon fontSize12"></i>50
                          </div>
                    </div> */}
                    <div className="rowInner">
                        <div className="cartDelivery">Delivery Fees</div>
                        <div className="cartDeliveryPrice"> {this.state.totalPrice >=500?<span className="text-success">Free</span>:
                                                            <i className="icon-rupees colorBlackIcon fontSize12"> 50
                                                            </i>}</div>
                    </div>
                    <div className="hrLineDashed"></div>
                    <div className="rowInner">
                        <div className="cartTotalTitle">Total Amount <span className="fontSize6 colorGray"> (Including all taxes)</span></div>
                        <div className="cartTotalPrice">
                                {this.state.totalPrice >=500?<i className="icon-rupees colorBlackIcon fontSize12"> {this.state.totalPrice}</i>:
                                                            <i className="icon-rupees colorBlackIcon fontSize12"> {this.state.totalPrice+50}</i>}</div>
                    </div>

                    <div className="cartSaving colorGreen">You will save <i className="icon-rupees"> </i>{this.state.offerPercentage} on this order</div>
                </div>
               <div className="secure-sms">
               <span className="icon-lock"></span><span> safe and secure payment.<br/>100% authentic product.</span>
                </div>
                
                <div className="textCenter background-white paddingTop-30">
                    <Link to="/mall"><span className="linkColorGreen">Continue shopping with us!</span></Link>
                </div>
                
                <div className="divider-120"></div>
                <div className="cartBottomButtonPlaceOrder">
                    <div className="rowInner">
                        <div className="cartTotalPriceButton">
                                <i className="icon-rupees"> </i>{this.state.totalPrice >=500?this.state.totalPrice:this.state.totalPrice+50}
                                <span className="hide">{localStorage.setItem("totalPrice",this.state.totalPrice >=500?this.state.totalPrice:this.state.totalPrice+50)}</span>
                                <div className="colorBlue fontSize10" >Total item price</div>
                        </div>
                        <div className="placeOrderButton">
                            <Link to="/check-address"><button className="placeOrder">Place order</button></Link>
                        </div>
                    </div>
                </div></>}


                {this.state.wishList?<OrderConfirmPopup
                title="Wish list"
                body="Item added in your wish list"
                buttonText="Ok"
                closePopup={this.ClosePopup.bind(this)}
            />:null}

            {localStorage.getItem("mallBooking")==="SCHEDULED"?<SanjiwaniMallCurrentOrderView/>:null}
            </div>
        );
    }
delivery(value){
        if(value === 50){
            this.setState({
                totalPrice:this.totalPrice+this.deliveryFees,
            });
            return(50);
        }else{
            this.setState({
                totalPrice:this.totalPrice,
            });
            return (0);
        }
    }
gst(value){
let gst=(value*8)/100;
this.getGst(gst);
  return gst;
}

getGst(value){
  console.log("gst",value);
}

RemoveFromCart(ProductId,ProductTotalPrice){
    this.setState({
        transparentLoader:true,
    })
        let currentComponent = this;
        var payload ={
            productId:ProductId,
            shopId:localStorage.getItem("shopIdLocal"),
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"usercart/delete",payload)
        .then(function(response) { 
          console.log("product list"+response.data.payload);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "NO_PRODUCT_TO_DELETE"){
                currentComponent.setState({
                  transparentLoader:false,

                });
                console.log("No product available");          
              }
            }else if (response.data.status.isSuccess === true) {
               currentComponent.getCartList();
               currentComponent.setState({
                transparentLoader:false,
              });
                  console.log("Shop product deleted");
              }else{
                currentComponent.setState({
                  transparentLoader:false,
                  totalPrice:-ProductTotalPrice,
                });
                console.log("To Many Error In Shop product");
            } 
        })
        .catch(function(error) {
          console.log(error);
        });        
    }

    ClosePopup(){
        this.setState({
            wishList:false,
        })
    }

UpdateQuantity(value,ProductId,ShopId,actulaPrice,offerPrice,wholesellerId){
        this.setState({
            transparentLoader:true,
        })
            let currentComponent = this;
            var payload ={
                productId:ProductId,
                shopId:ShopId,
                netActualPrice:actulaPrice,
                netOfferPrice:offerPrice,
                quantity:value,
                wholeSellerId:wholesellerId,
            }
            axios
            .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"usercart/update",payload)
            .then(function(response) { 
              console.log("product list"+response.data.payload);
              if(response.data.error !== null){
                console.log("Null Error");
                if(response.data.error.errorName === "FAILED_TO_UPDATE"){
                    currentComponent.setState({
                      transparentLoader:false,
    
                    });
                    console.log("No product available");          
                  }
                }else if (response.data.status.isSuccess === true) {
                   currentComponent.getCartList();
                   currentComponent.setState({
                    transparentLoader:false,
                  });
                      console.log("Shop product updated");
                  }else{
                    currentComponent.setState({
                      transparentLoader:false,
                    });
                    console.log("To Many Error In Shop product");
                } 
            })
            .catch(function(error) {
              console.log(error);
            });        
        }

// save for later
    AddToFavourite(product_id,shop_id){
        this.setState({
            transparentLoader:true,
        })
        let currentComponent = this;
        var payload ={
            productId:product_id,
            shopId:shop_id
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"userfav/fav/add",payload)
        .then(function(response) { 
          console.log("favourite list"+response.data);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "FAV_ALREADY_PRESENT"){
                currentComponent.setState({
                  loadError:false,
                  loaded:false,
                  transparentLoader:false,
                  wishList:true,
                });         
              }else if(response.data.error.errorName === "FAILED_TO_ADD_FAV"){
                currentComponent.setState({
                  loadError:false,
                  loaded:false,
                  transparentLoader:false,

                });
                console.log("Failed to add in favourite");          
              }else{
                currentComponent.setState({
                  loaded:false,
                  transparentLoader:false,
                });
                console.log("DB error !!! Failed to add product in favourite");
              }
  
          }else if(response.data.status.isSuccess === true){
            currentComponent.setState({
              loaded:false,
              transparentLoader:false,
            });
            console.log("Product added in favourite");
          }  
        })
        .catch(function(error) {
          console.log(error);
        });        
    }


    GetFavourite(shop_id){
        this.setState({
            transparentLoader:true,
        })
        let currentComponent = this;
        var payload ={
            shopId:shop_id
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"userfav/fav/get",payload)
        .then(function(response) { 
          console.log("favourite list"+response.data);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "FAV_ALREADY_PRESENT"){
                currentComponent.setState({
                  loadError:false,
                  loaded:false,
                  transparentLoader:false,
                });         
              }else if(response.data.error.errorName === "FAILED_TO_ADD_FAV"){
                currentComponent.setState({
                  loadError:false,
                  loaded:false,
                  transparentLoader:false,

                });
                console.log("Failed to add in favourite");          
              }else{
                currentComponent.setState({
                  loaded:false,
                  transparentLoader:false,
                });
                console.log("DB error !!! Failed to add product in favourite");
              }
  
          }else if(response.data.status.isSuccess === true){
            currentComponent.setState({
              loaded:false,
              transparentLoader:false,
            });
            console.log("Product added in favourite");
          }  
        })
        .catch(function(error) {
          console.log(error);
        });        
    }
    
}

export default SanjiwaniMallCart;