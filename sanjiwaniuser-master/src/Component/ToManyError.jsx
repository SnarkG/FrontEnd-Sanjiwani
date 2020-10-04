import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/loader.css";
import TopBarName from "./topBar";
import Bottom from "./bottomMenu";
import strings from './stringsoflanguages';

class ToManyError extends Component {
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
             <TopBarName myName={localStorage.getItem('userFullName')} />
             <div className="somethingWentWrong">
                    <div className="rowDataPadding16">
                        <div id="escapingBallG">
                            <div id="escapingBall_1" className="escapingBallG"></div>
                        </div>
                    <div className="divider"></div>
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
              <div className="divider-50"></div>
              <Bottom />
      </div>

    );
  }

}
export default ToManyError;
