import React, { Component } from 'react';
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import ToastMessage from "./snackBarToast";
import ToManyError from "./ToManyErrorWithoutBottom";
// import Loader from "./loaderWithoutBottom";
import LoaderRoundedWithBoxMarginZero from "./loaderRoundedWithBoxMarginZero";
import MessagePopup from "./messagePopup";

class Login extends Component {
    constructor(props) {
        super(props);
        this.showHide = this.showHide.bind(this);
        this.showToastMessageFun = this.showToastMessageFun.bind(this);
        this.ShowBottom = this.ShowBottom.bind(this);
        this.HideBottom = this.HideBottom.bind(this);
        this.state = {
          type: "password",
          username: "",
          password: "",
          passwordMsg: "",
          usernamemsg: "",
          showAllErrorMessage: "",
          toDashboard: false,
          userData: [],
          register: false,
          userMobileNumber: "",
          userFullName: "",
          showPassword: false,
          showComponent: false,
          showMessagePopup: false,
          showLoginComponent: false,
          loaded: false,
          loadedLogin: true,
          loadError: false,
          fcmToken: null,
          latitude: "",
          longitude: "",
          bottomHide:false,
        };
        
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
    
      showToastMessageFun() {
        this.setState({
          showComponent: !this.state.showComponent
        });
      }
    
     
      // UNSAFE_componentWillMount() {
      //   // this.signIn();
      //   //this.getMyLocation();
      // }


      
      // signIn() {
      //   window.open(process.env.REACT_APP_USERAPP_FORNT_END + "login");
      // }
    
      // getMyLocation() {
      //   console.log("getting location from react");
      //   const location = window.navigator && window.navigator.geolocation;
      //   location.getCurrentPosition(
      //     position => {
      //       localStorage.setItem("Latitude", position.coords.latitude);
      //       localStorage.setItem("Langitude", position.coords.longitude);
      //       console.log("React Location Latitude" + position.coords.latitude);
      //       console.log("React Location Longitude" + position.coords.longitude);
      //     },
      //     error => {
      //       console.log("error getting in location from login page in react");
      //     }
      //   );
      // }
    
      //===================================== RENDER ====================================================
      SendToLogin() {
        window.open(process.env.REACT_APP_USERAPP_FORNT_END + "login");
      }
     
      render() {

        if (this.state.toDashboard === true) {
          return <Redirect to="/mall" />;
        } else if (this.state.loadError === true) {
          return <ToManyError redirectURL={"/login"} />;
        } else if (localStorage.getItem("mobileNumber") !== null) {
          console.log("check mobile number before login");
          console.log(localStorage.getItem("mobileNumber"));
          return <Redirect to="/mall" />;
        }
     return (
            <>
                <div className="greenBackground">
                    <div className="divider-60"></div>
                    <div className="welcomeTitle">Welcome!</div>
                    <div className="welcomeDescription">Sign in to continue</div>

                    <div className="loginForm-box dividerPer30">
                      <div className="loginFormInnerBox">
                            <div className="dividerPer15"></div>
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
                                            id="username"
                                            name="username"
                                            type="number"
                                            placeholder="Enter your mobile number"
                                            className="input-control"
                                            onChange={event => this.handleUsername(event.target.value)}
                                            onFocus={()=>this.HideBottom()} 
                                            onBlur={this.ShowBottom}
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="error-div-new">{this.state.usernamemsg}</div>
                            <div className="divider"></div>
                            <div className="inputBox">
                            <div className="rowData">
                                    <div className="rowInner">
                                    <div className="inputIcon marginTop4">
                                        {/* <div className="fontSize18 iconBgTransparent icon-password"></div> */}
                                        <svg width="22" height="17.833" viewBox="0 0 22 17.833">
                                        <g id="passwod_icon" transform="translate(0 -106.668)">
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
                                                placeholder="Enter your password"
                                                className="input-control"
                                                onChange={event => this.handlePassword(event.target.value)}
                                                onFocus={()=>this.HideBottom()} 
                                                onBlur={this.ShowBottom}
                                            />
                                            </div>
                                            <div className="inputIcon marginTop4">
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
                            <div className="divider-10"></div>
                            <div className="error-div-new">{this.state.passwordMsg}</div> 
                            {this.state.loaded?
                            <div className="divider-10">
                              <LoaderRoundedWithBoxMarginZero/>
                            </div>:null}
                        <div className="rowData">
                            <div className="textCenter">
                            <div className="error-div-register divider-10">
                                {this.state.showAllErrorMessage}
                            </div>
                            <div className="divider-20"></div>
                            </div>
                        </div>  
                        <div className="greenButton" onClick={event => this.SignInButton(event)}>Log in</div>


                        <div className="divider-60"></div>
                        {this.state.bottomHide?<div className="divider-90"></div>:
                        <div className="bottomFixed">
                            <div className="rowInner divider-bottom-20">
                                <div className="width50"> <Link to="/send-otp" className="colorBlack">Forgot Password ?</Link></div>
                                <div className="width50 bold "><Link to="/sign-up" className="colorBlack marginLeftPer30">Register</Link></div>
                            </div>
                        </div>
                        }
                    </div>
                  </div>
                </div>
                {this.state.showLoginComponent ? (
                    <MessagePopup
                    title="Apecto"
                    body="Login successfully"
                    closePopup={this.CloseMessagePopup.bind(this)}
                    />
                ) : null}

                {this.state.showComponent ? (
                    <ToastMessage toastMessage="Please Click on Register" />
                ) : (
                    false
                )}
            </>
        );
    }

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
    
      CloseMessagePopup() {
        this.setState({
          showLoginComponent: !this.state.showLoginComponent,
          toDashboard: true,
        });
      }
    
      //===========================================HANDLE CLICK FUNCTION===============================
    
      SignInButton() {
        let currentComponent = this;
        var payload = {
          mobileNumber: this.state.username,
          password: this.state.password,
        };
        if (this.state.username === "") {
          this.setState({
            usernamemsg: "Please enter your mobile number",
            showAllErrorMessage:"",
            passwordMsg: "",
          });
        } else if (this.state.username.length < 10) {
          this.setState({
            usernamemsg: "10 digit Mobile number Only",
            showAllErrorMessage:"",
            passwordMsg: "",
          });
        } else if (this.state.username.length > 10) {
          this.setState({
            usernamemsg: "10 digit Mobile number Only",
            showAllErrorMessage:"",
            passwordMsg: "",
          });
        } else if (this.state.password.length < 6) {
          this.setState({
            passwordMsg: "Please Enter Correct Password",
            usernamemsg: "",
            showAllErrorMessage:"",
          });
        } else if (this.state.password === "") {
          this.setState({
            passwordMsg: "Please fill password",
            usernamemsg: "",
            showAllErrorMessage:"",
          });
        } else {
          this.setState({
            loaded: true,
            passwordMsg: "",
            usernamemsg: "",
            showAllErrorMessage:"",
          });
    
          axios
            .post(process.env.REACT_APP_USERAPP_BACKEND + "login", payload)
            .then(function(response) {
              console.log(response);
              if (response.data.error !== null) {
                console.log("Null Error");
                if (response.data.error.errorName === "ER_TOO_MANY_CONNECTIONS") {
                  currentComponent.setState({
                    loadError: true,
                    loaded: false
                  });
                  console.log("To Many Error");
                } else if (response.data.error.errorName === "LOGIN_FAILED") {
                  currentComponent.setState({
                    showAllErrorMessage:
                      "Mobile Number or Password not match Try Again !",
                    usernamemsg: "",
                    passwordMsg: "",
                    loaded: false
                  });
                }
              } else if (response.data.status.statusCode === 200) {
                localStorage.setItem("TOKEN", response.data.auth.token);
                currentComponent.getUserInfo();
                localStorage.removeItem("RegisterMobileNumber");
              }
            })
            .catch(function(error) {
              console.log(error);
              console.log("Error in When Login", error.message);
              if (error.message === "Network Error") {
                currentComponent.setState({
                  loadError: true,
                  loaded: false
                });
              }
            });
        }
      }
    
    
      
      // ************************* Store User Info *****************************
      getUserInfo() {
        let currentComponentUserInfo = this;
        axios
          .get(process.env.REACT_APP_USERAPP_BACKEND + "userservice/user/info/" +this.state.username)
          .then(function(response) {
            console.log(response.data.payload[0]);
            if (response.data.status.isSuccess === true) {
              //const count = response.data.payload.length;
              let userFullNameServer = "";
              let MobileNumber = "";
              let gender="";
              currentComponentUserInfo.setState({
                loaded: false,
                loadError: false
              });
    
                userFullNameServer = response.data.payload[0].userFullName;
                MobileNumber = response.data.payload[0].mobileNumber;
                gender = response.data.payload[0].gender;
                console.log("getting user info...",userFullNameServer);
                localStorage.setItem("userFullName", userFullNameServer);
                localStorage.setItem("mobileNumber", MobileNumber);
                localStorage.setItem("shopIdLocal",MobileNumber);
                localStorage.setItem("gender", gender);
              console.log("Get user info ", localStorage.getItem("userFullName")+localStorage.getItem("gender"));
              currentComponentUserInfo.sendFcmToken();
            }
          })
          .catch(function(error) {
            console.log(error);
            console.log("Error in Whe get user information at login time in apecto user app from login.jsx",
              error.message);
            if (error.message === "Network Error") {
              currentComponentUserInfo.setState({
                loadError: true,
                loaded: false
              });
            }
          });
      }
    
      // ********************* Send fem token to server *****************************
      sendFcmToken() {
        console.log("fcm token called");
        let currentComponentFcmToken = this;
        var payload = {
          id: this.state.username,
          fcmToken: localStorage.getItem("fcmToken")
        };
    
        axios
          .post(
            process.env.REACT_APP_SEND_FCM_TOKEN + "fcm/publish/token/",
            payload
          )
          .then(function(response) {
            console.log(response);
    
            if (response.data.error !== null) {
              if (response.data.error.errorName === "ER_TOO_MANY_CONNECTIONS") {
                currentComponentFcmToken.setState({
                  loadError: true,
                  loaded: false
                });
                console.log(
                  "To Many Error in Sending FCM Token in apecto user app from login.jsx"
                );
              }
            } else if (response.data.status.status === "OK") {
              console.log("Successfully send fcm token");
              currentComponentFcmToken.setState({
                loaded: false,
                loadError: false,
                showLoginComponent: true
              });
            } else {
              console.log("fcm token sending failed...");
              currentComponentFcmToken.setState({
                loaded: false,
                loadError: true
              });
            }
          })
          .catch(function(error) {
            console.log(error);
            console.log(
              "Error in When Login page in sending FCM Token in apecto user app from login.jsx",
              error.message
            );
            if (error.message === "Network Error") {
              currentComponentFcmToken.setState({
                loadError: true,
                loaded: false
              });
            }
          });
      }
    
}

export default Login;