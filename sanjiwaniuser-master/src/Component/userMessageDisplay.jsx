import React, { Component } from "react";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import "../assets/css/loader.css";
import BottomMenu from "./bottomMenu";
import TopBarName from "./topBar";

class UserMessageDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setClassName:"show"
        };
      }
     
  render() {
    return (
        <div>
             <TopBarName myName="Buddy" />

             <div className="divider-90"></div>
                <div className="rowData">
                    <div className="textCenter">
                        <span className="oopsSomething" >Empty Message Box.</span>
                    </div>
                </div>  
                <BottomMenu/>
    </div>

    );
  }

}
export default UserMessageDisplay;
