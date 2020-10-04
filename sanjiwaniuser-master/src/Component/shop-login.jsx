import React, { Component } from "react"; 
import axios from "axios";
import {Redirect} from "react-router-dom";

import logo from '../assets/images/Logo.png'; 
import "../assets/css/reset.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import strings from './stringsoflanguages';

class ShopLogin extends Component {

  constructor(props){
    super(props);
    this.state = {
      type: 'password',
      score: 'null',
      username: "",
      password: "",
      passwordMsg: "",
      usernamemsg:"",
      showAllErrorMessage:"",
      toDashboard: "false",
      register: false
    }
    this.showHide = this.showHide.bind(this); 
  }

 showHide(){
    this.setState({
      type: this.state.type === 'password' ? 'input' : 'password'
      
    })  
  }
  
  //=====================================RENDER====================================================

  render() {
    const required = value => {
      if (!value.toString().trim().length) {
        return "require";
      }
    };
    if (this.state.toDashboard === "true") {
      return <Redirect to='/apectoMall' />
    }else if(localStorage.getItem("language") !== null){
      strings.setLanguage(localStorage.getItem("language"));
    }else if(localStorage.getItem("language") === null){
      strings.setLanguage("en");
    }
        
    return (
        <div>
          <div className="rowData">
            <div className="login-logo">
              <img src={logo} height="50" alt="logo" />
            </div>
          </div>
          <div className="divider-10"></div>
          <div className="login-form">
            <div className="rowData">
                <div className="rowInner">
                <div className="input-icon icon-top-10"><div className="icon login">
                </div></div>
                <div className="inputData">
                  <div className="form-group form-floating-label">
                      <input
                        id="username"
                        name="username"
                        type="number"
                        placeholder={strings.entermobilenumber}
                        className="form-control input-border-bottom"
                        onChange={event => this.handleUsername(event.target.value)}
                      />
                      <div className="error-div">{this.state.usernamemsg}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="divider-10"></div>
            <div className="rowData">
            <div className="rowInner">
                <div className="input-icon icon-top-10"><div className="icon icon-password">
                </div></div>
                <div className="inputData">
                  <div className="form-group form-floating-label">
                        <input
                          id="password"
                          name="password"
                          type={this.state.type}
                          placeholder={strings.enterpassword}
                          className="form-control input-border-bottom"
                          onChange={event => this.handlePassword(event.target.value)} 
                        />
                        <div className="error-div">{this.state.passwordMsg}</div>
                        <div className="show-passwordLogin" onClick={this.showHide} >
                          <i className="flaticon-interface" />
                        </div>
                      </div>
                </div>
            </div>
            </div>
            <div className="divider-60"></div>
            <div className="rowData">
            <div className="buttonCenter">
                <div className="form-action">
                  <button className="btnLogin"
                    onClick={event => this.shop_login(event)}>
                    {strings.login}
                  </button>
                </div>
            </div>
          </div>
         
          <div className="divider-60"></div>
         
        </div>
      </div>
    );
  }

  
  //==============================================

  handleUsername(value) {
    this.setState({
      username: value
    });
  }
  handlePassword(value) {
    this.setState({
      password: value
    });
  }
  
  //===========================================HANDLE CLICK FUNCTION===============================

  shop_login(event) {
    let currentComponent = this;
    var payload = {
      mobileNumber: this.state.username,
      password: this.state.password
    };



    if (this.state.username === "") {
      this.setState({
        usernamemsg: "Please Enter your mobile number"
      });
    } else if (this.state.password === "") {
      this.setState({
        passwordMsg: "Please Enter your password"
      });
    }
    else{
    axios
      .post(process.env.REACT_APP_PARTNERAPP_BACKEND + "login", payload)
      .then(function(response) {
        console.log(response.data.status);

        if(response.data.error !== null){
          console.log("Null Error");
            if(response.data.error.errorName === "ER_TOO_MANY_CONNECTIONS"){
              currentComponent.setState({
                loadError:true
              });
              console.log("To Many Error");
              
            }else if (response.data.error.errorName === "LOGIN_FAILED") {
              currentComponent.setState({
                showAllErrorMessage: "Mobile Number or Password not match Try Again !",
                usernamemsg:"",
                passwordMsg:""
              });
            }else{
              currentComponent.setState({
                  loadError:true
              })
            }

        }else if (response.data.status.isSuccess === true) {
            currentComponent.setState({
              toDashboard: "true"
            });
        } else if (response.data.status.isSuccess === false) {
          console.log("Username password do not match");
          alert("username password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
    
      .catch(function(error) {
        console.log(error);
      });
  }
} 
  //===============================================================================================p
}

export default ShopLogin;
