import React, { Component } from 'react';
import "../assets/css/popup.css";
import strings from "./stringsoflanguages";


class apectoMallFilter extends Component {
    static defaultProps = {
        closeOnDocumentClick: true,
    }
    constructor(props){
        super(props);
        this.state = {
              displayMenu: false,
            };

            this.handleClickOutside = this.handleClickOutside.bind(this);
        }
      
        componentDidMount() {
          document.addEventListener('mousedown', this.handleClickOutside);
        }
      
        componentWillUnmount() {
          document.removeEventListener('mousedown', this.handleClickOutside);
        }

        handleClickOutside(event) {
              this.props.closePopup();
          }

  render() {
    return (
        <div id="CloseMessagePopup" className='messagePopup'>
        <div className='messagePopup_inner'>
            <div className="modal">
                <span className="close" onClick={this.props.closePopup}>&times;</span>
                {(this.props.title)?(<div className="header">{this.props.title} </div>):null}
                <div className="range-slider">
                    <input className="range-slider__range" type="range"  min="0" max="500" />
                    <span className="range-slider__value">0</span>
                    </div>                
                    <div className="rowInner">
                        <div className="textCenter">
                            <button  onClick={this.props.closePopup} className="popMessageOk">{strings.ok}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }


}

export default apectoMallFilter;