import React, { Component } from 'react';
import ProductBar from "./sanjiwaniMallPLBar";
import {Link, Redirect} from "react-router-dom";
import MessagePopup from "./messagePopup";
import TransparentLoader from "./transparentLoader";
import axios from "axios";

import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

class CheckAddress extends Component {
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            transparentLoader:true,
            shopAddress:[],
            emptyProductError:false,
            count:0,
            addressDeleted:false,
            noAddressPresent:false,
            addNewAddressMsg:"",
            addressChecked:false,
        }
    }

UNSAFE_componentWillMount() {
        this.getAddress();
    }
    
    getAddress(){
        let currentComponent = this;
        var payload={
            shopId:localStorage.getItem("shopIdLocal"),
        }
          axios
          .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP+"address/get",payload)
          .then(function(response) { 
            console.log("address",response.data.payload);
            if(response.data.error !== null){
              console.log("Null Error");
              if(response.data.error.errorName === "NO_ADD_PRESENT"){
                  currentComponent.setState({
                    addNewAddressMsg:"Add New Shipping Address",
                    transparentLoader:false
                  });
                  console.log("NO_ADD_PRESENT");          
                }else{
                  currentComponent.setState({
                    transparentLoader:false
                  });
                  console.log("DB ERROR");
                }
            }else if (response.data.status.statusCode === 200) {
              const count=response.data.payload.length;
                  if(count <= 0){
                      currentComponent.setState({
                        addNewAddressMsg:"Add New Shipping Address",
                        transparentLoader:false
                      });
                  }else{
                      let ShopAddress=[];
                      for (let i=0; i<count; i++) {
                          ShopAddress.push(response.data.payload[i]);
                          console.log("shop address="+ShopAddress[i]);
                      }
                        currentComponent.setState({
                            shopAddress:ShopAddress,
                            transparentLoader:false,
                            emptyProductError:false
                        });
                  }
                console.log("Shop address information");
            }  
          })
        .catch(function(error) {
            console.log(error);
          });
      }
      
  CheckAddress(value){
        console.log(value);
        localStorage.setItem("shippingAddress",value);
        this.setState({
          addressChecked:true,
        })
      }
    
    render() {
      if (this.state.addressChecked === true) {
        return <Redirect to = '/payment' />
      }else if(localStorage.getItem("cartTotalCount") === null){
        return <Redirect to="cart"/>;
        }
        const shopAddressMy = this.state.shopAddress.map((item, index) =>
                        <div className="radio selected_address" key={index}>
                            <label>
                            <input type="radio" className="option-input radio" id="firstAddress" name="address" value={item.shop_address} />
                            {item.shop_address}</label>
                        
                            <div className="rowData textCenter divider-20" id="dispalyButtonFirst">
                            {/* <Link to={{pathname:"/payment",query:{shippingAddress:item.shop_address }}}><button className=" deliverAddress">Deliver to this address</button></Link> */}
                                <button className=" deliverAddress" onClick={()=>this.CheckAddress(item.shop_address)}>Deliver to this address</button>
                                <button className="divider-10 editAddress" onClick={()=>this.deleteAddress(item.shop_id,item.address_type)}>Delete address</button>
                                {/* <button className="divider-10 editAddress">Edit address</button> */}
                            </div>
                        </div>
                        );

        return (
            <>
                <ProductBar productTitle={"Check Address"}backUrl={"/cart"}search={false}like={false}cart={false}/> 
                <div className="rowDataPadding16 divider-45">
                    <div className="selectdeliveryAddress">Select delivery Address</div>
                        {this.state.transparentLoader?<TransparentLoader/>:shopAddressMy}

                        <div className="rowData textCenter divider-20">
                            <Link to="/ship-Address" ><button className="deliverAddressBorder">Add New Address</button></Link>
                            <div className="error-div divider-10 textCenter">{this.state.addNewAddressMsg}</div>
                        </div>
                </div>
                {this.state.addressDeleted ? (
                    <MessagePopup
                        title="Apecto"
                        body="Successfully delete Address"
                        closePopup={this.CloseMessagePopup.bind(this)}
                    />
                    ) : null}
                
            </>
        );
    }

    CloseMessagePopup() {
        this.setState({
            addressDeleted: false,
        });
        this.getAddress();
      }

deleteAddress(shop_ID,Address_Type){
        let currentComponent = this;
        var payload={
            shopId:shop_ID,
            addressType:Address_Type,
        }
          axios
          .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP+"address/delete",payload)
          .then(function(response) { 
            console.log("address",response.data.payload);
            if(response.data.error !== null){
              console.log("Null Error");
              
              if(response.data.Error === "NO_ADD_TO_DELETE"){
                  currentComponent.setState({
                    addNewAddressMsg:"Add New Shipping Address",
                    loaded:false
                  });
                  console.log("NO_ADD_TO_DELETE");          
                }else{
                  currentComponent.setState({
                    loaded:false
                  });
                  console.log("DB_ERROR");
                }
            }else if (response.data.status.statusCode === 200) {
              currentComponent.setState({
                  addressDeleted:true,
              })
                console.log("Shop address Deleted");
            }  
          })
        .catch(function(error) {
            console.log(error);
          });
      }
}

export default CheckAddress;