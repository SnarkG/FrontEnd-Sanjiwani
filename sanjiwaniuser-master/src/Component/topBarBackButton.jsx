import React, { Component } from "react";
import {Link} from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";



class TopBarBackButton extends Component{

  render() {
    return (
        <div className="topBarShop"><Link to={this.props.backUrl} ><div className="iconStarBackButton icon-back-arrow"></div></Link>
             <div className="topBarName">{localStorage.getItem("shopNameLocal")?localStorage.getItem("shopNameLocal"):"Sanjiwani"}</div>
             {/*<NotificationIcon/> */}
          </div>        
    );
  }

}
export default TopBarBackButton;
