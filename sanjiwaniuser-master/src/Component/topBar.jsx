import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";



class TopBar extends Component{
 
  render() {
    return (   
          <div className="topBarPL">
          <div className="topBarPLName">{this.props.Title}</div>
          <div className="topBarPLNotificationIcon">
              {this.props.cart?<Link to="/cart"><span className="flaticon-cart space-4px">
              <div className=" notify-badge" data-badge={localStorage.getItem("cartTotalCount")}></div>
              </span></Link>:null}
          </div>
      </div>     
    );
  }

}
export default TopBar;
