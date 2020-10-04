import React from "react";

import DeleteImage from '../assets/images/alert.png'; 
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import strings from './stringsoflanguages';


class ClientDeletePopup extends React.Component {
  render() {
    if(localStorage.getItem("language") !== null){
      strings.setLanguage(localStorage.getItem("language"));
    }else if(localStorage.getItem("language") === null){
      strings.setLanguage("en");
    }
    return (
      <div className='popup'>
        <div className='popup_innerDelete'>
            <div className="warningRowImage">
             <img src={DeleteImage} height="30" width="30" alt="Delete User" />
            </div>
            <b>{this.props.text}</b>
            <div className="rowInnerPopupDelete">
            <button  onClick={this.props.DeleteBookingPopup} className="popMessageDelete">{strings.yes}</button>
            <button  onClick={this.props.closePopup} className="popMessageCancelDelete">{strings.no}</button>
            </div>
        </div>
      </div>
    );
  }
}

export default ClientDeletePopup;