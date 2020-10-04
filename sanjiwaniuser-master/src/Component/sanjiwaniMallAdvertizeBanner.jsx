import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner from "./bannerCoronaVirus";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/slider.css";
import image1 from "../assets/images/Banner1.png";
import image2 from "../assets/images/Banner2.png";
import image3 from "../assets/images/Banner3.png";

class ApectoMallAdvertizeBanner extends Component {
    
    UNSAFE_componentWillMount(){
        //this.sliderAuto();
    }

    sliderAuto(){	
        var i = 1;
        function Move(){ 	
            i = (i%4)+1; 
            document.getElementById('i'+i) ;
        }
        setInterval(Move,3000);
    }

    render() {

        return (
            <>
            <div className="banner-container">
                <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay>
                    <div className="imageSmallSize-smallBanner">
                        <Banner   message="MAINTAIN SOCIAL DISTANCING"sideImage={image1}/>
                    </div>
                    <div className="imageSmallSize-smallBanner">
                        <Banner   message="DO CHECKUPS STAY HEALTHY"sideImage={image2}/>
                    </div>
                    <div className="imageSmallSize-smallBanner">
                        <Banner   message="WASH HANDS REGULARLY"sideImage={image3}/>
                    </div>
                    <div className="imageSmallSize-smallBanner">
                        <Banner   message="Avoid busy and crowded spaces"sideImage={image1}/>
                    </div>
                   
                </Carousel>
            </div>

            {/* <div className="container">
                    <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay>
                    <div className="imageSmallSize">
                        <img src="http://www.bhmpics.com/wallpapers/little_pony_art-800x480.jpg" alt=""/> 
                        
                    </div>
                    <div className="imageSmallSize">
                         <img src="http://wallpaperswide.com/download/up_house-wallpaper-1280x800.jpg" alt=""/> 
                        
                    </div>
                    <div className="imageSmallSize">
                        <Banner   message="WASH HANDS REGULARLY"sideImage={image3}/>
                     <img src="https://preview.ibb.co/e5OShF/cropped_800_480_111290.jpg" alt=""/>
                        
                    </div>
                   
                </Carousel>  
                </div> */}
                {/* <div className="container">
                    <input type="radio" id="i1" name="images" />
                    <input type="radio" id="i2" name="images" />
                    <input type="radio" id="i3" name="images" />
                    <input type="radio" id="i4" name="images"  />
                    <div className="slide_img" id="one">			   
                            <img src="http://www.bhmpics.com/wallpapers/little_pony_art-800x480.jpg" alt="image1"/>
                    </div>
                    <div className="slide_img" id="two">   
                            <img src="https://preview.ibb.co/e5OShF/cropped_800_480_111290.jpg " alt="image2"/> 
                    </div>    
                    <div className="slide_img" id="three">
                            <img src="http://wallpaperswide.com/download/up_house-wallpaper-1280x800.jpg" alt="image3"/>	 
                    </div>
                    <div className="slide_img" id="four">
                            <img src={images1} alt="image4"/>	
                    </div>                    
                    <div id="nav_slide">
                        <label htmlFor="i1" className="dots" id="dot1"></label>
                        <label htmlFor="i2" className="dots" id="dot2"></label>
                        <label htmlFor="i3" className="dots" id="dot3"></label>
                        <label htmlFor="i4" className="dots" id="dot4"></label>
                    </div>
                        
                </div> */}

            </>
        );
    }
}

export default ApectoMallAdvertizeBanner;