import React from "react";
import {Link} from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import strings from './stringsoflanguages';

class BottomMenu extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
        activeClass:"menu-active-class",
        bottomIconHome:"bottomIconActiveGreen icon-home",
        bottomIconMenu:"bottomIconActiveGreen icon-history",
        bottomIconOffer:"bottomIconActiveGreen icon-service",
        bottomIconAccount:"bottomIconActiveGreen icon-profile",
    };
  }
  refreshPage(){ 
    window.location.reload(); 
  }

  render() {
    if(localStorage.getItem("language") !== null){
      strings.setLanguage(localStorage.getItem("language"));
    }else if(localStorage.getItem("language") === null){
      strings.setLanguage("en");
    }
    return (
        <div>
          <div className="divider-80"></div>
            <div className="bottomMenu noSelect">
              <div className="bottomMenuContent" >

                <div className="bottomMenuContentMenu icon-top-10" ><Link to="/mall">
                  <div className={localStorage.getItem("activeMenu") === "Home"? this.state.bottomIconHome:"bottomIcon icon-home"} ></div>Home</Link>
                  <div className={localStorage.getItem("activeMenu") === "Home"? this.state.activeClass:null}></div>
                  </div>

                <div className="bottomMenuContentMenu icon-top-10"><Link to="/menu" >
                  <div className={localStorage.getItem("activeMenu") === "Menu"? this.state.bottomIconMenu:"bottomIcon icon-history"}></div>Menu</Link>
                  <div className={localStorage.getItem("activeMenu") === "Menu"? this.state.activeClass:null}></div>
                  </div>

                <div className="bottomMenuContentMenu icon-top-10" ><Link to="/offer-banner">
                  <div className={localStorage.getItem("activeMenu") === "Offer"? this.state.bottomIconOffer:"bottomIcon icon-service"} ></div>Offer</Link>
                  <div className={localStorage.getItem("activeMenu") === "Offer"? this.state.activeClass:null}></div>
                  </div>

                <div className="bottomMenuContentMenu icon-top-10"><Link to="/account" >
                  <div className={localStorage.getItem("activeMenu") === "Profile"? this.state.bottomIconAccount:"bottomIcon icon-profile"}></div>Account</Link>
                  <div className={localStorage.getItem("activeMenu") === "Profile"? this.state.activeClass:null}></div>
                  </div>
                </div>
            </div>
        </div>
    );
  }
 
}
export default BottomMenu;
