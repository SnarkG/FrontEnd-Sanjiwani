import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/loader.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import logo from '../assets/images/Logo.png'; 
import BottomMenu from "./bottomMenu";
import TopBarName from "./topBar";
import strings from './stringsoflanguages';

class EmptyLogin extends Component {
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
             <TopBarName myName="Buddy" />
             <div className="somethingWentWrong">
                <div className="rowData">
                        <div className="login-logo">
                            <img src={logo} height="50" alt="logo" />
                        </div>
                    </div>
                    <div className="rowDataPadding16">
                    <div className="divider"></div>
                    <div className="textCenter">
                        <span className="oopsSomething" >Uh Oh! {strings.yournotlogin}.</span>
                    </div>
                </div>

                <div className="divider"></div>
                    <div className="rowDataPadding16">
                    <div className="textCenter">
                            <span className="errorMsg" >{strings.pleaseloginfirst}!</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="cartRow">
                    <div className="cartNext"><Link to="/login">{strings.login}</Link></div>
                 </div>
                <BottomMenu/>
      </div>
    </div>

    );
  }

}
export default EmptyLogin;
