import React, { Component } from 'react';
import axios from "axios";
import NoProductImage from "../assets/images/images.jpg";

class ApectoMallItemInOrder extends Component {
    constructor(props) {
        super(props);
        this.state={
            orderHistoryCurrent:[],
            loadError:false,
            transparentLoader:true,
        }
    }
    
    UNSAFE_componentWillMount(){
        this.ItemInOrder();
    }

    ItemInOrder(){
        let currentComponent = this;
        axios
        .get(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"order/item-in-order/"+localStorage.getItem("shopIdLocal"))
        .then(function(response) { 
          console.log("product list"+response.data.payload);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "NO_ORDER_HISTORY"){
                currentComponent.setState({
                  loadError:false,
                  transparentLoader:false,

                });
                console.log("No order in Product history available");          
              }
            }else if (response.data.status.isSuccess === true) {
                const count=response.data.payload.length;
                    if(count <= 0){
                        currentComponent.setState({
                            transparentLoader:false,
                        });
                    }else{
                        let OrderHistoryCurrent=[];
                        for (let i=0; i<count; i++) {
                            OrderHistoryCurrent.push(response.data.payload[i]);
                            console.log("order status",response.data.payload[i].order_status);
                            console.log("Shop Order in Product history"+response.data.payload[i]);
                            if(response.data.payload[i].order_status==="IN_PROCESS" || response.data.payload[i].order_status==="READY_FOR_DELIVERY"){
                                localStorage.setItem("mallBooking","SCHEDULED");
                            }
                        }
                        currentComponent.setState({
                            orderHistoryCurrent:OrderHistoryCurrent,
                            transparentLoader:false,
                        });
                    }
                  console.log("Shop Order Product history Information");
              }else{
                currentComponent.setState({
                  transparentLoader:false,
                });
                console.log("To Many Error In Shop order in Product history");
            } 
        })
        .catch(function(error) {
          console.log(error);
        });        
    }

    render() {
        const OrderHistoryCurrentAll=this.state.orderHistoryCurrent.map((item,index)=>
                                    <div key={index}>
                                        <div className="rowInner">
                                            <div className="productData">
                                                <div className="productName">{item.product_name}</div>
                                                    <div className="cartPrice">
                                                        <span className="price"><span className="icon-rupees fontSize14"> </span>{item.offer_price}</span>
                                                        <span className="actualPrice">{item.actual_price}</span>
                                                        <span className="offerPercentage colorGreen"> {item.offer_percent}% off</span>
                                                    </div>
                                                    <div className="cartPrice divider-10 colorGray fontSize10">
                                                        <span >Total Price -<i className="icon-rupees fontSize8 left-space-10"> </i> {item.offer_price*item.product_quantity}</span>
                                                        {/* <span className="left-space-10 colorGreen fontSize8">{item.order_status}</span> */}
                                                    </div>
                                                </div>
                                            <div className="rowData productImage">
                                                <div className="cartproductImage">
                                                    <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+item.front_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}}  alt="brand_image"/>
                                                </div>
                                                <div className="cartQuantity">Quantity {item.product_quantity}</div>
                                            </div>
                                        </div>
                                        <div className="hrLine divider-10"></div>
                                    </div>);
        return (
            <>
               <div className="rowDataPadding16">
                   <div className="textLabelBigBold">Item In Order</div>
                   <div className="hrLine"></div>
                    {OrderHistoryCurrentAll}
                </div> 
            </>
        );
    }
}

export default ApectoMallItemInOrder;