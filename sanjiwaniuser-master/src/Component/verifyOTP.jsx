import React, { Component } from "react";
import axios from "axios";
import {Link ,Redirect} from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import logo from '../assets/images/Logo.png'; 
import ToastMessage from "./snackBarToast";
import ToManyError from "./ToManyError";

class VerifyOTP extends Component {
  constructor(props) {
    super();
    this.showToastMessageFun = this.showToastMessageFun.bind(this);
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.state = {
        mobileNumber: "0000",
        otp: "",
        toDashboard: "false",
        showAllErrorMessage:"",
        register: false,
        showComponent: false,
        loaded:true,
        loadError:false,
        intervalId:0,
        currentCount: 90
      };
  }

  showToastMessageFun(){
    this.setState({
      showComponent:!this.state.showComponent
      })
  }
  componentDidMount(){
    this.setState({
     loaded:false
      })
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) { 
      clearInterval(this.intervalId);
      console.log("Clear InterVal");
      this.setState({
        showAllErrorMessage:"OTP Expired. Please Go and Register Again !",
      });
      
    }
  }
 
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    if (this.state.toDashboard === "true") {
      return <Redirect to='/login' />
    }else if(this.state.loadError === true){
      return (<ToManyError redirectURL={"/register"}/>);
    }
    
    return (
      <div>
            <div className="rowData">
            <div className="login-logo">
              <img src={logo} height="50" alt="logo" />
            </div>
          </div>
          
          <div className="divider-90"></div>
          <div className="rowData">
                <div className="textCenter">
                  <span className="textBold">9637972850</span>
                </div>
            </div>
            <div className="divider-20"></div>
              <div className="rowData">
                <div className="textCenter">
                  <span className="msg">Enter Your OTP</span>
                </div>
            </div>
            <div className="divider"></div>
          <div className="login-form">
            <div className="rowDataPaddingPer28">
                <div className="form-group">
                  <input
                    id="otp"
                    name="otp"
                    type="number"
                    max="6"
                    value={this.state.otp}
                    className="form-control-centerText input-border-bottom"
                    onChange={event =>this.sendOTP(event.target.value)}
                  />              
                </div>
              </div>
            <div className="divider-20"></div>
            <div className="rowDataPadding16">
                      <div className="textCenter"><span>{this.state.currentCount}</span>
                          <div className="error-div">{this.state.showAllErrorMessage}</div>
                          <div className="divider-40"></div>
                    </div>
                  </div>

                  <div className="rowData">
                  <div className="buttonCenter">
                      <div className="form-action">
                        <button
                          className="btnLogin"
                          onClick={event => this.handleClick(event)}
                        >Verify
                        </button>
                      </div>
                  </div>
                </div>
                <div className="divider-70"></div>
                <div className="rowData">
                  <div className="textCenter">
                    <span className="msg" onClick={this.showToastMessageFun}>New User ?</span>
                    <Link to="/registration"> Register Here</Link>
                  </div>
              </div>
                {this.state.showComponent ? <ToastMessage toastMessage="Please Click on Register"/> : false }

          </div>
        </div>
    );
  }

  
  //==============================================
  sendOTP(value) {
    this.setState({
      otp: value
    });
  }
 //===========================================HANDLE CLICK FUNCTION===============================

  handleClick(event) {
    this.setState({
      showAllErrorMessage:""
    });
    let currentComponent = this;
    var payload = {
          mobileNumber:this.props.location.state.id,
          otp: parseInt(this.state.otp)
    };
     console.log(this.props.location.state.id);
    if (this.state.otp ==="") {
      this.setState({
        showAllErrorMessage:"Please Enter OTP First"
      });
    }
    else{
          axios
            .post(process.env.REACT_APP_PARTNERAPP_BACKEND+ "signup/verify", payload)
            .then(function(response) {
              console.log(response.data.status);
              if(response.data.error !== null){
                    if (response.data.error.error === "OTP_TIMEOUT") {
                      currentComponent.setState({
                        showAllErrorMessage:"OTP Time Out Please Register Again !"
                      });
                    }else if (response.data.error.error === "USER_ALREADY_PRESENT") {
                      currentComponent.setState({
                        showAllErrorMessage:"Your already present in system Please Login"
                      });
                    }else if (response.data.error.error === "OTP_IS_WRONG") {
                      currentComponent.setState({
                        showAllErrorMessage:"Please Enter Correct OTP"
                      });
                    }else{
                      currentComponent.setState({
                        loadError:true
                      });
                      console.log("To Many Error Connection");
                    }
              }else if (response.data.status.isSuccess === true) {
                currentComponent.setState({
                  toDashboard: "true"

                });
                alert('Registration Successful');
                
              } else {
                currentComponent.setState({
                  showAllErrorMessage:"OTP Not Match Please Register Again ?"
                });
              }
            })

            .catch(function(error) {
              console.log(error);
            });
        }
  }

// *****************************Resend OTP MESSAGE  now disaccorded****************************

resendOTP(event) {
  this.setState({
    showAllErrorMessage:"",
    otp:""
  });

  let currentComponent = this;
  var apiBaseUrl = "https://apectobackendufa.herokuapp.com/";

  var payload = {
  mobileNumber: this.props.location.state.id
  };  
  axios
    .post(apiBaseUrl + "signup/resend", payload)
    .then(function(response) {
      console.log(response.data.status);

      if (response.data.status.isSuccess === true) {
        currentComponent.setState({
            showAllErrorMessage:"Enter Your Latest OTP "
        });
      } else if (response.data.error.errorName === "FAILED_TO_RESEND_OTP") {
        currentComponent.setState({
          showAllErrorMessage:"OTP Send Failed. Please Click on Resend ?"
        });
      } else {
        currentComponent.setState({
          showAllErrorMessage:"OTP Not Match Please Click on Resend ?"
        });
      }
    })

    .catch(function(error) {
      console.log(error);
    });
}

}

export default VerifyOTP;
