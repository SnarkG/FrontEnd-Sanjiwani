import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";



class TopBarNotification extends Component{
  render() {
    return (
        <div className="topBarNotificationIcon" >
                        <Link to="/"><span className="fa-bell"></span></Link>
            </div>        
    );
  }

}
export default TopBarNotification;

