import React, { Component } from 'react';
import ProductBar from "./sanjiwaniMallPLBar";
import strings from './stringsoflanguages';
import "../assets/css/reset.css";
import "../assets/css/accordion.css";
import "../assets/css/style.css"

class SanjiwaniMallHelp extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    render() {
        return (
            <>
            <ProductBar productTitle="Help " backUrl={"/order-details"}search={false}like={false}cart={false}/> 
            <div className="rowDataPaddingPer10 divider-50">
                <div className="textLabelBigBold textCenter">Need Help ? </div>
                <div className="hrLine"></div>
                <div className="textLabel divider-20 ">
                    <ol>
                        <li className="divider-10">Want's to add more item in order ?</li>
                        <li className="divider-10">Want's to repeat this order ?</li>
                        <li className="divider-10">Want's to Add Specific product in list </li>
                        <li className="divider-10">Issue with billing Address ?</li>
                        <li className="divider-10">Set deliver time ?</li>
                        <li className="divider-10">Change Mobile Number ?</li>
                        <li className="divider-10">Delivery on Another Address ?</li>
                        <li className="divider-10">Want's to cancel order ?</li>
                    </ol>
                    <div className="divider-30"></div>
                    <div className="rowInner borderAll">
                            <div className="orderHistoryDetails-button" onClick={()=>this.CallOnMobile()}><i className="icon-mobile marginRight10"></i>{strings.callus}</div><br/>
                            <div className="orderHistoryDetails-button borderZero" onClick={()=>this.CallForEmail()}><i className="icon-email marginRight10"></i>{strings.emailus}</div>
                    </div>
                    
                </div>
            </div>
            </>
        );
    }

    CallOnMobile(){
        console.log("Call Cell phone");
        window.open('tel:7709419926');
      }
    CallForEmail(){
    console.log("Send Email");
    window.open("mailto:Sanjiwani.solutions@gmail.com");
    }

}

export default SanjiwaniMallHelp;