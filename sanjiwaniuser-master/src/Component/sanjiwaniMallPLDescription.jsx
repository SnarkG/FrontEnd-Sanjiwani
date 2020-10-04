import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";
import axios from "axios";
// import strings from "./stringsoflanguages";
import ProductBar from "./sanjiwaniMallPLBar";
import TransparentLoader from "./transparentLoader";
import ProductDescriptionImages from "./sanjiwaniMallPDescriptionImages";
import ProductRatingAndReview from "./sanjiwaniMallPRatingAndReview";
import MessagePopup from "./messagePopup";
import WriteReview from "./sanjiwaniMallWriteReview";
import logo from '../assets/images/noproduct.png'; 

import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import "../assets/css/slider.css";

class SanjiwaniMallPLDescription extends Component {
    constructor(props) {
            super(props);
            this.state={
                CategoryName:null,
                loaded:true,
                productDescription:[],
                emptyProductError:false,
                count:0,
                showMultipleProductInCart: false,
                productAddedinCart:false,
                showComponentCartMultipleShop: false,
                productAdd: false,
                details:true,
                review:false,
                DetailClass:"detailAndReviewTabActive",
                ReviewClass:"detailAndReviewTab",
                buyNow:false,
            }
        }
    UNSAFE_componentWillMount() {
        this.getProductDescription();
    }

    getProductDescription(){
      let currentComponent = this;
        // Get Product Description
        axios
        .get(process.env.REACT_APP_APECTOMALL_BACKEND_IP+"product/desc/"+localStorage.getItem("description-product-id"))
        .then(function(response) { 
          console.log(response.data.payload);
          if(response.data.error !== null){
            console.log("Null Error");
            
            if(response.data.error.errorName === "NO_PRODUCT_FOUND"){
                currentComponent.setState({
                  emptyProductError:true,
                  loaded:false
                });
                console.log("NO_PRODUCT_FOUND");          
              }else if(response.data.error.errorName === "DB_ERROR"){
                currentComponent.setState({
                  emptyProductError:true,
                  loaded:false
                });
                console.log("DB_ERROR");          
              }
            
          }else if (response.data.status.statusCode === 200) {
            const count=response.data.payload.length;
                if(count <= 0){
                    currentComponent.setState({
                        emptyProductError:true,
                        loaded:false
                    });
                }else{
                    let ProductDescription=[];
                    for (let i=0; i<count; i++) {
                        ProductDescription.push(response.data.payload[i]);
                        console.log("product image List="+ProductDescription[i].product_name);
                    }
                      currentComponent.setState({
                          productDescription:ProductDescription,
                          loaded:false,
                          emptyProductError:false
                      });
                }
              console.log("Product List Information");
          }  
        })
      .catch(function(error) {
          console.log(error);
        });
    }

