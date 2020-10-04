import React, { Component } from 'react';
import "../assets/css/popup.css";

class ApectoMallSort extends Component {
    
    constructor(props){
        super(props);
        this.state = {
              displayMenu: false,
              selectedOption:""
            };
            this.radioChange = this.radioChange.bind(this);
            this.handleClickOutside = this.handleClickOutside.bind(this);
        }

        handleClickOutside(event) {
              this.props.closePopup(this.state.selectedOption);
          }

  render() {
    return (
        <div id="CloseMessagePopup" className='sortPopup'>
        <div className='sortPopup_inner'>
            <div className="modal">
                <span className="close" onClick={this.props.closePopup}>&times;</span>
                {(this.props.title)?(<div className="header">{this.props.title} </div>):null}
                               
                <div className="sort_radio">
                    <input type="radio"
                        value="Yes"
                        id="low_to_high"
                        checked={this.state.selectedOption === "Yes"}
                        onChange={this.radioChange} />
                        <label htmlFor="low_to_high" className="sort_radio-label">Price low to high</label>
                    </div>
                    <div className="sort_radio">
                    <input type="radio"
                        value="No"
                        id="high_to_low"
                        checked={this.state.selectedOption === "No"}
                        onChange={this.radioChange}/>
                        <label htmlFor="high_to_low" className="sort_radio-label">Price High to Low</label>
                </div> 


                    <div className="rowInner hrLine">
                        <div className="textCenter divider-10">
                            <button  onClick={this.props.closePopup} className="popMessageOk">Sort</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }


  radioChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
    console.log(e.target.value);
}
}
export default ApectoMallSort;