import React, { Component } from "react";
import axios from "axios";
import BottomMenu from "./bottomMenu";
import TransparentLoader from "./loaderRoundedWithBoxMarginZero";
import Loader from "./loader";
import MessagePopup from "./messagePopup";
import TopBarName from "./sanjiwaniMallPLBar";
import EmptyLogin from "./emptyLogin";
import profile from "../assets/images/shop_image.jpg";
// import profile from "../assets/images/profile.png";
import ToManyError from "./ToManyError";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

class UserProfile extends Component {
    constructor(props) {
        super();
        this.state = {
            userData:[],
            updateUserName:"",
            updateUserEmail:"",
            showAllErrorMessage:"",
            loaded:true,
            loadError:false,
            disabledClass:true,
            showProfileUpdateComponent: false,
            transparentLoader:false,
            logoutMsg:false,
            shareIconPopup:false,
            disabledButton:"disabledProfileButton",
            uploadImage:null,
            bottomHide:false,
        };
        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.ShowBottom = this.ShowBottom.bind(this);
        this.HideBottom = this.HideBottom.bind(this);

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
    handleImageUpload(event) {
      this.setState({
        uploadImage: URL.createObjectURL(event.target.files[0])
      })
      console.log(this.state.uploadImage);
    }
   
    UNSAFE_componentWillMount() {
       this.GetUserInfo();
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
        
        if(this.state.loaded === true){
            return (<Loader />);
        }else if (localStorage.getItem('mobileNumber') === null) {
            return (<EmptyLogin />);
        }else if(this.state.loadError === true){
            return (<ToManyError redirectURL = {"/account"}/>);
        }

        return (
            <div>
                <TopBarName productTitle="Profile Update"backUrl="/account"search={false}like={false}cart={false} />
                        <div className="divider-70"></div>
                        <div className="rowData divider-60">
                        <div className="rowInner">
                            <div className="profile-photo">
                                    {this.state.uploadImage === null?<img src={profile} alt="profile_image" />:<img src={this.state.uploadImage} alt="profile_image" />}
                                    <div className="image-upload" >
                                        <label htmlFor="uploadImage"><i className="addPhoto paddingTop4"><svg width="28" height="28" viewBox="0 0 65.323 65.323">
                                        <path id="Path_2190" data-name="Path 2190" d="M0,0H65.323V65.323H0Z" fill="none"/>
                                        <path id="Path_2191" data-name="Path 2191" d="M57.158,14.609H48.53L43.549,9.165H27.218v5.444H41.153l4.981,5.444H57.158V52.714H13.609v-24.5H8.165v24.5a5.46,5.46,0,0,0,5.444,5.444H57.158A5.46,5.46,0,0,0,62.6,52.714V20.053A5.46,5.46,0,0,0,57.158,14.609ZM21.774,36.383A13.609,13.609,0,1,0,35.383,22.774,13.614,13.614,0,0,0,21.774,36.383Zm13.609-8.165a8.165,8.165,0,1,1-8.165,8.165A8.189,8.189,0,0,1,35.383,28.218ZM13.609,14.609h8.165V9.165H13.609V1H8.165V9.165H0v5.444H8.165v8.165h5.444Z" transform="translate(0 1.722)"/>
                                        </svg></i></label>
                                        <input type="file" accept="image/*" id="uploadImage" onChange={this.handleImageUpload}/>
                                    </div>
                            </div>
                        </div>
                        <div className="divider-40"></div>
                        <div className="textCenter colorGray">update your picture</div>

                        
                    </div>
                
                    <div className="rowDataPadding10 disable-select  divider-30">
                        <div className="rowData">
                            <div className="inputDataUpdateProfile">
                                    <input
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        value={this.state.updateUserName}
                                        className="input-control-update"
                                        onChange={event => this.changeName(event.target.value)} 
                                        onFocus={()=>this.HideBottom()} 
                                        onBlur={this.ShowBottom}
                                    /> <div className="input-data">
                                   
                            </div>
                        </div>
                    </div>
                        <div className="rowData divider-20">
                            <div className="inputDataUpdateProfile opacityBlur displayTooltip" data-tooltip="You Can't Edit Mobile Number">
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="number"
                                        value={localStorage.getItem('mobileNumber')}
                                        className="input-control-update disabled"
                                        readOnly/>
                        </div>
                    </div>
                        <div className="rowData divider-20">
                            <div className="inputDataUpdateProfile">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={this.state.updateUserEmail}
                                        className="input-control-update"
                                        onChange={event => this.changeEmail(event.target.value)}
                                        onFocus={()=>this.HideBottom()} 
                                        onBlur={this.ShowBottom}
                                    />
                        </div>
                    </div>
                    </div>
      
                    <div className="divider-10"></div>
                        <div className="rowData">
                            <div className="textCenter">
                                <div className="error-div">{this.state.showAllErrorMessage}</div>
                                <div className="divider-10"></div>
                        </div>
                    </div>
                    {this.state.transparentLoader?<TransparentLoader/>:null}
                    <div className="divider-10"></div>
                        <div className="rowDataPaddingPer20">
                            <button  className={this.state.disabledButton}  onClick={event => this.updateUserProfile(event)} 
                            disabled={this.state.disabledClass}>Update Profile</button>
                        </div>
                        <div className="divider-90"></div>
                    {this.state.bottomHide?null:<BottomMenu myCartCount={localStorage.getItem('cartTotalCount')}/>}
                    {this.state.showProfileUpdateComponent ? <MessagePopup
                            title="Sanjiwani"
                            body="Profile updated successfully !!!"
                            closePopup={this.CloseMessagePopup.bind(this)}/> : null } 

            </div>
        );
    }

// ----------------Handler------------------
CloseMessagePopup() {
    this.setState({
      showProfileUpdateComponent: !this.state.showProfileUpdateComponent,
    });
  }

changeName(value) {
    localStorage.setItem("userFullName",value)
    this.setState({
      updateUserName: value,
      disabledClass:false,
      disabledButton:"profileUpdateButton"
    });
  }
changeEmail(value) {
    this.setState({
      updateUserEmail: value,
      disabledClass:false,
      disabledButton:"profileUpdateButton"
    });
  }

// Update Profile Information
updateUserProfile(event) {
    this.setState({
        transparentLoader:true,
    });
        let currentComponent=this;
        console.log("Click on update Profile");
        var payload = {
            mobileNumber:localStorage.getItem('mobileNumber'),
            userFullName:this.state.updateUserName,
            userEmailId:this.state.updateUserEmail,
          };
    console.log(payload);
          if (this.state.updateUserName === "") {
                this.setState({
                    showAllErrorMessage: "Enter Your Full Name",
                    transparentLoader:false,
                });
          } else if (this.state.updateUserEmail ==="") {
                this.setState({
                    showAllErrorMessage: "Enter Your Email Address",
                    transparentLoader:false,
                });
          }
          else{
                this.setState({
                        transparentLoader:true,
                        showAllErrorMessage:"",
                    });
                axios
                .post(process.env.REACT_APP_USERAPP_BACKEND + "userservice/profile/update",payload)
                .then(function(response) { 
                    console.log(response);
                    if (response.data.status.isSuccess === true) {
                        console.log("Successfully Updated user Information");
                        currentComponent.setState({
                            transparentLoader:false,
                            showProfileUpdateComponent: !currentComponent.showProfileUpdateComponent,
                            showAllErrorMessage:"",
                        });
                        
                    }else if(response.data.error !== null){
                            if(response.data.error.errorName === "DB_ERROR"){
                                currentComponent.setState({
                                loadError:true,
                                transparentLoader:false,
                                });
                                console.log("DB Error in user profile information Updating data");
                            }else{
                                currentComponent.setState({
                                loadError:true,
                                transparentLoader:false,
                                });
                                console.log("Catch All Error user profile information Updating data");
                            }
              
                      }
                })
                .catch(function(error) {
                    console.log(error);
                    console.log('Error user profile information updating data', error.message);
                    if(error.message === "Network Error"){
                      currentComponent.setState({
                        loadError:true,
                        loaded:false,
                        transparentLoader:false,
                      });
                    }
                  });
            
        }

      
}
}
export default UserProfile;