import React, { Component } from 'react';
import axios from "axios";
// import ShopNameTopBar from "./topBarBackButton";
import ProductBar from "./sanjiwaniMallPLBar";
import {Redirect} from "react-router-dom";
//import logo from '../assets/images/Logo.png'; 

class SanjiwaniMallAddShippingAddress extends Component {
    constructor(props) {
        super(props);
        this.state={
            toDashboard:false,
            shopAddress:"",
            shopAddress2:"",
            shopCity:"",
            shopState:"",
            shopZipCode:"",
            shopAddressMsg:"",
            showAllErrorMsg:"",
            loadError: false,
            loaded: true
        }
    }
    
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to = '/check-address' />
          }

        return (
            <>
            {/* <ShopNameTopBar ShopName="Sanjiwani" backUrl="check-address" /> */}
            <ProductBar productTitle="Add New Address" backUrl={"check-address"}search={true}like={true}cart={true}/> 
            <div className="divider-45"></div>
            <div className="form-box">
                <div className="rowData ">
                    <div className="newAddress-logo">
                    <div className="title bold"> Sanjiwani</div>
                    </div>
                </div>
                <div className="login-form">
                <div className="rowDataPadding10 textAlignCenter">
                
                    <div className="textAlignLeft">
                    <div className="form-group">
                              <select className="mySelect" id="state" onChange={event=>this.handleAddressType(event.target.value)}>
                                <option value="">select Address Type</option>
                                <option value="WORK">Work</option>
                                <option value="HOME">Home</option>
                                <option value="OTHER1">Other 1</option>
                                <option value="OTHER2">Other 2</option>
                              </select>
                          <label htmlFor="state">Select state</label>
                      </div>

                    <div className="form-group">
                            <input
                                id="shopNumber"
                                name="shopnumber"
                                type="text"
                                placeholder="Enter Shop no/Flat no and residency name"
                                className="form-control-box paddingAll4"
                                onChange={event => this.handleShopAddress(event.target.value)}
                                /><label htmlFor="shopNumber">Street address</label>

                             <input
                                id="shopArea"
                                name="shopArea"
                                type="text"
                                placeholder="Enter near lane/mark"
                                className="form-control-box divider-10 paddingAll4"
                                onChange={event => this.handleShopAddress2(event.target.value)}
                            /><label htmlFor="shopArea">Street address line 2</label>
                            
                                  <div className="form-group divider-10">
                                          <input
                                          id="shopAddressCity"
                                          name="shopAddressCity"
                                          type="text"
                                          placeholder="Enter city"
                                          className="form-control-box paddingAll4"
                                          onChange={event => this.handleShopAddressCity(event.target.value)}
                                      />
                                      <label htmlFor="shopAddressCity">City</label>
                                       
                              </div>
                              <div className="form-group">
                                          <select className="mySelect" id="state" onChange={event=>this.handleShopState(event.target.value)}>
                                            <option value="">select state</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Madhya Pradesh ">Madhya Pradesh </option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Uttar Pradesh ">Uttar Pradesh </option>
                                          </select>
                                      <label htmlFor="state">Select state</label>
                              </div>
                             
                            <div className="rowData divider-10">
                                  <div className="form-group">
                                          <input
                                          id="shopZipCode"
                                          name="shopZipCode"
                                          type="number"
                                          placeholder="Enter zip code"
                                          className="form-control-box paddingAll4"
                                          onChange={event => this.handleShopZipCode(event.target.value)}
                                      />
                                      <label htmlFor="shopAddressCity">Postal/Zip Code</label>
                                       
                              </div>
                              </div>
                              
                             
                            <div className="error-div">{this.state.shopAddressMsg}</div>
                        </div>
                    </div>
                    <div className="rowData divider-30">
                        <div className="buttonCenter">
                            <div className="form-action">
                            <button
                                className="btnLogin"
                                onClick={event => this.handleAddNewShippingAddress(event)}
                            >Submit
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="divider-20"></div>
                </div>
            </div>
          </div>
        </>
        );
    }

    handleAddressType(value){
      this.setState({
        addressType:value,
      });
    }
    handleShopAddress(value){
        console.log(value);
        this.setState({
          shopAddress:value,
        });
      }
      handleShopAddress2(value){
        console.log(value);
        this.setState({
          shopAddress2:value,
        });
      }
      handleShopAddressCity(value){
        console.log(value);
        this.setState({
          shopCity:value,
        });
      }
      handleShopState(value){
        console.log(value);
        this.setState({
          shopState:value,
        });
      }
      handleShopZipCode(value){
        console.log(value);
        this.setState({
          shopZipCode:value,
        });
      }

handleAddNewShippingAddress(event) {
    var shopAddressAll =this.state.shopAddress+" "+this.state.shopAddress2+" "+this.state.shopCity+" "+this.state.shopState+" "+this.state.shopZipCode;
    console.log(shopAddressAll);    
    let currentComponent = this;
        var payload = {
            shopId:localStorage.getItem("shopIdLocal"),
            addressType:this.state.addressType,
            shopAddress:shopAddressAll
            
        };
          if(this.state.addressType === ""){
            this.setState({
              shopAddressMsg:"Select Address Type",
            })
          }else if(this.state.shopAddress === ""){
            this.setState({
              shopAddressMsg:"Enter shop address",
            })
          }else if(this.state.shopCity === ""){
            this.setState({
              shopAddressMsg:"Enter shop city",
            })
          }else if(this.state.shopState === ""){
            this.setState({
              shopAddressMsg:"Select shop state",
            })
          }else if(this.state.shopZipCode === ""){
            this.setState({
              shopAddressMsg:"Enter shop zip code",
            })
          }else if(this.state.shopZipCode < 6){
            this.setState({
              shopAddressMsg:"Zip code must be six digit only",
            })
          }else {
            this.setState({
              loaded: true
            });
          axios
            .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP+ "address/save", payload)
            .then(function(response) {
              console.log(response.data.status);
              if (response.data.status.isSuccess === true) {
                  currentComponent.setState({
                    toDashboard: true
                  });
              } else if (response.data.error.errorName === "FAILED_TO_ADD") {
                console.log("address Already present");
                  currentComponent.setState({
                    showComponentErrorMsg: true,
                    showAllErrorMsg:"address Already Present"
                  });
              }else {
                console.log("DB_ERROR");
              }
            })
          
            .catch(function(error) {
              console.log(error);
            });
        }
      }
}

export default SanjiwaniMallAddShippingAddress;
