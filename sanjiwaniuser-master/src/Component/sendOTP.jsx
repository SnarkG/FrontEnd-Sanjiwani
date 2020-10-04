import React, { Component } from "react";
import {Link ,Redirect} from "react-router-dom";

import logo from '../assets/images/Logo.png'; 
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

class SendOTP extends Component {
  constructor(props) {
    super();
    this.state = {
  
    mobileNumber: "0000",
    otp: "",
    toDashboard: "false",
    register: false
  };
  }

  render() {
    if (this.state.toDashboard === "true") {
      return <Redirect to='/ShopDetails' />
    }
    
    return (
        <div>
        <div className="rowData">
          <div className="login-logo">
            <img src={logo} height="50" alt="logo" />
          </div>
        </div>
        <div className="divider-60"></div>
          <div className="login-form">
          <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-mobile"></div>
                    </div>
                    <div className="inputData">
                    <div className="form-group">
                          <input
                                id="mobile"
                                name="mobile"
                                type="number"
                                placeholder="Enter Mobile Number"
                                className="form-control input-border-bottom"
                                onChange={event => this.handleMobile(event.target.value)}
                            />
                            <div className="error-div">{this.state.emailmsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider-60"></div>
                  <div className="row">
                  <div className="buttonCenter">
                      <div className="form-action">
                        <button
                          className="btnLogin"
                          onClick={event => this.handleClick(event)}
                        >Send OTP
                        </button>
                      </div>
                  </div>
                </div>
                <div className="divider"></div>
                    <div className="row">
                      <div className="textCenter">
                        <Link to="/VerifyOTP">Verify OTP</Link>
                      </div>
                  </div>
          </div>
        </div>
    );
}
}
export default SendOTP;
