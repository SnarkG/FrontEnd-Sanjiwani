import React, { Component } from 'react';
import "../assets/css/reset.css";
import "../assets/css/loader.css";
class LoaderWithoutBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      render() {
        
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
    
                </>
        );
      }
    
    }
    
export default LoaderWithoutBottom;