import React, { Component } from 'react';
import "../assets/css/reset.css";
import "../assets/css/loader.css";

class LoaderRounded extends Component {
    render() {
        return (
            <div className="roundSpinner"></div>
        );
    }
}

export default LoaderRounded;