import React, { Component } from "react";
import ToManyError from "./ToManyError";
import "../assets/css/reset.css";
import "../assets/css/loader.css";

class TransparentLoader extends Component {
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
      <div className="ServiceAddLoader">
        <div className="ServiceAddLoader_Inner">
            <div className="simpleClock-spinner">
                <div></div><div></div>
                <div></div><div></div>
                <div></div><div></div>
                <div></div><div></div>
                <div></div><div></div>
                <div></div><div></div>
            </div>
          </div>
        </div>

    );
  }

}
export default TransparentLoader;