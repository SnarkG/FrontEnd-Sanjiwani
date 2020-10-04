import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import ToManyError from "./ToManyError";
import LoaderRoundedWithBox from "./loaderRoundedWithBoxMarginZero";

import "../assets/css/popup.css"

class ItemSearch extends Component {
  constructor(props) {
    super();
    this.ShowBottom = this.ShowBottom.bind(this);
    this.HideBottom = this.HideBottom.bind(this);
    this.state = {
      Product:[],
      loadError:false,
      shopId:"",
      productName: "",
      toShopHome:false,
      showTooltipMessage:false,
      showAllErrorMessage:"",
      shopSearchIcon:"iconSearch icon-search",
      loaded:false,
      displayData:false,
      toProductDescription:false,
    }
  }

  ShowBottom() {
        this.setState({
            bottomHide: false
        })
    }

    HideBottom(){
        this.setState({
          bottomHide:true,
        })
      }
UNSAFE_componentWillMount(){
  localStorage.setItem("activeMenu","Search");
    this.setState({
      showTooltipMessage:true,
    });
   
}

sendProductIdtoProductDescription(product_id){
  localStorage.setItem('description-product-id',product_id);
    this.setState({
        toProductDescription: true,
      });
     
}
  render() {
    if (this.state.toProductDescription === true) {
        return <Redirect to={{
          pathname: '/description'
      }} />
    }else if(this.state.loadError === true){
          return (<ToManyError redirectURL = {"/search"}/>);
      }

const ShopServices = this.state.Product.map((item, index) =>
                  <div className="shopServiceListSearch" key={index}>
                      <div className="shopServiceListDetailsSearch" onClick={event => this.sendProductIdtoProductDescription(item.product_id)}>
                            {item.product_name}
                        </div>                         
                    </div>
              );


    return (
          <>
            <div className="searchLocationBar">
                       <div className="shopSearch">
                          <input type="text" className="shopSearchTerm displayTooltip" data-tooltip="Please Enter product name to search ?" placeholder="Find vegetable here ?" onChange={event => this.searchShopNearYou(event.target.value)} value= {this.state.productName} onFocus={()=>this.HideBottom()} onBlur={this.ShowBottom}/>
                        
                          <button type="reset" className="shopSearchButton"  onClick={event => this.searchShopNearYouclear()}>
                          <div className={this.state.shopSearchIcon}></div>
                          </button>
                       
                    </div> 
                    
              </div>
                  <div className="rowData">
                        <div className="textCenter">
                            <div className="error-div-search">{this.state.showAllErrorMessage}</div>
                      </div>
                  </div>
                
                {this.state.loaded?<LoaderRoundedWithBox/>:<div className={this.state.displayData?"productSearch":"hide"}>{ShopServices}</div>}
               </>
    );
  }

  
  searchShopNearYouclear(){
    if (this.state.productName === "") {
      console.log("Please Enter some Thing");
      this.setState({
        showAllErrorMessage: "Please enter product name to find ?",
        displayData:false,
      });
    }

    this.setState({
      shopSearchIcon:"iconSearch icon-search",
      showAllErrorMessage:"",
      productName:"",
      loaded:false,
      displayData:false,
    });

  }

searchShopNearYou(value) {
  this.setState({
    productName: value,
    showAllErrorMessage:"",
    showTooltipMessage:false,
    shopSearchIcon:"iconSearch icon-close",
    loaded:true,
  });
  var payload = {
    productName:this.state.productName,
  }

  let currentComponent = this;
    
    if (this.state.productName === "") {
      console.log("Please Enter some Thing");
      this.setState({
        loaded:false,
        showAllErrorMessage: "Please enter product name to find ?",
      });
      
    }else{
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP + "product/search",payload)
        .then(function(response) { 
          
          if (response.data.error  !==null) {
                if(response.data.error.errorName=== "NO_PRODUCT_FOUND") {
                  currentComponent.setState({
                    showAllErrorMessage: "Sorry no product found...",
                    loaded:false,
                    displayData:false,
                  });
                }
          }else if (response.data.status.isSuccess === true) {
              const count=response.data.payload.length;
              console.log("count",count);
                      let AllProduct=[];
                        for (let i=0; i<count; i++) {
                            AllProduct.push(response.data.payload[i]);
                        }
                        console.log("All Product search",AllProduct);
                        currentComponent.setState({
                            Product:AllProduct,
                            loaded:false,
                            displayData:true,
                        });
                        console.log("Show all product from list");
              }
          
           
        })
        .catch(function(error) {
          console.log(error);
          console.log('Error', error.message);
          if(error.message === "Network Error"){
            currentComponent.setState({
              loadError:true,
              loaded:false,
            });
          }
        });
  }
}

}
export default ItemSearch;
