import React, { Component } from 'react';
import strings from "./stringsoflanguages";
import StarRatingComponent from "react-star-rating-component";
import ToManyError from "./ToManyError";
import TransparentLoader from "./transparentLoader";
import MessagePopup from "./messagePopup";
import axios from "axios";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
class ApectoMallWriteReview extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:localStorage.getItem("ownerName"),
            writeReview:null,
            nameErrorMsg:null,
            writeReviewErrorMsg:null,
            selectStarErrorMsg:null,
            transparentLoader: false,
            loadError:false,
            rating:0,
            showMessagePopupCompleteRating:false,
            successMessage:null,
        }
    }

    CloseMessagePopup() {
        this.setState({
            showMessagePopupCompleteRating: !this.state.showMessagePopupCompleteRating
        });
      }
    // For rating component
  onStarClickStar(nextValue, prevValue, name, e) {
    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    this.setState({ rating: nextValue });
  }

    render() {
        if (this.state.transparentLoader === true) {
            return <TransparentLoader />;
          }else if (this.state.loadError === true) {
            return <ToManyError redirectURL={"/mall"} />;
          }

        return (
            <>
            <div className="rowData divider-20">
                  <div className="form-group form-floating-label">
                      <input
                        id="name"
                        name="name1"
                        type="text"
                        placeholder={strings.pleaseenteryourname}
                        className="form-control input-border-bottom"
                        value={localStorage.getItem("ownerName")==null?"unknown":localStorage.getItem("ownerName")}
                        onChange={event=>this.handleName(event.target.value)}
                      />
                      <div className="error-div text-Left">{this.state.nameErrorMsg}</div>
                </div>
                  <div className="form-group form-floating-label">
                      <input
                        id="review"
                        name="review1"
                        type="text"
                        placeholder={strings.pleaseenteryourreview}
                        className="form-control input-border-bottom"
                        onChange={event=>this.handleReview(event.target.value)}
                      />
                      <div className="error-div text-Left">{this.state.writeReviewErrorMsg}</div>
                </div>

            <div className="rowInner">
                <div className="divider-10">
                    <StarRatingComponent
                    name="rate"
                    starColor="#ffb400"
                    emptyStarColor="#ffb400"
                    value={this.state.rating}
                    onStarClick={this.onStarClickStar.bind(this)}
                    renderStarIcon={(index, value) => {
                        return ( <span> <i className={
                                index <= value
                                ? "icon-starRatingPopup"
                                : "flaticon-star-Popup"
                            }
                            /> </span> );
                    }}
                    />
                </div>
                </div>
                <div className="error-div text-Left">{this.state.selectStarErrorMsg}</div>

            </div>
            <div className="textCenter success-div divider-15">{this.state.successMessage}</div>
            <div className="divider-40"></div>
                <div className="rowData">
                    {this.state.successMessage === null?<button className="reviewSend" onClick={()=>this.SubmitRating()}>{strings.send}</button>:<button className="reviewSend OpacityLow">{strings.send}</button>}
                </div>
            
            <div className="divider-120"></div>
                {this.state.showMessagePopupCompleteRating?
                    <MessagePopup
                        title="Apecto"
                        body="Thank for your valuable feedback."
                        closePopup={this.CloseMessagePopup.bind(this)}
                    /> : null}
            </>
        );

        
    }
    handleReview(value){
        console.log(value);
        this.setState({
            writeReview:value,
        });
    }
    handleName(value){
        console.log(value);
        this.setState({
            name:value,
        });
    }
    SubmitRating(){
        this.setState({transparentLoader:true,})
        let currentComponent=this;
        var payload={
            productId:this.props.ProductID,
            shopId:localStorage.getItem("shopIdLocal"),
            rating:this.state.rating,
            comment:this.state.writeReview,
            userName:this.state.name,
        }
        if(this.state.writeReview === null){
            this.setState({
                writeReviewErrorMsg:"Please write something.",
                selectStarErrorMsg:null,
                transparentLoader:false,
            });
        }else if(this.state.rating === 0){
            this.setState({
                writeReviewErrorMsg:null,
                selectStarErrorMsg:"Please select star.",
                transparentLoader:false,
            })
        }else {
            axios
            .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP+ "rate/rateproduct", payload)
            .then(function(response) {
                console.log(response.data.payload);
                if(response.data.error !== null){
                    console.log("Null Error");
                    if (response.data.error.errorName === "FAILED_TO_RATE") {
                        currentComponent.setState({
                            loadError: true,
                            transparentLoader: false
                        });
                        console.log("Failed to add Rating in Message rating popup");
                        } else if (response.data.error.errorName === "DB_ERROR") {
                            currentComponent.setState({
                            transparentLoader: false
                            });
                            console.log("DB Error in message Popup Rating !!!");
                    }
                }else if (response.data.status.isSuccess === true) {
                        console.log("Successfully Rated !!!");
                        currentComponent.setState({
                            transparentLoader: false,
                            showMessagePopupCompleteRating: !currentComponent.showMessagePopupCompleteRating,
                            successMessage:response.data.status.successMsg,
                        });
                }
            })
            .catch(function(error) {
                console.log("Error when adding Rating in Message rating popup",error.message);
                if (error.message === "Network Error") {
                    currentComponent.setState({
                        loadError: true,
                        transparentLoader: false
                    });
                }
            });
        }
    }

}

export default ApectoMallWriteReview;