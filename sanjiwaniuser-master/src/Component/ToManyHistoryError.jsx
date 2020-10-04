import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/loader.css";
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
             <div className="somethingWentWrongHistory">
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
                   <Link to={this.props.redirectURL}><i className="icon flaticon-repeat " /></Link>

              </div>
      </div>

    );
  }

}
export default ToManyError;
