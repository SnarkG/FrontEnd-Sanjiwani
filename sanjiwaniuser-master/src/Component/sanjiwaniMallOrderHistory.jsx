import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import TransparentLoader from "./transparentLoader";
import ProductBar from "./sanjiwaniMallPLBar";
import SanjiwaniMallCurrentOrderView from './sanjiwaniMallCurrentOrderView';
import BottomMenu from './bottomMenu';

class SanjiwaniMallOrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRated:true,
            orderHistoryAll:[],
            loadError:false,
            emptyHistoryError:false,
            transparentLoader:true,
        }
    }
    UNSAFE_componentWillMount(){
        this.GetOrderHistory();
        localStorage.setItem("activeMenu","Profile");
    }
    GetOrderHistory(){
        let currentComponent = this;
        var payload ={
            shopId:localStorage.getItem("shopIdLocal"),
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"order/getorderhistory",payload)
        .then(function(response) { 
          console.log("product list"+response.data.payload);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "NO_ORDER_HISTORY"){
                currentComponent.setState({
                  loadError:false,
                  emptyHistoryError:true,
                  transparentLoader:false,

                });
                console.log("No order history available");          
              }
            }else if (response.data.status.isSuccess === true) {
                const count=response.data.payload.length;
                    if(count <= 0){
                        currentComponent.setState({
                            emptyHistoryError:true,
                            transparentLoader:false,
                        });
                    }else{
                        let OrderHistoryAll=[];
                        for (let i=0; i<count; i++) {
                            OrderHistoryAll.push(response.data.payload[i]);
                            console.log("Shop Order history"+response.data.payload[i]);
                            if(response.data.payload[i].order_status==="IN_PROCESS" || response.data.payload[i].order_status==="READY_FOR_DELIVERY"){
                                localStorage.setItem("mallBooking","SCHEDULED");
                            }
                        }
                            currentComponent.setState({
                                orderHistoryAll:OrderHistoryAll,
                                emptyHistoryError:false,
                                transparentLoader:false,
                            });
                    }
                  console.log("Shop Order history Information");
              }else{
                currentComponent.setState({
                  transparentLoader:false,
                });
                console.log("To Many Error In Shop order history");
            } 
        })
        .catch(function(error) {
          console.log(error);
        });        
    }

    render() {

        const EmptyError = <div className="rowData divider-60">
              {/* <div className="no-product-image">
              <img src={logo} alt="logo" />
              </div> */}
              <div className="divider-50"></div>
              <div className="textCenter ">
              <div className="fontSize18">No order yet!</div>
              <div className="smallTextLabel divider-10">Find your favourite product &amp; enjoy shopping.</div>
                  
                    <div className="buttonCenter divider-30">
                    <Link to="/mall">
                        <div className="yellowButton-lg ">Start Shopping</div>
                        </Link>
                  </div>
                  
              </div>
        </div>

        const AllOrderHistory = this.state.orderHistoryAll.map((item,index)=>
            <div className="rowDataPadding16 divider-20" key={index}>
                   <div className="rowInner">
                       <div className="width70 text-Left lineHeight1_5">
                           <div className="mall-historyTitle">Sanjiwani Mall</div>
                           <div className="mall-historyArea LOWERCASE colorGray">{item.shipping_address}</div>
                           <div className="mall-historyTotalPrice colorBlack"><i className="icon-rupees icon-history-rupees"></i> {item.offer_price * item.product_quantity}</div>
                           </div>
                           {item.order_status==="IN_PROCESS"?<div className="width30 text-Right mall-history-deliveryText marginRight1"><Link to="/order-details" className="colorBlack">{item.order_status}<i className="icon-check-circle colorGreen"></i></Link></div>:<div className="width30 text-Right mall-history-deliveryText marginRight1">{item.order_status} {item.order_status==="CANCELLED"?<i className="icon-check-circle colorRed"></i>:<i className="icon-check-circle colorGreen"></i>}</div>}
                   </div>
                   <div className="hrLineDashed"></div>
                   <div className="lineHeight2">
                       <span className="mall-historyProductTitle CAPITALIZE">{item.product_name}</span> <i className="fontSize10">x</i> <span className="mall-historyProductQuantity">{item.product_quantity}</span>
                   </div>
                   <div className="mall-history-OrderDate colorGray">{this.getDate(item.delivery_date)}</div>
                   <div className="divider-20"></div>
                   {/* <div className="rowData">
                        <div className="rowInner">
                        <div className="width50">
                            <button className="mall-history-reOrder">REORDER</button></div>
                        <div className="width50">
                            <button className="mall-history-rateOrder">RATE ORDER</button></div>
                        </div>
                        {this.state.isRated?null:
                        <div className="rowInner divider-10">
                            <div className="width50 colorGray fontSize10 textAlignLeft lineHeight1_5">
                                <span></span></div>
                            <div className="width50 colorGray fontSize10 textAlignLeft lineHeight1_5">
                                <span>you haven't rated this order yet please rate</span></div>
                        </div>
                         }
                    </div> */}
                   <div className="divider-10"></div>
                   <div className="hrLineBlack"></div>
                   
                </div> 
        );

        return (
            <>
            <ProductBar productTitle={"Your order history"}backUrl={"mall"}search={false}like={false}cart={false}/> 
            <div className="mall-history-pastOrderLabel divider-45">
                       <div className="smallTextLabel">past order</div>
                </div>
                {this.state.transparentLoader?<TransparentLoader/>:this.state.emptyHistoryError?EmptyError:AllOrderHistory}
                <div className="divider-60"></div>
                {localStorage.getItem("mallBooking")==="SCHEDULED"?<SanjiwaniMallCurrentOrderView/>:null}
                <div className="divider-60"></div>
                <BottomMenu/>
            </>
        );
    }

    getDate(value){
        let Pdate = new Date(value);
        let PLACE_DATE=Pdate.toDateString();
        return PLACE_DATE;
    }

   


}

export default SanjiwaniMallOrderHistory;