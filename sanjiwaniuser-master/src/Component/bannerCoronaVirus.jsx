import React, { Component } from 'react';

class BannerCoronaVirus extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
        return (
                <>
                    <div className="rowInner bannerBackBlack">
                        <div className="bannerText textAlignLeft">
                            <div className="headFirst divider-8 marginLeftPer5">Coronavirus (COVID 19)</div>
                            <div className="headSecond UPPERCASE divider-4 marginLeftPer5">{this.props.message?this.props.message:"WASH HAND REGULARLY"}</div>
                            <div className="headThird divider-8 marginLeftPer5">#stay at home, stay safe</div>
                        </div>
                        <div className="bannerImage">
                            <div className="innerImage">
                                <img src={this.props.sideImage?this.props.sideImage:null} alt="banner1"/>
                            </div>
                        </div>

                    </div>
                </>
        );
    }
}

export default BannerCoronaVirus;