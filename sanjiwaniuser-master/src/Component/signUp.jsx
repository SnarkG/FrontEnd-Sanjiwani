import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import ToastMessage from "./snackBarToast";
import Loader from "./loaderWithoutBottom";
import ToManyError from "./ToManyErrorWithoutBottom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.showHide = this.showHide.bind(this);
        this.showHideConfirm = this.showHideConfirm.bind(this);
        this.showToastMessageFun = this.showToastMessageFun.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.ShowBottom = this.ShowBottom.bind(this);
        this.HideBottom = this.HideBottom.bind(this);
        this.state = {
          type: "password",
          typeConfirm: "password",
          full_name:
          localStorage.getItem("RegistrationName") !== null ? localStorage.getItem("RegistrationName"): "",
          email: "",
          mobile: "",
          gender: "",
          password: "",
          agree: "",
          emailmsg: "",
          fullNameMsg: "",
          mobileMsg: "",
          genderMsg: "",
          passwordMsg: "",
          passwordLengthMsg: "",
          passwordMatchMsg: "",
          confirmPassword: "",
          agreeMsg: "",
          verify: false,
          showPassword: false,
          showPasswordConfirm: false,
          showAllErrorMessage: "",
          showComponent: false,
          loadError: false,
          loaded: true,
          bottomHide:false,
        };
      }
      validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(email));
        return re.test(email);
      }
    
      ShowBottom() {
        this.setState({
            bottomHide: false
        })
    }

    HideBottom(){
        this.setState({
          bottomHide:true,
        })
      }

      showHide() {
        this.setState({
          type: this.state.type === "password" ? "input" : "password",
          showPassword: !this.state.showPassword
        });
      }
      showHideConfirm() {
        this.setState({
          typeConfirm: this.state.typeConfirm === "password" ? "input" : "password",
          showPasswordConfirm: !this.state.showPasswordConfirm
        });
      }
      showToastMessageFun() {
        this.setState({
          showComponent: !this.state.showComponent
        });
      }
    
      componentDidMount() {
        this.setState({
          loaded: false
        });
      }
    
      render() {
        if (this.state.loaded === true) {
          return <Loader />;
        } else if (this.state.verify === true) {
          return (
            <Redirect to={{ pathname: "/VerifyOTP" }}/>
          );
        } else if (this.state.loadError === true) {
          return <ToManyError redirectURL={"/sign-up"} />;
        }
return (
    <>
        <div className="greenBackground">
            <div className="divider-30"></div>
            <div className="welcomeTitle">Sign Up</div>

            <div className="loginForm-box dividerPer20">
            <div className="loginFormInnerBox">
                    <div className="dividerPer10"></div>
                    <div className="inputBox">
                        <div className="rowData">
                                <div className="rowInner">
                                <div className="inputIcon">
                                    {/* <div className="fontSize18 iconBgTransparent login"></div> */}
                                    <svg width="20" height="17.481" viewBox="0 0 20 17.481">
                                        <g id="user_icon" transform="translate(0 -27.2)">
                                            <g id="Group_1" data-name="Group 1" transform="translate(0 27.2)">
                                            <path id="Path_23" data-name="Path 23" d="M18.3,38.533a10.212,10.212,0,0,0-3.907-3.407,5.236,5.236,0,0,0,.8-2.778,5.079,5.079,0,0,0-1.519-3.63,5.186,5.186,0,0,0-7.333,0,5.1,5.1,0,0,0-1.519,3.667,5.285,5.285,0,0,0,.8,2.778,10.016,10.016,0,0,0-5.611,9,.551.551,0,0,0,.556.519H19.444A.546.546,0,0,0,20,44.126,10.017,10.017,0,0,0,18.3,38.533ZM7.111,29.5A4.057,4.057,0,0,1,10,28.311,4.135,4.135,0,0,1,12.889,29.5a4.057,4.057,0,0,1,1.185,2.889A4.111,4.111,0,0,1,13,35.144c-.056.056-.093.111-.148.167a.928.928,0,0,1-.148.13,1.018,1.018,0,0,1-.167.13c-.056.037-.111.093-.167.13l-.167.111a1.629,1.629,0,0,1-.185.111.579.579,0,0,1-.185.093.685.685,0,0,1-.2.093,1.922,1.922,0,0,1-.185.074c-.074.019-.13.056-.2.074s-.13.037-.2.056-.13.037-.2.056a1.093,1.093,0,0,1-.259.037c-.056,0-.111.019-.167.019a3.423,3.423,0,0,1-.426.019,3.139,3.139,0,0,1-.426-.019c-.056,0-.111-.019-.167-.019-.093-.019-.167-.019-.259-.037-.074-.019-.13-.037-.2-.056s-.13-.037-.2-.056-.148-.056-.2-.074a.658.658,0,0,1-.167-.074c-.074-.037-.13-.056-.2-.093-.056-.037-.13-.056-.185-.093s-.13-.074-.185-.111L7.611,35.7a1.018,1.018,0,0,1-.167-.13c-.056-.037-.111-.093-.167-.13a1.059,1.059,0,0,1-.148-.13,1.2,1.2,0,0,1-.148-.167,4.041,4.041,0,0,1-1.074-2.759A4.234,4.234,0,0,1,7.111,29.5ZM10,43.57H1.13a8.721,8.721,0,0,1,1.5-4.407,8.956,8.956,0,0,1,3.7-3.13,5.947,5.947,0,0,0,1.074.833,2.788,2.788,0,0,0,.407.2c.074.037.167.074.241.111h.019c.074.037.148.056.222.093.019,0,.019,0,.037.019.074.019.148.056.222.074.019,0,.037.019.056.019.074.019.13.037.2.056.019,0,.037.019.056.019.074.019.13.019.2.037a.111.111,0,0,1,.074.019.76.76,0,0,0,.2.019.111.111,0,0,1,.074.019c.074,0,.13.019.2.019h.7c.074,0,.13-.019.2-.019a.111.111,0,0,0,.074-.019c.074,0,.13-.019.2-.019a.111.111,0,0,0,.074-.019c.074-.019.13-.019.2-.037.019,0,.037-.019.056-.019.074-.019.148-.037.2-.056a.068.068,0,0,0,.056-.019,1.044,1.044,0,0,0,.222-.074c.019,0,.019,0,.037-.019a1.133,1.133,0,0,0,.222-.093h.019c.074-.037.167-.074.241-.111a2.788,2.788,0,0,0,.407-.2,4.65,4.65,0,0,0,1.074-.833,8.89,8.89,0,0,1,5.2,7.537Z" transform="translate(0 -27.2)" fill="#a8a8a8"/>
                                            </g>
                                        </g>
                                        </svg>
                                </div>
                                <div className="input-data">
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            placeholder="Your full name"
                                            className="input-control"
                                            onChange={event => this.handleName(event.target.value)}
                                            onFocus={()=>this.HideBottom()} 
                                            onBlur={this.ShowBottom}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    <div className="error-div-new">{this.state.fullNameMsg}</div>  
                    <div className="divider-20"></div>
                    <div className="inputBox">
                        <div className="rowData">
                                <div className="rowInner">
                                <div className="inputIcon">
                                    {/* <div className="fontSize18 iconBgTransparent login"></div> */}
                                    <svg width="14" height="20" viewBox="0 0 14 20">
                                        <g id="smartphone" transform="translate(-99)">
                                            <path id="Path_2188" data-name="Path 2188" d="M109.625,0h-8.75A1.877,1.877,0,0,0,99,1.875v16.25A1.877,1.877,0,0,0,100.875,20h8.75a1.877,1.877,0,0,0,1.875-1.875V1.875A1.877,1.877,0,0,0,109.625,0Zm-8.75,1.25h8.75a.625.625,0,0,1,.625.625V15h-10V1.875A.625.625,0,0,1,100.875,1.25Zm8.75,17.5h-8.75a.625.625,0,0,1-.625-.625V16.25h10v1.875A.625.625,0,0,1,109.625,18.75Z" fill="#a8a8a8"/>
                                            <path id="Path_2189" data-name="Path 2189" d="M248.566,445.683a.625.625,0,1,1-.884,0,.625.625,0,0,1,.884,0" transform="translate(-142.874 -428.625)" fill="#a8a8a8"/>
                                        </g>
                                        </svg>
                                </div>
                                <div className="input-data">
                                        <input
                                            id="mobile"
                                            name="mobile"
                                            type="text"
                                            placeholder="Mobile number"
                                            className="input-control"
                                            onChange={event => this.handleMobile(event.target.value)}
                                            onFocus={()=>this.HideBottom()} 
                                            onBlur={this.ShowBottom}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="error-div-new">{this.state.mobileMsg}</div>
                    <div className="divider-20"></div>
                    {/* <div className="inputBox">
                        <div className="rowData">
                                <div className="rowInner">
                                <div className="inputIcon">
                                    <div className="fontSize18 iconBgTransparent icon-at"></div>

                                </div>
                                <div className="input-data">
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Email"
                                            className="input-control"
                                            onChange={event => this.handleEmail(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="error-div-new">{this.state.emailmsg}</div>
                    <div className="divider-20"></div> */}
                    <div className="inputBoxPaddingZeroBgWhite">
                        <div className="rowData">
                            <div className="rowInner">
                            <div className="inputIcon  divider-10">
                                <div className="fontSize18 iconBgTransparent icon-male"></div>
                            </div>
                            <div className="input-data textLeft">
                                <div className="radio-toolbar">
                                    <input
                                    type="radio"
                                    id="radio1"
                                    name="radios"
                                    value="MALE"
                                    onClick={event => this.handleGender(event.target.value)}/>
                                    <label htmlFor="radio1">Male</label>
                                    <input
                                    type="radio"
                                    id="radio2"
                                    name="radios"
                                    value="FEMALE"
                                    onClick={event => this.handleGender(event.target.value)}/>
                                    <label htmlFor="radio2">Female</label>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="error-div-new">{this.state.genderMsg}</div>
                    <div className="divider-20"></div>
                    <div className="inputBox">
                    <div className="rowData">
                        <div className="rowInner">
                            <div className="inputIcon">
                                {/* <div className="fontSize18 iconBgTransparent icon-password"></div> */}
                                <svg width="22" height="18.833" viewBox="0 0 22 18.833">
                                <g id="passwod_icon" transform="translate(0 -100.668)">
                                    <g id="Group_3" data-name="Group 3" transform="translate(0 106.668)">
                                    <g id="Group_2" data-name="Group 2" transform="translate(0 0)">
                                        <path id="Path_24" data-name="Path 24" d="M44.476,213.335a1.81,1.81,0,1,0,1.81,1.81A1.811,1.811,0,0,0,44.476,213.335Zm0,2.714a.9.9,0,1,1,.9-.9A.906.906,0,0,1,44.476,216.049Z" transform="translate(-40.856 -208.728)" fill="#a8a8a8"/>
                                        <path id="Path_25" data-name="Path 25" d="M21.9,112.8l-1.833-2.292a.459.459,0,0,0-.358-.172H12.833v-.917a.458.458,0,0,0-.619-.429l-.664.249a6.417,6.417,0,1,0,0,7.694l.664.249a.458.458,0,0,0,.619-.429v-.917h.458a.458.458,0,0,0,.324-.134l.593-.593.593.593a.458.458,0,0,0,.648,0l.593-.593.593.593a.458.458,0,0,0,.648,0l.593-.593.593.593a.458.458,0,0,0,.324.134h.917a.459.459,0,0,0,.358-.172l1.833-2.292A.459.459,0,0,0,21.9,112.8Zm-2.412,2.12h-.507l-.782-.782a.458.458,0,0,0-.648,0l-.593.593-.593-.593a.458.458,0,0,0-.648,0l-.593.593-.593-.593a.458.458,0,0,0-.648,0l-.782.782h-.727a.458.458,0,0,0-.458.458v.714l-.376-.141a.457.457,0,0,0-.542.175,5.5,5.5,0,1,1,0-6.08.46.46,0,0,0,.542.175l.376-.141v.714a.458.458,0,0,0,.458.458h7.113l1.467,1.833Z" transform="translate(0 -106.668)" fill="#a8a8a8"/>
                                    </g>
                                    </g>
                                </g>
                                </svg>
                            </div>
                            <div className="input-data">
                                    <input
                                        id="password"
                                        name="password"
                                        type={this.state.type}
                                        placeholder="Password"
                                        className="input-control"
                                        onChange={event => this.handlePassword(event.target.value)}
                                        onFocus={()=>this.HideBottom()} 
                                        onBlur={this.ShowBottom}
                                    />
                                    </div>
                                    <div className="inputIcon">
                                    <div className="show-passwordIcon" onClick={this.showHide}>
                                        {this.state.showPassword ? (
                                        <i className="icon-eye-slash" />
                                        ) : (
                                        <i className="icon-eye" />
                                        )}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="error-div-new">{this.state.passwordMsg} {this.state.passwordLengthMsg}</div>
                    <div className="divider-25"></div> 
                        <div className="rowDataPadding16">
                            <div className="textLeft marginLeftPer5">
                                <label className="myCheckBoxcontainer iconSize12">I Agree to <Link to={{ pathname: "/terms" }} onClick={this.backURL()} className="colorBlack bold">Terms &amp; conditions</Link> of sanjiwani group
                                    <input type="checkbox" value="YES" onClick={event => this.handleAgree(event.target.value)}/>
                                    <span className="agree-checkmark"></span>
                                    </label>

                                    {/* <div className="readTerms divider-10">
                                    <Link to={{ pathname: "/terms" }} onClick={this.backURL()} >
                                    {" "} Click here for read Terms &amp; conditions
                                    </Link>
                                </div> */}
                                </div> 
                            </div> 
                            <div className="rowData">
                              <div className="textCenter">
                                <div className="error-div-register divider-10">
                                    {this.state.showAllErrorMessage}
                                </div>
                              </div>
                          </div>  
                <div className="divider-20"></div>
            
                <button className="greenButton" onClick={event => this.registerUser()}>Register</button>
                <div className="dividerPer10"></div>
                <div className="divider-40"></div>
                {this.state.bottomHide?null:<div className="width90">
                      <div className="rowInner divider-bottom-30">
                          <div className="width50 textLeft" onClick={this.showToastMessageFun}>Already register ?</div>
                          {/* <div className="width50 bold colorBlack textRight" onClick={event=>this.SendToLogin(event)}>Login</div> */}
                          <div className="width50 bold colorBlack textRight" ><Link to="/login">Login</Link></div>

                      </div>
                    </div>}
                </div>
                {this.state.showComponent ? (
                    <ToastMessage toastMessage="Please Click on Login" />
                ) : (
                    false
                )}
                <div className="divider"></div>
            </div>
        </div>
    </>
        );
    }

    backURL() {
        localStorage.setItem("TermsBackUrl", "/sign-up");
      }
    
      // SendToLogin() {
      //   window.open(process.env.REACT_APP_USERAPP_FORNT_END + "login");
      // }

      handleName(value) {
        this.setState({
          full_name: value,
          mobileMsg: "",
          emailmsg: "",
          genderMsg: "",
          passwordLengthMsg: "",
          passwordMatchMsg: "",
          showAllErrorMessage: ""
        });
        localStorage.setItem("userFullName",value);
      }
      handleMobile(value) {
        this.setState({
          mobile: value,
          fullNameMsg: "",
          emailmsg: "",
          genderMsg: "",
          passwordLengthMsg: "",
          passwordMatchMsg: "",
          showAllErrorMessage: ""
        });
        //localStorage.setItem("RegistrationMobile",this.state.mobile);
      }
    
    //   handleEmail(value) {
    //     this.setState({
    //       email: value,
    //       fullNameMsg: "",
    //       mobileMsg: "",
    //       genderMsg: "",
    //       passwordLengthMsg: "",
    //       passwordMatchMsg: "",
    //       showAllErrorMessage: ""
    //     });
    //     //localStorage.setItem("RegistrationEmail",this.state.email);
    //   }
    
      handleGender(value) {
        console.log("gender value= ",value);
        this.setState({
          gender: value,
          fullNameMsg: "",
          mobileMsg: "",
          emailmsg: "",
          passwordLengthMsg: "",
          passwordMatchMsg: "",
          showAllErrorMessage: ""
        });
        console.log(this.state.gender);
        localStorage.setItem("gender", value);
      }
    
      handlePassword(value) {
        this.setState({
          password: value,
          fullNameMsg: "",
          mobileMsg: "",
          emailmsg: "",
          genderMsg: "",
          showAllErrorMessage: ""
        });
        console.log(value,this.state.password);
      }
    
    
      handleAgree(value) {
        this.setState({
          agree: value,
          fullNameMsg: "",
          mobileMsg: "",
          emailmsg: "",
          genderMsg: "",
          passwordLengthMsg: "",
          passwordMatchMsg: "",
          showAllErrorMessage: ""
        });
        //localStorage.setItem("RegistrationAgree",this.state.agree);
      }
    
      registerUser() {
        let currentComponent = this;
        console.log("values",this.state.full_name,this.state.mobile,this.state.email,
          this.state.password,this.state.gender,this.state.agree
        );
        //To be done:check for empty values before hitting submit
        var payload = {
          fullName: this.state.full_name,
          mobileNumber: this.state.mobile,
          emailId:"example@gmail.com",
          password: this.state.password,
          gender:this.state.gender,
          toc:this.state.agree,
        };
    
        if (this.state.full_name === "") {
          this.setState({
            fullNameMsg: "Name required"
          });
        } else if (this.state.mobile.length < 10) {
          this.setState({
            fullNameMsg: "",
            mobileMsg: "Min 10 digit Mobile number Only"
          });
        } else if (this.state.mobile.length > 10) {
          this.setState({
            fullNameMsg: "",
            mobileMsg: "10 digit Mobile number Only"
          });
        // } else if (this.state.email === "") {
        //   this.setState({
        //     fullNameMsg: "",
        //     mobileMsg: "",
        //     emailmsg: "Email required"
        //   });
        // } else if (this.validateEmail(this.state.email) === false) {
        //   this.setState({
        //     fullNameMsg: "",
        //     mobileMsg: "",
        //     emailmsg: "Please Enter valid Email Address"
        //   });
        } else if (this.state.gender === "") {
          this.setState({
            fullNameMsg: "",
            mobileMsg: "",
            emailmsg: "",
            genderMsg: "Please Select Your Gender"
          });
        } else if (this.state.password === "") {
          this.setState({
            fullNameMsg: "",
            mobileMsg: "",
            emailmsg: "",
            genderMsg: "",
            passwordMsg: "Password required"
          });
        } else if (this.state.password.length < 6) {
          this.setState({
            fullNameMsg: "",
            mobileMsg: "",
            emailmsg: "",
            genderMsg: "",
            passwordMsg: "",
            passwordLengthMsg: "Minimum 6 characters required"
          });
        } else if (this.state.agree === "") {
          this.setState({
            fullNameMsg: "",
            mobileMsg: "",
            emailmsg: "",
            genderMsg: "",
            passwordLengthMsg: "",
            passwordMatchMsg: "",
            showAllErrorMessage: "Click on Agree Terms And Condition"
          });
        }else {
          this.setState({
            loaded: true
          });
    
          axios
            .post(process.env.REACT_APP_USERAPP_BACKEND + "signup", payload)
            .then(function(response) {
              console.log(response);
              if (response.data.error !== null) {
                if (response.data.error.errorName === "USER_ALREADY_PRESENT") {
                  currentComponent.setState({
                    showAllErrorMessage:"Your Account Already Exist!! Please Login.",
                    fullNameMsg: "",
                    mobileMsg: "",
                    emailmsg: "",
                    genderMsg: "",
                    passwordLengthMsg: "",
                    passwordMatchMsg: "",
                    loaded: false,
                  });
                  //currentComponent.DeleteOTPfromUSERTEMP();
                }else if (response.data.error.errorMsg === "Please Register Again in 1:30 Minutes") {
                  currentComponent.setState({
                    showAllErrorMessage:"Please Register Again in 1:30 Minutes",
                    fullNameMsg: "",
                    mobileMsg: "",
                    emailmsg: "",
                    genderMsg: "",
                    passwordLengthMsg: "",
                    passwordMatchMsg: "",
                    loaded: false
                  });
                 // currentComponent.DeleteOTPfromUSERTEMP();
                }else if (response.data.error.error.code === "ER_DUP_ENTRY") {
                  currentComponent.setState({
                    showAllErrorMessage:"Your Account Already Exist!! Please Login.",
                    fullNameMsg: "",
                    mobileMsg: "",
                    emailmsg: "",
                    genderMsg: "",
                    passwordLengthMsg: "",
                    passwordMatchMsg: "",
                    loaded: false
                  });
                  //currentComponent.DeleteOTPfromUSERTEMP();
                } else {
                  currentComponent.setState({
                    loaded: false,
                    loadError: true
                  });
                  console.log("Db Error when registration");
                }
              } else if (response.data.status.status === "OK") {
                console.log("registration successfully");
                currentComponent.setState({
                  verify: true,
                  loaded: false
                });
                localStorage.setItem("RegisterMobileNumber",currentComponent.state.mobile)
              }
            })
            .catch(function(error) {
              console.log(error);
              console.log("Error in Registration", error.message);
              if (error.message === "Network Error") {
                currentComponent.setState({
                  loadError: true,
                  loaded: false
                });
              }
            });
        }
      }
    
      DeleteOTPfromUSERTEMP(){
        let currentComponent = this;
        var payload={
          mobileNumber: this.state.mobile,
        }
        axios
        .get(process.env.REACT_APP_USERAPP_BACKEND + "/signup/delete/otp",payload)
        .then(function(response) { 
          console.log(response.data.payload);
          if (response.data.status.isSuccess === true) {
              console.log("Otp Deleted successfully!!");
          }else if(response.data.error !== null){
               console.log("DB Error when delete otp");
          }  
        })
        .catch(function(error) {
          if(error.message === "Network Error"){
            currentComponent.setState({
              loadError:true,
            });
          }
        });
      
      }

}
export default SignUp;