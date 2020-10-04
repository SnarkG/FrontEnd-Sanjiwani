import React, { Component } from 'react';
import "../assets/css/popup.css";
import TickMark from '../assets/images/tickMarkGreen.png'; 

class OrderConfirmPopup extends Component {
    static defaultProps = {
        closeOnDocumentClick: true,
    }
    constructor(props){
        super(props);
        this.state = {
              displayMenu: false,
            };

            this.handleClickOutside = this.handleClickOutside.bind(this);
            this.handleOnClick = this.handleOnClick.bind(this);
        }
      
        componentDidMount() {
          document.addEventListener('onclick', this.handleClickOutside);
          document.addEventListener('onclick',this.handleOnClick);
        }
      
        componentWillUnmount() {
          document.removeEventListener('onclick', this.handleClickOutside);
          document.removeEventListener('onclick',this.handleOnClick);
        }

        handleClickOutside(event) {
              this.props.closePopup();
          }
        handleOnClick(event){
          this.props.viewOrderHistory();
        }

  render() {
    return (
        <div id="CloseMessagePopup" className='messagePopup'>
        <div className='orderPlacePopup_inner'>
            <div className="modal">
                <span className="close" onClick={this.props.closePopup}>&times;</span>
                <div className="thankyouRowImage">
                  <img src={TickMark} height="60" width="60" alt="logo" />
                </div>

                {(this.props.title)?(<div className="orderPlace_header">{this.props.title} </div>):null}
                {(this.props.body)?(<div className="orderPlace_content">{this.props.body}</div>):null} 
                {(this.props.content)?(<div className="orderPlace_content">{this.props.content}</div>):null} 
                    <div className="rowInner divider-20">
                        <div className="textCenter">
                          {this.props.buttonText ==="Ok"?
                            <button  onClick={this.props.closePopup} className="thankyouPopMessageOk">{this.props.buttonText}</button>
                            :<button  onClick={this.props.viewOrderHistory} className="thankyouPopMessageOk">{this.props.buttonText}</button>}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
  }


}

export default OrderConfirmPopup;