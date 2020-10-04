import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/loader.css";
import TopBarName from "./topBar";
import strings from './stringsoflanguages';

class ToManyBookingError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setClassName:"show"
        };
      }
     
  render() {
    if(localStorage.getItem("language") !== null){
        strings.setLanguage(localStorage.getItem("language"));
      }else if(localStorage.getItem("language") === null){
        strings.setLanguage("en");
      }
    return (
        <div>
             <TopBarName myName={localStorage.getItem('shopNameLocal') !== null ? localStorage.getItem('shopNameLocal') : "Sanjiwani"} />
             <div className="divider-50"></div>
             <div className="somethingWentWrongBooking">
                    <div className="rowDataPadding16">
                    <div className="textCenter">
                        <span className="oopsSomething" >{strings.somethingwentwrong}</span>
                    </div>
                </div>

                <div className="divider"></div>
                    <div className="rowDataPadding25">
                    <div className="textCenter">
                            <span className="errorMsg" >{strings.heysorryforinconvenience}</span>
                    </div>
                </div>
                <div className="divider"></div>
                   <Redirect to={this.props.redirectURL}><i className="icon flaticon-repeat " /></Redirect>

              </div>
      </div>

    );
  }

}
export default ToManyBookingError;
