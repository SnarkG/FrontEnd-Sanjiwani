import React, { Component } from "react";
import BottomMenu from "./bottomMenu";
import ToManyError from "./ToManyError";
import "../assets/css/reset.css";
import "../assets/css/loader.css";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:0,
    };
  }
  UNSAFE_componentWillMount(){
      this.interval = setInterval(() => {
        this.setState({number: this.state.number + 1});
      }, 1000);
      console.log("interval called");
  }


  componentWillUnmount() {
      clearInterval(this.interval);
  }
  render() {
    if(this.state.number === 15){
      return (<ToManyError redirectURL="/mall" />);
    }
    return (
        <>

           {/* **************************** Seventh CSS ************************************************* */}
           <div className="spinBoxmy">
                  <div className="spinBoxOuter">
                          <div className="spinBox2"><div className="middleDot2"></div></div>
                          <div className="middleDot3"></div>
                          <div className="spinBox1"><div className="middleDot"></div></div>
                  </div>
            </div>
            {/* <div className="apectoNameLoader">APECTO</div> */}
            {/* **************************** EIGHT CSS ************************************************* */}
             <div className="cssLoader">
                  <ul>
                      <li>A</li>
                      <li>P</li>
                      <li>E</li>
                      <li>C</li>
                      <li>T</li>
                      <li>0</li>
                  </ul>

              </div>

              <BottomMenu />
            </>
    );
  }

}
export default Loader;
