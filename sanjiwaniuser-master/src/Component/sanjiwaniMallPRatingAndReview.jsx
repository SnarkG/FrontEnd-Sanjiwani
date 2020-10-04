import React, { Component } from 'react';
import axios from "axios";
import TransparentLoader from "./loaderRounded";
// import strings from "./stringsoflanguages";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

class ApectoMallPRatingAndReview extends Component {
     constructor(props) {
          super(props);
          this.state={
              loaded:false,
              productRatingReview:[],
              transparentLoader:true,
              count:0,
              details:true,
              review:false,
              ratingCount:0,
              average:0,
          }
      }
  UNSAFE_componentWillMount() {
      this.getProductRating();
  }
  getProductRating(){
     let currentComponent = this;
       // Get Product Description
       axios
       .get(process.env.REACT_APP_APECTOMALL_BACKEND_IP+"rate/product/"+localStorage.getItem("description-product-id"))
       .then(function(response) { 
         console.log("rating and review",response.data);
          const count=response.data.length;
          console.log("Product Rating Information count",count);
              let ProductRatingReview=[];
              let Average=0;
              for (let i=0; i<count; i++) {
                  ProductRatingReview.push(response.data[i]);
                  Average+=parseInt(response.data[i]["rating"]);
                  console.log("product Rating List="+ProductRatingReview[i]);
                  
              }
              var averageRating=Average/count;
              //console.log("average",averageRating+"count",count);
                currentComponent.setState({
                    productRatingReview:ProductRatingReview,
                    loaded:false,
                    average:Math.round(averageRating),
                    ratingCount:count,
                    transparentLoader:false,
                });
             console.log("List Information"); 
       })
     .catch(function(error) {
         console.log(error);
       });
   }


    render() {
     const EmptyError =<div className="rowData">
                              <span className="errorMsg" >No ratings and review</span>
                         </div>
         const ProductRating =this.state.productRatingReview.map((item,index)=>
                    <div key={index}>
                         <div className="rowData">
                              <div className="rowInner divider-10">
                                   <div className=" reviewShowButton">{item.rating} <span className="icon-star-review"></span></div>
                                   <div className=" reviewShowText">{item.user_name}</div>
                              </div> 
                              <div className="rowData divider-5">
                                    <p>{item.comment}</p>
                                   <div className="reviewDate "><b>{this.GetDate(item.createdAt)}</b></div>
                              </div>
                              <div className="hrLine"></div>
                              </div>
                    </div>
         );
        return (
            <>
            <div className="hrLine"></div>
            
                {this.state.transparentLoader?<TransparentLoader/>: this.state.ratingCount=== 0?EmptyError:<>
                <div className="rowData divider-20">
                   <div className="rowInner">
                        <div className="ratingTitleLabel">Rating &amp; Review</div>
                        {/* <div className="ratingButton">Rate product</div> */}
                   </div> 
                   <div className="rowInner divider-10">
                        <div className=" ratingShowButton">{this.state.average} <span className="icon-star-reviewRating"></span></div>
                        <div className=" ratingShowText">{this.state.ratingCount} ratings and reviews</div>
                   </div>                              
                </div> 
                <div className="hrLine divider-20"></div>{ProductRating}</>}
            </>
        );
    }

    GetDate(value){
        var Pdate = new Date(value);
        var PLACE_DATE=Pdate.toDateString();
        console.log("date ",PLACE_DATE);
        return PLACE_DATE;
    }
}

export default ApectoMallPRatingAndReview;