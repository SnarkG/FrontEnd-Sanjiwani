import React, { Component } from 'react';
import { Link,Redirect } from "react-router-dom";
import ToManyError from "./ToManyErrorLogin";
import Loader from "./loaderWithoutBottom";
import logo from "../assets/images/logoWhite.png";


class BeforeLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
          showMessagePopup: false,
          showLoginComponent: false,
          loaded: false,
          loadedLogin: true,
          loadError: false,
          fcmToken: null,
          latitude: "",
          longitude: ""
        };
    }

    componentDidMount() {
        this.setState({
          loadedLogin: false,
        });
      }
      UNSAFE_componentWillMount() {
        // this.signIn();
        this.getMyLocation();
      }
      // signIn() {
      //   window.open(process.env.REACT_APP_USERAPP_FORNT_END + "login");
      // }
    
      getMyLocation() {
        console.log("getting location from react");
        const location = window.navigator && window.navigator.geolocation;
        location.getCurrentPosition(
          position => {
            localStorage.setItem("Latitude", position.coords.latitude);
            localStorage.setItem("Langitude", position.coords.longitude);
            console.log("React Location Latitude" + position.coords.latitude);
            console.log("React Location Longitude" + position.coords.longitude);
          },
          error => {
            console.log("error getting in location from login page in react");
          }
        );
      }

    render() {
            var DataFromLogin = this.props.location.search.split("&");
            console.log("fcm token = " + DataFromLogin[0]);
            console.log("fcm token = " + DataFromLogin[1]);
            console.log("fcm token = " + DataFromLogin[2]);
    
            var token = DataFromLogin[0].split("=");
            var Latitude = DataFromLogin[1].split("=");
            var Longitude = DataFromLogin[2].split("=");
    
            localStorage.setItem("fcmToken", token[1]);
            if (Latitude[1] !== "null" || Latitude[1] !== "0.0") {
            console.log("getting location from android");
            localStorage.removeItem("Latitude");
            localStorage.removeItem("Langitude");
            localStorage.setItem("Latitude", Latitude[1]);
            localStorage.setItem("Langitude", Longitude[1]);
            } else {
            console.log("Use Default Location from React");
            }
        
    
                if (this.state.loadedLogin === true) {
                    return <Loader />;
                } else if (this.state.loadError === true) {
                    return <ToManyError redirectURL={"/login-1"} />;
                } else if (localStorage.getItem("mobileNumber") !== null) {
                    console.log("check mobile number before login");
                    console.log(localStorage.getItem("mobileNumber"));
                    return <Redirect to="/shop" />;
                }

        return (
            <>
                 <div className="loginFormBackground">
                    
                     <div className="beforeLoginlogo">
                         <img src={logo} width="40%" alt="logo"></img>
                     </div>
                     <div className="titleBoldBigApecto">a p e c t o</div>

                     {/* <div className="titleBoldBig marginRight4">The saloon booking app</div> */}
                     <div className="brforeLoginButton">
                     <Link to="/sign-up"><div className="signUp-button">Register</div></Link>
                            
                            <Link to="/slide-1"><div className="login-button colorBlack">Login</div></Link>
                     </div>
                    <div className="bottomFixed">
                
                        <div className="rightReserverMessage">Copyrights @2020. All rights reserved.</div>
                    </div>
                </div>
            </>
        );
    }
    

}

export default BeforeLogin;