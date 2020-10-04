import React, { Component } from 'react';
import axios from "axios";

class ApectoMallProductLike extends Component {
constructor(props) {
    super(props);
    this.AddToFavourite = this.AddToFavourite.bind(this);
    this.DeleteFavourite = this.DeleteFavourite.bind(this);
    this.state={
        transparentLoader:true,
        loadError:false,
        loaded:false,
    };
}

    AddToFavourite(product_id,shop_id){
        let currentComponent = this;
        var payload ={
            productId:product_id,
            shopId:shop_id
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"userfav/fav/add",payload)
        .then(function(response) { 
          console.log("favourite list"+response.data);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "FAV_ALREADY_PRESENT"){
                currentComponent.setState({
                  loadError:false,
                  loaded:false,
                  transparentLoader:false,

                });
                currentComponent.DeleteFavourite(product_id,shop_id);          
              }else if(response.data.error.errorName === "FAILED_TO_ADD_FAV"){
                currentComponent.setState({
                  loadError:false,
                  loaded:false,
                  transparentLoader:false,

                });
                console.log("Failed to add in favourite");          
              }else{
                currentComponent.setState({
                  loaded:false,
                  transparentLoader:false,
                });
                console.log("DB error !!! Failed to add product in favourite");
              }
  
          }else if(response.data.status.isSuccess === true){
              currentComponent.setState({
                loaded:false,
                transparentLoader:false,
                favProduct:true,
              });
              console.log("Product added in favourite");
            }  
          })
        .catch(function(error) {
          console.log(error);
        });        
    }

    render() {
        console.log("like id and props",this.props.productId,this.props.shopId);
        return (
            <div className="productLike">
              {this.props.favProduct === true?<span className="like icon-heart" onClick={()=>this.DeleteFavourite(this.props.productId,this.props.shopId)}></span>:
              <span className="like flaticon-like" onClick={()=>this.AddToFavourite(this.props.productId,this.props.shopId)}></span>}
              
              </div>
                
        );
    }

    DeleteFavourite(product_id,shop_id){
      let currentComponent = this;
      var payload ={
          productId:product_id,
          shopId:shop_id
      }
      axios
      .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"userfav/fav/delete",payload)
      .then(function(response) { 
        console.log("favourite list"+response.data);
        if(response.data.error !== null){
          if(response.data.error.errorName === "FAILED_TO_DELETE_FAV"){
              currentComponent.setState({
                loadError:false,
                loaded:false,
                transparentLoader:false,

              });
              console.log("product Not in favourite");          
            }else{
              currentComponent.setState({
                loaded:false,
                transparentLoader:false,
              });
              console.log("DB error !!! Failed to Delete product in favourite");
            }

        }else if(response.data.status.isSuccess === true){
          currentComponent.setState({
            loaded:false,
            transparentLoader:false,
          });
          console.log("Product deleted from favourite");
        }  
      })
      .catch(function(error) {
        console.log(error);
      });        
  }
}

export default ApectoMallProductLike;