import React from "react";
import "../assets/css/dropdown.css";
import SendMessagePopup from "./sendMessagePopup";

class Dropdown extends React.Component {
constructor(props){
 super(props);
 this.state = {
       displayMenu: false,
       mobile:this.props.mobile,
       showPopup:false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }


  render() {
    //console.log(this.state.mobile);
    return (
        <div  className="dropdownDot" >
         <div className="iconBooking icon-menuDot" onClick={this.showDropdownMenu}></div>

          { this.state.displayMenu ? (
                <ul>
                    <li><div onClick={()=>this.CallOnMobile()}>Call<span className="iconBookingDropDown flaticon-message" ></span></div></li>
                    <li className="hide"><div onClick={()=>this.SendMessageToUser()} >Message <span className="iconBookingDropDown flaticon-chat-4"></span></div></li>
                </ul>
                ):
                (
                  null
                )
            }

                      {this.state.showPopup ?
                        <SendMessagePopup
                          text={this.state.mobile}
                          closePopup={this.SendMessageToUser.bind(this)}
                        />
                        : null
                      }

       </div>

    );
  }



  CallOnMobile(){
    console.log("Call Cell phone");
    window.open('tel:'+this.state.mobile);
  }

  SendMessageToUser(){
    console.log("Send Message to user");
    this.setState({
      showPopup: ! this.state.showPopup
    });
  }

  changeUserName = (id, event) => {
    console.log("click on add");
    
      const index = this.state.ShopServiceDB.findIndex((ShopService)=> {
          return (ShopService.serviceId === id);
      })
      const ShopService = Object.assign({}, this.state.ShopServiceDB[index]);
      ShopService.serviceName += event.target.value;
    
      const ShopServiceDB = Object.assign([] , this.state.ShopServiceDB);
    
      ShopServiceDB[index] = ShopService;
      this.setState({
        ShopServiceDB:ShopServiceDB
    });
    
    }

}

export default Dropdown;