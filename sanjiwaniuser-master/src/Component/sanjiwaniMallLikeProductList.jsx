import React, { Component } from 'react';
import {Redirect,Link} from "react-router-dom";
import ProductBar from "./sanjiwaniMallPLBar";
// import ProductSort from "./SanjiwaniMallFilterAndSort";
import ProductLike from "./sanjiwaniMallProductLike";
import ProductPrice from "./sanjiwaniMallProductPrice";
import ProductRatings from "./sanjiwaniMallProductRating";
import axios from "axios";
import Loader from './loader';
import ToManyError from "./ToManyError";
import MessagePopup from "./messagePopup";
import logo from '../assets/images/noproduct.png'; 
import TransparentLoader from "./transparentLoader";
import NoProductImage from "../assets/images/images.jpg";
import BottomMenu from './bottomMenu';
import SanjiwaniMallCurrentOrderView from './sanjiwaniMallCurrentOrderView';


class SanjiwaniMallLikeProductList extends Component {
    constructor(props) {
        super(props);
        this.state={
            CategoryName:null,
            productList:[],
            count:0,
            showMultipleProductInCart: false,
            productAddedinCart:false,
            showComponentCartMultipleShop: false,
            productAdd: false,
            showComponent: false,
            showComponentOffer:false,
            transparentLoader:true,
            loadError:false,
            loaded:false,
            emptyProductListError:false,
            description:false,
        }
    }
    UNSAFE_componentWillMount(){
        this.getAllProductList();
     }
     
getAllProductList(){
        let currentComponent = this;
            axios
            .get(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"product/fav-products/"+localStorage.getItem('shopIdLocal'))
            .then(function(response) { 
              console.log("product list"+response.data.payload);
              if(response.data.error !== null){
                console.log("Null Error");
                if(response.data.error.errorName === "NO_PRODUCT_FOUND"){
                    currentComponent.setState({
                      loadError:false,
                      emptyProductListError:true,
                      loaded:false,
                      transparentLoader:false,
    
                    });
                    console.log("No product available");          
                  }else{
                    currentComponent.setState({
                      loaded:false,
                      transparentLoader:false,
                    });
                    console.log("To Many Error In Shop product");
                  }
   
              }else if (response.data.status.statusCode === 200) {
                const count=response.data.payload.length;
                    if(count <= 0){
                        currentComponent.setState({
                            emptyProductListError:true,
                            transparentLoader:false,
                        });
                    }else{
                        let ProductList=[];
                        for (let i=0; i<count; i++) {
                            ProductList.push(response.data.payload[i]);
                            console.log("Shop product Information"+response.data.payload[i]);
                        }
                          currentComponent.setState({
                            productList:ProductList,
                              emptyProductListError:false,
                              transparentLoader:false,
                          });
                    }
                  console.log("Shop product Information");
              }  
            })
            .catch(function(error) {
              console.log(error);
            });
  }

     ProductDescription(productid){
      localStorage.setItem("description-product-id",productid);
      this.setState({
        description:true,
      })
    }

    render() {
        if(this.state.loaded === true){
            return (<Loader />);
          }else if (this.state.description === true) {
              return <Redirect to = '/description' />
            }else if (this.state.loadError === true) {
                return <ToManyError redirectURL={"/mall"} />;
              }else if (localStorage.getItem('shopIdLocal') === null) {
                return <Redirect to = '/login' />
              }

          const EmptyError = <div className="rowData divider-60">
                    <div className="no-product-image">
                    <img src={logo} alt="logo" />
                    </div>
                    <div className="divider-50"></div>
                    <div className="textCenter ">
                        <div className="fontSize18">Your wish list is empty!</div>
                        <div className="smallTextLabel divider-10">Explore more and shortlist some items</div>
                          <div className="buttonCenter divider-30">
                              <Link to="/mall">
                                  <div className="yellowButton-lg ">START SHOPPING</div>
                              </Link>
                        </div>
                        
                    </div>
              </div>

        const ProductListAll = this.state.productList.map((item,index)=>
              <div className="productContainer" key={index}>
                     <ProductLike productId={item.product_id}shopId={localStorage.getItem('shopIdLocal')}favProduct={item.favProduct}/>
              
                         <div className="productImage" onClick={()=>this.ProductDescription(item.product_id)}>
                         <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + item.images.frontView} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image" />
                     {/* <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+item.images.frontView} alt="product_image"></img> */}
                     </div>
                     <div className="productText">
                             <div className="productTitle" onClick={()=>this.ProductDescription(item.product_id)}>{item.product_name}</div>
                         <div className="rowInner">
                             <div className="productPriceAndRating">
                                 <ProductPrice 
                                 offerPrice={item.offer_price}
                                 actualPrice={item.actual_price}></ProductPrice>
                                 <ProductRatings ratingCount={item.rating}></ProductRatings>
                             </div>
                             {/* <div className="addToCartProductCard" 
                                    onClick={()=>this.checkDataInCart(item.product_id,item.actual_price,item.offer_price,item.wholeseller_id)}
                                    >Add to cart</div> */}
                             {item.inCart === false?<div className="addToCartProductCard" 
                                    onClick={()=>this.checkDataInCart(item.product_id,item.actual_price,item.offer_price,item.wholeseller_id)}
                                    >Add to cart</div>:<div className="addToCartProductCard"><Link to="/cart">Go to cart</Link></div>}
                                
                         </div>
                     </div>
                     {item.available_qty===0?<div className="soldOutBox"></div>:<div className="soldOutBox"></div>}
                 </div>
       );

        return (
            <>
               <ProductBar productTitle={"Wish list"}backUrl={"mall"}search={false}like={false}cart={true}/> 
               <div className="divider-50"></div>
                <div className="rowData">
                    <div className="rowInnerMall">
                                {this.state.transparentLoader?<TransparentLoader/>:this.state.emptyProductListError?EmptyError:ProductListAll}
                       </div>
                </div>
                {this.state.productAddedinCart ? (
                    <MessagePopup
                        title={this.state.serviceName}
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
                    {this.state.emptyProductListError?null:localStorage.getItem("mallBooking")==="SCHEDULED"?<SanjiwaniMallCurrentOrderView/>:null}
                <div className="divider-60"></div>
               {this.state.emptyProductListError?null:<BottomMenu/>}
               {/* {this.state.emptyProductListError?null:<ProductSort/>} */}
            </>
        );
    }

checkDataInCart=(productId,actualPrice,offerPrice,wholesellerId)=>{
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
                  transparentLoader: false
                });
                console.log("DB Error in check data in cart in Sanjiwani mall page");
              }
            } else if (response.data.status.isSuccess === true) {
                const count = response.data.payload.length;
                console.log("count",count);
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
                    transparentLoader: false
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
            currentComponent.setState({
              loaded: false,
              loadError: true,
              transparentLoader: false
            });
            console.log("Duplicate Entry in Cart !!!");
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

export default SanjiwaniMallLikeProductList;