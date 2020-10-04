import React, { Component } from 'react';
import axios from "axios";
class DeliveryAnnouncement extends Component {
    constructor(props) {
        super(props);
        this.state={
            deliveryInfo:null,
            emptyProductListError:false,
            loadError:false,
            loaded:false,
            transparentLoader:false,
        }
    }
    
    UNSAFE_componentWillMount(){
        this.getDeliveryNotice();
    }
    getDeliveryNotice(){
        let currentComponent = this;
            axios
            .get(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"order/delivery-notice")
            .then(function(response) { 
              console.log("delivery Info"+response.data.payload);
              if(response.data.error !== null){
                console.log("Null Error");
                if(response.data.error.errorName === "NO_DELIVERY_INFO"){
                    currentComponent.setState({
                      loadError:false,
                      loaded:false,
                      transparentLoader:false,
    
                    });
                    console.log("No Delivery Info Available");          
                  }else{
                    currentComponent.setState({
                      loaded:false,
                      transparentLoader:false,
                    });
                    console.log("To Many Error In Shop product");
                  }
      
              }else if (response.data.status.statusCode === 200) {
                console.log("Delivery Info"+response.data.payload.notice);
                 currentComponent.setState({
                    deliveryInfo:response.data.payload.notice,
                 })
              }  
            })
            .catch(function(error) {
              console.log(error);
            });
        }

    render() {
        return (
            <div className="rowData boxShadow">
                <div className="announcement">
                    <div className="icon-bullhorn announcement-icon colorYellow"></div>
                    <div className="announcement-text CAPITALIZE">{this.state.deliveryInfo}</div>
                </div>
                {/* <div className="hrLine"></div> */}
            </div>
            
        );
    }
}

export default DeliveryAnnouncement;