    render() {
      if(this.state.transparentLoader){
        return <TransparentLoader/>;
      }else if(this.state.buyNow){
        return <Redirect to="cart" />;
      }
      const EmptyError =<div>
        <ProductBar productTitle="No Product found" backUrl={"mall"}search={true}/> 
                      <div className="divider-90"></div>
                            <div className="rowData">
                              <div className="no-product-image">
                              <img src={logo} alt="logo" />
                              </div>
                            
                              <div className="divider"></div>
                              <div className="textCenter ">
                                  <Link to="/mall"><span className="linkColorYellow fontSize18">Find more product!</span>
                                  <div className="icon-right-arrow linkColorYellow divider-10"></div>
                                  </Link>
                              </div>
                        </div>
                </div>
      const ProductDescription = this.state.productDescription.map((item, index) =>
                <div key={index}> 
            <ProductBar productTitle={item.product_name}backUrl={"mall"}search={false}cart={true}like={true}/> 
                <div className="divider-50"></div>
                <ProductDescriptionImages images={item.images}/>
                <div className="divider-90"></div>
                        <div className="rowDataPadding16">
                                <div className="productDescriptionTitle">{item.product_name}</div>
                                <div className="rowInner">
                                    <div className="row">
                                        {/* <ProductRatings ratingCount={item.rating}></ProductRatings> */}
                                    </div>
                                    {item.available_qty < 10?<div className="itemLeftCount divider-5">only {item.available_qty} left</div>:null}
                                </div>
                            </div>
                            <div className="rowDataPadding16 divider-10">
                                <div className="pdPrice">Rs. {item.offer_price} 
                                <span className="pdActualPriceStrick ">Rs. {item.actual_price}</span>
                                <span className="pdOffer">{item.offer_percent}%</span>
                                </div>
                            </div>
                            <div className="hrLine"></div>
                            <div className="rowDataPadding16 divider-20">
                              <div className="rowInner borderBottomWhiteGray">
                                      <div className={this.state.DetailClass} onClick={()=>this.Details()}>Details</div>
                                      <div className={this.state.ReviewClass} onClick={()=>this.Review()}>Write Review</div>
                              </div>
                                {this.state.details?<><p className="divider-10">{item.product_desc}</p>
                                <ProductRatingAndReview productId={item.product_id}/></>:null}
                                {this.state.review?<WriteReview ProductID={item.product_id}/>:null}
                                
                            </div>
                             

                            <div className="divider-60"></div>
                            {this.state.review?null:
                            <div className="bottomMenuFilter noSelect">
                                <div className="bottomMenuContentFilter" >
                                    <div className="bottomMenuContentMenuAdToCart">
                                            <div className="addToCart" 
                                onClick={()=>this.checkDataInCart(item.product_id,item.actual_price,item.offer_price,item.wholeseller_id)}
                                >Add to cart</div>
                                    </div>
                                        <div className="bottomMenuContentMenuAdToCart">
                                            <div className="buyNow" onClick={()=>this.BuyNow(item.product_id,item.actual_price,item.offer_price,item.wholeseller_id)}
                                >Buy Now</div>
                                        </div>
                                </div>
                            </div> }
</div>);
        return (
            <>

            {this.state.loaded? <TransparentLoader/>:this.state.emptyProductError ? EmptyError:ProductDescription} 
                {this.state.productAddedinCart ? (
                <MessagePopup
                    title="Sanjiwani"
                    body="Successfully Added in Cart"
                    closePopup={this.CloseMessagePopup.bind(this)}
                />
                ) : null}

                {this.state.showMultipleProductInCart ? (
                <MessagePopup
                    title="Sanjiwani"
                    body="Product Already in cart"
                    closePopup={this.CloseAlreadyInCartMessagePopup.bind(this)}
                />
                ) : null}
            </>

        );
    }
    Details(){
      this.setState({
        details:true,
        review:false,
        DetailClass:"detailAndReviewTabActive",
        ReviewClass:"detailAndReviewTab",
      })
    }
    Review(){
      this.setState({
        review:true,
        details:false,
        DetailClass:"detailAndReviewTab",
        ReviewClass:"detailAndReviewTabActive",
      })
    }
    checkDataInCart=(productId,actualPrice,offerPrice,wholesellerId)=>{
      this.setState({transparentLoader:true,})
        console.log("check data in cart",productId,actualPrice,offerPrice,wholesellerId);
        let checkDataIncartComponent = this;
        var shop_id=localStorage.getItem("shopIdLocal");
        var payload={
            shopId:shop_id,
        }
        axios
          .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"usercart/get",payload)
          .then(function(response) {
            console.log(response.data.payload);
            if (response.data.error !== null) {
              if (response.data.error.errorName === "NO_PRODUCT_IN_CART") {
                console.log("No item in cart");
                checkDataIncartComponent.addToCart(productId,actualPrice,offerPrice,wholesellerId);
              } else if (response.data.error.errorName === "DB_ERROR") {
                checkDataIncartComponent.setState({
                  loadError: true,
                  transparentLoader: false,
                  loaded:false,
                });
                console.log("DB Error in check data in cart in Sanjiwani mall page");
              }
            } else if (response.data.status.isSuccess === true) {
                const count = response.data.payload.length;
                checkDataIncartComponent.setState({ count: count });
                localStorage.setItem("cartTotalCount", count);
                let checkProductIdmy = "";
                for (let i = 0; i < count; i++) {
                  if (productId === response.data.payload[i].product_id) {
                    checkProductIdmy = productId;
                    console.log("set service id",checkProductIdmy);
                  } 
                }
              if (checkProductIdmy === productId) {
                  console.log("You can't add multiple Product in cart");
                  checkDataIncartComponent.setState({
                    checkProductId: productId,
                    showMultipleProductInCart: !checkDataIncartComponent.showMultipleProductInCart,
                    transparentLoader: false,
                    loaded:false,
                  });
                } else {
                  checkDataIncartComponent.addToCart(productId,actualPrice,offerPrice,wholesellerId);
                }
                
              console.log("in success");
            }
          })
          .catch(function(error) {
            console.log("Error in check data in cart", error.message);
            if (error.message === "Network Error") {
              checkDataIncartComponent.setState({
                loadError: true,
                loaded: false,
                transparentLoader: false
              });
            }
          });
    }

