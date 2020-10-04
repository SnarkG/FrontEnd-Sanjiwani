import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import NoProductImage from "../assets/images/images.jpg";
class ApectoMallPDescriptionImages extends Component {
    constructor(props) {
        super(props);
        this.state={
            images:[],

        }
    }

    render() {
        console.log("images from description",this.props.images);
        console.log("images from description length",this.props.images.front_view);
        // const imagesAll =this.props.images.map((images)=>
        //             <div>
        //                 <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+images.frontView} alt=""/>
        //             </div>);
        return (
            <div className="containerDescription">
                    <Carousel showThumbs={false} showArrows={false}>
                    <div className="descriptionImage">
                      <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + this.props.images.front_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image1" />
                        {/* <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+this.props.images.front_view} alt=""/> */}
                    </div>
                    <div className="descriptionImage">
                    <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + this.props.images.brand_img} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image2" />

                    {/* <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+this.props.images.brand_img} alt=""/>                         */}
                    </div>
                    <div className="descriptionImage">
                    <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + this.props.images.back_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image3" />

                        {/* <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+this.props.images.back_view} alt=""/> */}
                    </div>
                    <div className="descriptionImage">
                    <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + this.props.images.left_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image4" />

                        {/* <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+this.props.images.left_view} alt=""/> */}
                    </div>
                    <div className="descriptionImage">
                    <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + this.props.images.right_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image5" />

                        {/* <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL+this.props.images.right_view} alt=""/> */}
                    </div>
                   
                </Carousel>

                        
                </div>

        );
    }
}

export default ApectoMallPDescriptionImages;