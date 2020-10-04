import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ProductBar from "./sanjiwaniMallPLBar";
import BottomMenu from "./bottomMenu";
import axios from "axios";
import logo from '../assets/images/noproduct.png'; 
import "../assets/css/reset.css";
import "../assets/css/style.css";
import SanjiwaniMallItemInOrder from './sanjiwaniMallItemInOrder';
import ClientDeletePopup from './clientDeletePopup';

class SanjiwaniMallOrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            dot_checked:"order-track-status-dot",
            line_checked:"order-track-status-line",
            dot_empty:"order-track-status-dot-empty",
            line_empty:"order-track-status-line-empty",
            isRated:true,
            orderHistoryCurrent:[],
            loadError:false,
            emptyHistoryError:false,
            transparentLoader:true,
            showDeletePopup:false,
            deleteOrderId:null,
        }
    }
    UNSAFE_componentWillMount(){
        this.GetOrderHistory();
    }
    GetOrderHistory(){
        let currentComponent = this;
        console.log(localStorage.getItem("shopIdLocal"));
        axios
        .get(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"order/current-order/"+localStorage.getItem("shopIdLocal"))
        .then(function(response) { 
          console.log("get order details"+response.data.payload);
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
                        let OrderHistoryCurrent=[];
                        for (let i=0; i<count; i++) {
                            OrderHistoryCurrent.push(response.data.payload[i]);
                            console.log("order status",response.data.payload[i].order_status);
                            console.log("Shop Order history"+response.data.payload[i]);
                            if(response.data.payload[i].order_status==="IN_PROCESS" || response.data.payload[i].order_status==="READY_FOR_DELIVERY"){
                                localStorage.setItem("mallBooking","SCHEDULED");
                            }
                        }
                        currentComponent.setState({
                            orderHistoryCurrent:OrderHistoryCurrent,
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
       const EmptyOrderHistoryError=<div className="rowData">
                                    <div className="no-product-image">
                                    <img src={logo} alt="logo" />
                                    </div>
                                    <div className="divider-50"></div>
                                    <div className="textCenter ">
                                        <Link to="/mall"><span className="linkColorYellow fontSize18">Currently No Order<br/>continue shopping with us!</span>
                                        <div className="icon-right-arrow linkColorYellow divider-10"></div>
                                        </Link>
                                    </div>
                                </div>
        const OrderHistoryCurrentAll=this.state.orderHistoryCurrent.map((item,index)=>
                <div key={index}>
                <div className="rowDataPadding16">
                    <div className="textLabel borderBottomWhiteGray textCenter">Order No {index+1}</div>
                    <div className="rowInner divider-5">
                        <div className="text-Left lineHeight2">
                                <div className="mall-historyTitle">Order Id: #{item.order_id}</div>
                                <div className="mall-history-OrderDate">Date: {this.getDate(item.placed_date)}</div>
                            {/* <div className="mall-historyTitle">Items: <span>{item.product_name}<i className="fontSize10">x</i> {item.product_quantity}</span> </div> */}
                            </div>
                    </div>
                    <div className="hrLineDashed"></div>
                    <div className="lineHeight2 rowInner">
                            <div className="mall-historyTitle width50 textAlignLeft">Total price</div>
                            <div className="mall-historyTitle width50 fontWeightBold"><i className="symbolRupees"></i> {item.total_price}
                            </div>
                        </div>
                    <div className="divider-20"></div>
                    </div>
                    <div className="divider-20"></div>
                    {item.order_status !== "IN_PROCESS"?
                    <div className="delivery-note lineHeight1_2"><span className="delivery-note-title">Please note : </span> Your order has been packed and ready for dispatch</div>:
                    <div className="delivery-note lineHeight1_2"><span className="delivery-note-title">Please note : </span> Your order has not been delivere yet.</div> }           
                <div className="divider-20"></div>
                <section className="track-box">
                        <div className="order-track-step">
                            <div className="order-track-status">
                                <span className={this.state.dot_checked}></span>
                                <span className={this.state.line_checked}></span>                            
                            </div>
                            <div className="order-track-text">
                                <div className="order-track-text-stat">Ordered</div>
                                <span className="order-track-text-sub">{this.getDate(item.placed_date)}</span>
                            </div>
                        </div>
                        <div className="order-track-step">
                            <div className="order-track-status">
                            {item.order_status === "READY_FOR_DELIVERY" || item.order_status === "DELIVERED"?<>
                                <span className={this.state.dot_checked}></span>
                                <span className={this.state.line_checked}></span></>:<>
                                <span className={this.state.dot_empty}></span>
                                <span className={this.state.line_empty}></span></>}
                            </div>
                            <div className="order-track-text">
                                <div className="order-track-text-stat">Ready for delivery</div>
                                <span className="order-track-text-sub">{this.getDate(item.placed_date)}</span>
                            </div>
                        </div>
                        <div className="order-track-step">
                            <div className="order-track-status">
                            {item.order_status === "DELIVERED"?<>
                                <span className={this.state.dot_checked}></span>
                                <span className={this.state.line_checked}></span></>:<>
                                <span className={this.state.dot_empty}></span>
                                <span className={this.state.line_empty}></span></>}
                            </div>
                            <div className="order-track-text">
                                <div className="order-track-text-stat"> Delivery</div>
                                <span className="order-track-text-sub">{this.getDate(item.delivery_date)}</span>
                                <div className="order-track-text-sub-deliver">{item.shipping_address}</div>
                            </div>
                        </div>
                </section>
                    <div className="rowInner borderTopBottom fontSize14">
                    {item.order_status === "READY_FOR_DELIVERY" || item.order_status === "DELIVERED"?
                    <div className="orderHistoryDetails-button OpacityLow"> Cancle</div>:
                    <div className="orderHistoryDetails-button " onClick={()=>this.OrderCancelPopup(item.order_id)}> Cancle</div>}
                        <div className="orderHistoryDetails-button borderZero"><Link to="/mall-help" className="colorBlack bold">Need help ? </Link></div>
                    </div>
                    <div className="divider-30"></div>
                    </div>);

        return (
            <>
            <ProductBar productTitle="Order details " backUrl={"mall"}search={false}like={false}cart={false}/> 
            <div className="divider-50"></div>
            {this.state.emptyHistoryError?EmptyOrderHistoryError:OrderHistoryCurrentAll}
            <div className="divider-10"></div>
            {this.state.emptyHistoryError?null:<SanjiwaniMallItemInOrder/>}
            <div className="divider-60"></div>
                <BottomMenu/>

                {this.state.showDeletePopup ?
                <ClientDeletePopup
                    text="Are you sure want to Cancel Order ?"
                    DeleteBookingPopup={this.OrderCancel.bind(this)}
                    closePopup={this.DeleteBookingPopup_NO.bind(this)}
                />
                : null
                }
            </>
        );
    }

    getDate(value){
        let Pdate = new Date(value);
        let PLACE_DATE=Pdate.toDateString();
        return PLACE_DATE;
    }
    OrderCancelPopup(value){
        this.setState({
            deleteOrderId:value,
            showDeletePopup:true,
        });
    }
    DeleteBookingPopup_NO(){
        this.setState({
          showDeletePopup:false,
      });
      console.log("Not Deleted Or Cancle Booking !!!");
      }


    OrderCancel(){
        this.setState({
            transparentLoader:true,
        })
        var payload ={
            order_id:this.state.deleteOrderId

        }
        let currentComponent = this;
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"order/cancel",payload)
        .then(function(response) { 
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "DB_ERROR"){
                currentComponent.setState({
                  transparentLoader:false,

                });
                console.log("Order not cancel something goes wrong");          
              }
            }else if (response.data.status.isSuccess === true) {
                currentComponent.setState({
                    showDeletePopup:false,
                  });
                currentComponent.GetOrderHistory();
                localStorage.removeItem("mallBooking");
                console.log("Order successfully cancelled");
              }else{
                currentComponent.setState({
                  transparentLoader:false,
                });
                console.log("To Many Error In Order cancel");
            } 
        })
        .catch(function(error) {
          console.log(error);
        });        
    }

}

export default SanjiwaniMallOrderDetails;