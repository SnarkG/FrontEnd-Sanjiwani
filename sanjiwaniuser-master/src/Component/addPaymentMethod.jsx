import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import TopBarWithBack from './topBarBackButton';
import axios from 'axios';

class AddPaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state={
            showAllErrorMessage:null,
            addAccountInfo:true,
            AccountNumber:null,
            IFSCCode:null,
            BankName:null,
            UPINumber:null,
            UPIMode:null,
            toDisplay:false,
        }
    }
    
    render() {
        if(this.state.toDisplay === true){
            return <Redirect to="/credit"/>;
        }
        return (
            <>
            <TopBarWithBack backUrl="/credit"/>
            <div className="divider-60"></div>
            <div className="rowDataPadding10">
               <div className="borderAllGray paddingAll6">
                    <div className="marginAll6 textCenter">Add Payment Method </div>
                    <div className="hrLine"></div>

                    <div className="form-group textCenter">
                        <div className="radio-toolbar-payment-method">
                            <input type="radio" id="radio1" name="radios" value="ACCOUNT"
                            onChange={event => this.addAccountInfo(event.target.value)} defaultChecked/>
                            <label htmlFor="radio1">By Account Number</label>

                            <input type="radio" id="radio2" name="radios" value="UPI" 
                            onChange={event => this.addAccountInfo(event.target.value)}/>
                            <label htmlFor="radio2">By UPI Number</label>
                        </div>
                    </div>

                  </div>
                  <div className="divider-10"></div>
                {this.state.addAccountInfo=== false?
                <>
                    <div className="textLabel textCenter">Enter UPI Payment Details</div>
                    <div className="rowData">
                            <div className="error-div textCenter">{this.state.showAllErrorMessage}</div>
                    </div>
                    <div className="rowData divider-10">
                        <label htmlFor="upiPay bold">Enter Google/Phone pay number</label>
                        <input type="number" id="upiPay" name="upiPay" placeholder="ex. xxxxxxxx09" className="form-control-box form-control-box-error" onChange={event => this.addUPINumber(event.target.value)}/>
                    </div>
                    <div className="form-group textCenter">
                        <div className="radio-toolbar-payment-method">
                            <input type="radio" id="upi1" name="upiMode" value="Google Pay"
                            onChange={event => this.AddPaymentMode(event.target.value)}/>
                            <label htmlFor="upi1">Google Pay</label>

                            <input type="radio" id="upi2" name="upiMode" value="Phone Pay" 
                            onChange={event => this.AddPaymentMode(event.target.value)}/>
                            <label htmlFor="upi2">Phone Pay</label>
                        </div>
                    </div>

                    <div className="rowDataPaddingPer20 divider-30">
                    <div className="buttonCenter">
                        <div className="form-action">
                        <button className="btnLogin" onClick={event => this.addUPIDetails(event)}>Submit</button>
                        </div>
                    </div>
                </div>
                </>:
                <>
                    <div className="textLabel textCenter">Enter Bank Details</div>
                    <div className="rowData">
                            <div className="error-div textCenter">{this.state.showAllErrorMessage}</div>
                    </div>
                    <div className="rowData divider-10">
                    <label htmlFor="account bold">Enter Account Number</label>
                    <input type="number" id="account" name="account" placeholder="ex. xxxxxxxxx89" className="form-control-box form-control-box-error" onChange={event => this.addAccountNumber(event.target.value)}/>
                </div>
                <div className="rowData divider-5">
                    <label htmlFor="ifsc bold">Enter IFSC Code</label>
                    <input type="text" id="ifsc" name="ifsc" placeholder="ex. SBINxxxxx90" className="form-control-box form-control-box-error inputUPPERCASE" onChange={event => this.addIFSCCode(event.target.value)}/>
                </div>
                <div className="rowData divider-5">
                    <label htmlFor="bank bold">Enter Bank Name</label>
                    <input type="text" id="bank" name="bank" placeholder="ex. state bank of india" className="form-control-box form-control-box-error" onChange={event => this.addBankName(event.target.value)}/>
                </div>

                <div className="rowDataPaddingPer20 divider-30">
                    <div className="buttonCenter">
                        <div className="form-action">
                        <button className="btnLogin" onClick={event => this.addAccountDetails(event)}>Submit</button>
                        </div>
                    </div>
                </div>
                </>}
               
            </div>
            </>
        );
    }
    addAccountNumber(value){
        console.log("account number",value);
        this.setState({
            AccountNumber:value,
        });
    }
    addIFSCCode(value){
        console.log("account ifsc code",value.toUpperCase());
        this.setState({
            IFSCCode:value.toUpperCase(),
        });
    }
    addBankName(value){
        console.log("bank name",value);
        this.setState({
            BankName:value,
        });
    }
    addUPINumber(value){
        console.log("UPI Number",value);
        this.setState({
            UPINumber:value,
        })
    }
    AddPaymentMode(value){
        this.setState({
            UPIMode:value,
        });
    }
    addAccountInfo(value){
        if(value==="ACCOUNT"){
            this.setState({
                addAccountInfo:true,
                showAllErrorMessage:null,
            });
        }else if(value === "UPI"){
            this.setState({
                addAccountInfo:false,
                showAllErrorMessage:null,
            });
        }
    }
    isIfscCodeValid(value) 
    {
        let regExp = /^[A-Z]{4}[0][A-Z0-9]{6}$/;
        console.log(regExp.test(value));
        return regExp.test(value);
    }

    addAccountDetails(){
        console.log("Add new account Details");
        if(this.state.AccountNumber === null){
            this.setState({
                showAllErrorMessage:"Enter Account Number",
            });
            document.getElementById("account").focus();
        }else if(this.state.AccountNumber.length < 11){
            this.setState({
                showAllErrorMessage:"Enter 11 digit Account Number",
            });
            document.getElementById("account").focus();
        }else if(this.state.AccountNumber.length > 11){
            this.setState({
                showAllErrorMessage:"Enter Only 11 digit Account Number",
            });
            document.getElementById("account").focus();
        }else if(this.state.IFSCCode === null){
            this.setState({
                showAllErrorMessage:"Enter Bank IFSC Code",
            });
            document.getElementById("ifsc").focus();
        }else if(this.isIfscCodeValid(this.state.IFSCCode) === false){
            this.setState({
                showAllErrorMessage:"Enter Correct IFSC Code Ex.SBIN0004764",
            });
            document.getElementById("ifsc").focus();
        }else if(this.state.BankName === null){
            this.setState({
                showAllErrorMessage:"Enter Bank Name",
            });
            document.getElementById("bank").focus();
        }else{
            this.setState({
                showAllErrorMessage:null,
            });
            var payload={
                // shopId:"S0078",
                shopId:localStorage.getItem('shopIdLocal'),
                accountNumber:this.state.AccountNumber,
                ifscCode:this.state.IFSCCode,
                bankName:this.state.BankName,
               
              }
              console.log(payload);
              let currentComponent = this;
              axios
                .post(process.env.REACT_APP_PARTNERAPP_BACKEND + "credit/add-account",payload)
                .then(function(response) { 
                    console.log(response);
                    if(response.data.error !== null){
                        console.log("Null Error");
                        if(response.data.error.err.code === "ER_DUP_ENTRY"){
                            currentComponent.setState({
                              showAllErrorMessage:"Account Alerady Added",
                            });
                            console.log("Failed To add Account DUPLICATE ENTRY");              
                          }else{
                            currentComponent.setState({
                              loadError:true,
                            });
                            console.log("To Many Error / Database Error");
                          }
              
                      }else if (response.data.status.isSuccess === true) {
                        console.log("Account Added Successfully !!!");
                        currentComponent.setState({
                            toDisplay:true,
                        });
                    }  
                })
                .catch(function(error) {
                    console.log(error);
                });
        }


    }

    addUPIDetails(){
        console.log("Add new UPI Details");
        if(this.state.UPINumber === null){
            this.setState({
                showAllErrorMessage:"Enter Your Google or Phone Pay Number",
            });
        }else if(this.state.UPINumber.length < 10 ){
            this.setState({
                showAllErrorMessage:"Enter 10 digit Mobile Number",
            });
        }else if(this.state.UPINumber.length > 10 ){
            this.setState({
                showAllErrorMessage:"Enter 10 digit Mobile Number Only",
            });
        }else if(this.state.UPIMode === null ){
            this.setState({
                showAllErrorMessage:"Please select any payment mode",
            });
        }else{
            this.setState({
                showAllErrorMessage:null,
            });
            var payload={
                // shopId:"S0078",
                shopId:localStorage.getItem('shopIdLocal'),
                upiNumber:this.state.UPINumber,
                upiMode:this.state.UPIMode,
              }
              console.log(payload);
              let currentComponent = this;
              axios
                .post(process.env.REACT_APP_PARTNERAPP_BACKEND + "credit/upi",payload)
                .then(function(response) { 
                    console.log(response);
                    if(response.data.error !== null){
                        console.log("Null Error");
                        if(response.data.error.err.code === "ER_DUP_ENTRY"){
                            currentComponent.setState({
                              showAllErrorMessage:"UPI Account Alerady Added",
                            });
                            console.log("Failed To add UPI DUPLICATE ENTRY");              
                          }else{
                            currentComponent.setState({
                              loadError:true,
                            });
                            console.log("To Many Error / Database Error");
                          }
              
                      }else if (response.data.status.isSuccess === true) {
                        console.log("UPI Added Successfully !!!");
                        currentComponent.setState({
                            toDisplay:true,
                        });
                    }  
                })
                .catch(function(error) {
                    console.log(error);
                });

        }
    }

}

export default AddPaymentMethod;