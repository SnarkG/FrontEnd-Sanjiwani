import React, { Component } from 'react';
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/slider.css";
import banner1 from "../assets/images/innerBanner1.jfif";
import banner2 from "../assets/images/innerBanner2.jfif";
import banner3 from "../assets/images/innerBanner3.jfif";
import banner4 from "../assets/images/innerBanner4.jfif";
import shop2 from "../assets/images/shopOffer2.png";

class ApectoNewsBanner extends Component {
    render() {
        return (
            <>
            <div className="hrLine"></div>
            <div className="row">
                <div className="announcement">
                    <div className="icon-down-arrow newsBannerIcon colorYellow"></div>
                    <div className="newsBanner-text UPPERCASE">Apecto key measure to ensure your safety</div>
                    <div className="icon-down-arrow newsBannerIcon colorYellow"></div>
                </div>
            </div>
            <div className="scrolling-wrapper innerAdvertizeBannerScroll">
            <div className="myCard">
                    <div className="innerAdvertizeCard">                            
                                <div className="innerAdvertizeCardImg">
                                    <img src={banner1} alt=""></img> 
                        </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerAdvertizeCard">                            
                                <div className="innerAdvertizeCardImg">
                                    <img src={banner2} alt=""></img> 
                        </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerAdvertizeCard">
                                <div className="innerAdvertizeCardImg">
                                    <img src={banner3} alt=""></img> 
                            </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerAdvertizeCard">
                                <div className="innerAdvertizeCardImg">
                                    <img src={banner4} alt=""></img> 
                        </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerAdvertizeCard">
                                <div className="innerAdvertizeCardImg">
                                    <img src={shop2} alt=""></img> 
                            </div>
                    </div>
                </div>
            
            </div>
            </>
        );
    }
}

export default ApectoNewsBanner;