addToCart=(ProductId,ActualPrice,OfferPrice,WholeSellerId)=>{
    var currentComponent = this;
    console.log("Product Added Successfully");
    this.setState({
      count: this.state.count + 1,
      transparentLoader:true,
    });
    var payload = {
        productId:ProductId,
        shopId:localStorage.getItem("shopIdLocal"),
        netActualPrice:ActualPrice,
        netOfferPrice:OfferPrice,
        quantity:1,
        wholeSellerId:WholeSellerId,
    };
    axios
      .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP + "usercart/add", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.status.isSuccess === true) {
          console.log("Product Added in Cart");
          currentComponent.setState({
            loaded: false,
            productAddedinCart: !currentComponent.productAddedinCart,
            transparentLoader: false,
          });
          localStorage.setItem("cartTotalCount", currentComponent.state.count);
        } else if (response.data.error.errorName === "FAILED_TO_ADD") {
          currentComponent.setState({
            loaded: false,
            loadError: true,
            transparentLoader: false
          });
          console.log("Failed to add product in cart from shop home page");
        } else if (response.data.error.errorName === "DB_ERROR") {
          if (response.data.error.error.errorcode === 1062) {
            currentComponent.setState({
              loaded: false,
              loadError: true,
              transparentLoader: false
            });
            console.log("Duplicate Entry in Cart !!!");
          }
        }
      })
      .catch(function(error) {
        console.log( "Error when adding Product in cart from home page",error.message);
        if (error.message === "Network Error") {
          currentComponent.setState({
            loadError: true,
            loaded: false,
            transparentLoader: false
          });
        }
      });
  }

BuyNow=(ProductId,ActualPrice,OfferPrice,WholeSellerId)=>{
    var currentComponent = this;
    this.setState({
      count: this.state.count + 1,
      transparentLoader:true,
    });
    var payload = {
        productId:ProductId,
        shopId:localStorage.getItem("shopIdLocal"),
        netActualPrice:ActualPrice,
        netOfferPrice:OfferPrice,
        quantity:1,
        wholeSellerId:WholeSellerId,
    };
    axios
      .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP + "usercart/add", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.status.isSuccess === true) {
          console.log("Product Added in Cart from buy now");
          currentComponent.setState({
            transparentLoader: false,
            buyNow:true,
          });
          localStorage.setItem("cartTotalCount", currentComponent.state.count);
        } else if (response.data.error.errorName === "ALREADY_PRESENT") {
          currentComponent.setState({
            transparentLoader: false,
            buyNow:true,
          });
          console.log("Failed to add product in Mall description page");
        }else if (response.data.error.errorName === "FAILED_TO_ADD") {
          currentComponent.setState({
            loadError: true,
            transparentLoader: false
          });
          console.log("Failed to add product in Mall description page");
        } else if (response.data.error.errorName === "DB_ERROR") {
          if (response.data.error.error.errorcode === 1062) {
            currentComponent.setState({
              loadError: true,
              transparentLoader: false
            });
          }
        }
      })
      .catch(function(error) {
        if (error.message === "Network Error") {
          currentComponent.setState({
            loadError: true,
            transparentLoader: false
          });
        }
      });
  }

CloseMessagePopup() {
    this.setState({
        productAddedinCart: !this.state.productAddedinCart
    });
  }
  

  CloseAlreadyInCartMessagePopup() {
    this.setState({
      showMultipleProductInCart: !this.state.showMultipleProductInCart
    });
  }
}
export default SanjiwaniMallPLDescription;