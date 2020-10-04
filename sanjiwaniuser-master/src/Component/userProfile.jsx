import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import TopBarWithoutBack from "./topBar";
import TransparentLoader from "./transparentLoader";
import ShareIconPopup from "./ShareIconPopup";
//import Loader from "./loader";
import EmptyLogin from "./emptyLogin";
import ToManyError from "./ToManyError";
import profile from "../assets/images/shop_image.jpg";
import BottomMenu from './bottomMenu';
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state={
            userData:[],
            updateUserName:"",
            updateUserEmail:"",
            showAllErrorMessage:"",
            loaded:true,
            loadError:false,
            showProfileUpdateComponent: false,
            transparentLoader:false,
            logoutMsg:false,
            shareIconPopup:false,
        }
    }

    UNSAFE_componentWillMount() {
        this.GetUserInfo();
        localStorage.setItem("activeMenu","Profile");
      }    
 
      GetUserInfo(){
         let currentComponent = this;
         // Get user information
         axios
           .get(process.env.REACT_APP_USERAPP_BACKEND + "userservice/user/info/"+localStorage.getItem('mobileNumber'))
           .then(function(response) { 
             //console.log(response.data.payload[0]);
             if (response.data.status.isSuccess === true) {
                 const count=response.data.payload.length;
                let UserData=[];
                let userName="";
                let userEmail="";
                 for (let i=0; i<count; i++) {
                   UserData.push(response.data.payload[i]);
                   userName=response.data.payload[i].userFullName;
                   userEmail=response.data.payload[i].userEmailId;
                 }
                 console.log(UserData);
                 currentComponent.setState({
                     userData:UserData,
                     updateUserName:userName,
                     updateUserEmail:userEmail,
                     loaded:false
                 });
                 console.log("Get user info ");
             }else if(response.data.error !== null){
                     if(response.data.error.errorName === "DB_ERROR"){
                         currentComponent.setState({
                         loadError:true,
                         loaded:false
                         });
                         console.log("DB Error in user profile information ");
                     }else{
                         currentComponent.setState({
                         loadError:true,
                         loaded:false
                         });
                         console.log("Catch All Error in user profile information");
                     }
       
               }
           })
           .catch(function(error) {
             console.log(error);
             console.log('Error in user profile information', error.message);
             if(error.message === "Network Error"){
               currentComponent.setState({
                 loadError:true,
                 loaded:false
               });
             }
           });
      }
    
    render() {
        if (localStorage.getItem('mobileNumber') === null) {
            return (<EmptyLogin />);
        }else if(this.state.loadError === true){
            return (<ToManyError redirectURL = {"/account"}/>);
        }else if(this.state.transparentLoader === true){
            return (<TransparentLoader/>);
        }
        
        return (
            <>
            <TopBarWithoutBack Title="Account"backUrl="/account"cart={false}/> 

                    <div className="rowData divider-60">
                        <div className="rowInner">
                            <div className="profile-photo">
                                    <img src={profile} alt="profile_image" />
                                    {/* <div className="image-upload">
                                        <label htmlFor="uploadImage"><i className="addPhoto iconSize24 icon-plus"></i></label>
                                        <input type="file" accept="image/*" id="uploadImage" multiple = "false" />
                                    </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="rowData">
                            <div className="textCenter divider-20  iconSize18">{this.state.updateUserName}</div>
                            <div className="textCenter colorGray divider-20">{localStorage.getItem("mobileNumber")}</div>
                            <div className="hrLineWidthPer90  divider-10"></div>
                        </div>
                    
                    <div className="divider-30"></div>
                        <div className="rowDataPaddingAll12 ">
                                    <Link to="/update-profile" className="iconLogout"><span className="left-space-10"></span> Update Profile<span className="floatRight iconSize16 icon-angle-right-arrow"></span></Link>
                        </div>
                        <div className="rowDataPaddingAll12 ">
                                    <Link to="/order-history" className="iconLogout"><span className="left-space-10"></span> Order History<span className="floatRight iconSize16 icon-angle-right-arrow"></span></Link>
                        </div>
                        <div className="rowDataPaddingAll12">
                                    <Link to="/FAQ" className="iconLogout"><span className="left-space-10"></span> FAQ's<span className="floatRight iconSize16 icon-angle-right-arrow"></span></Link>
                        </div>
                        <div className="rowDataPaddingAll12">
                                    <Link to="/about" className="iconLogout"><span className="left-space-10"></span> About<span className="floatRight iconSize16 icon-angle-right-arrow"></span></Link>
                        </div>
                        <div className="rowDataPaddingAll12">
                                <div className="iconLogout" onClick={event => this.CloseSharePopup(event)}><span className="left-space-10"></span> Share App<span className="floatRight iconSize16 icon-angle-right-arrow"></span></div>
                        </div>
                        <div className="rowDataPaddingAll12">
                                    <div className="iconLogout" onClick={event => this.signOut(event)}><span className="left-space-10"></span> Logout</div>
                        </div>
                        <div className="divider-90"></div>
                        <BottomMenu myCartCount={localStorage.getItem("cartTotalCount")} />
                        
                        {this.state.shareIconPopup?<ShareIconPopup 
                        title="Share this app on"
                        closePopup={this.CloseSharePopup.bind(this)}/>:null}
 
            </>
        );
    }
    
    CloseSharePopup() {
        this.setState({
          shareIconPopup: !this.state.shareIconPopup,
        });
      }

    signOut() {
    window.open(process.env.REACT_APP_USERAPP_FORNT_END+"login");
    localStorage.clear();
    }

}

export default UserProfile;