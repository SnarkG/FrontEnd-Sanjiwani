import React, { Component } from 'react';
import "../assets/css/loader.css";
import ToManyError from "./ToManyError";
class LoaderRoundedWithBoxMarginZero extends Component {
    constructor(props) {
        super(props);
        this.state = {
          number:0,
        };
      }
    // UNSAFE_componentWillMount(){
    //   this.interval = setInterval(() => {
    //     this.setState({number: this.state.number + 1});
    //   }, 1000);
    //   console.log("interval called");
    // }
    
    
    // componentWillUnmount() {
    // clearInterval(this.interval);
    // }
      render() {
        if(this.state.number === 15){
          return (<ToManyError redirectURL="/shop" />);
        }
        return (
            <div className="roundSpinnerWithBoxMarginZero"></div>
        );
    }
}

export default LoaderRoundedWithBoxMarginZero;