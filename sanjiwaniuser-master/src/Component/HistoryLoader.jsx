import React, { Component } from "react";
import "../assets/css/reset.css";
import "../assets/css/loader.css";

class HistoryLoader extends Component {
  render() {
    return (
        <div className="lds-ripple"><div></div><div></div></div>
    );
  }

}
export default HistoryLoader;
