import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
// import TopBarWhite from './TopBarWhite';
import ProductBar from "./topBar";
import Sanjiwani from "../assets/images/apecto.png";
// import LoaderRoundedWithBoxMarginZero from "./loaderRoundedWithBoxMarginZero";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BottomMenu from './bottomMenu';
import SanjiwaniMallCurrentOrderView from './sanjiwaniMallCurrentOrderView';

class OfferBanner extends Component {
    constructor(props) {
        super(props);
        this.state={
            shopOfferService:[],
            loaded: false,
            transparentLoader:false,
        }
    }
    
    UNSAFE_componentWillMount(){
        //this.getShopOfferServices();
        localStorage.setItem("activeMenu","Offer");
    }
        
          getShopOfferServices(){
            this.setState({
              loaded:false,
            })
            let currentComponent = this;
              // Get shop Offer Services
              axios
              .get(process.env.REACT_APP_USERAPP_BACKEND +"offer/offer-all")
              .then(function(response) { 
                console.log("Offer"+response.data.payload[0]);
                if(response.data.error !== null){
                  console.log("Null Error");
                  if(response.data.error.errorName === "NO_OFFERS_AVAIL"){
                      currentComponent.setState({
                        loadError:false,
                        emptyOfferServiceError:true,
                        loaded:false
                      });
                      console.log("No Service Found");          
                    }else{
                      currentComponent.setState({
                        loadError:true,
                        loaded:false
                      });
                      console.log("To Many Error In Shop Service");
                    }
        
                }else if (response.data.status.isSuccess === true) {
                  const count=response.data.payload[0].length;
                      if(count <= 0){
                          currentComponent.setState({
                              emptyOfferServiceError:true,
                              loaded:false
                          });
                      }else{
                          let ShopOfferService=[];
                          for (let i=0; i<count; i++) {
                              ShopOfferService.push(response.data.payload[0][i]);
                              console.log("Shop Service Information"+response.data.payload[0][i]);
                          }
                            currentComponent.setState({
                              shopOfferService:ShopOfferService,
                              loaded:false,
                            });
                      }
                    console.log("Shop Service Information");
                }  
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          

    render() {
        // const offerAll=this.state.shopOfferService.map((item, index) => (
        //     <div key={index}>
        //     {index===0?<div className="bannerContainer backgroundDarkBlue colorWhite">
        //             <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
        //                         <div className="">{item.shopName}</div>
        //                     </div>
        //                 <div className="rowDataPadding10 divider-10 text-center">
        //                     <div className="iconSize20 ">Upto {Math.round(item.percentage)}% Off</div>
        //                     <div className="smallTextLabel divider-10 lineHeight1-2">offer on "{item.serviceName}" for limited period offer</div>
        //                     <Link to="/mall"><button className="divider-10 bannerButton">Book Now</button></Link>
        //                     <svg viewBox="0 0 1440 320">
        //                             <path fill="#e7008a" fillOpacity="1" d="M0,128L160,0L320,256L480,96L640,128L800,32L960,288L1120,224L1280,128L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path>
        //                             </svg>
        //                     <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
        //                     <div className="tandcApply">*T&amp;C Apply</div>
        //                 </div>
        //             </div>:null}
        //         {index===1?<div className="bannerContainer backgroundDarkBrownRed colorWhite">
        //                 <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
        //                             <div className="">{item.shopName}</div>
        //                         </div>
        //                     <div className="rowDataPadding10 divider-10 text-center">
        //                         <div className="iconSize20 ">Upto {Math.round(item.percentage)}% Off</div>
        //                         <div className="smallTextLabel divider-10 lineHeight1-2">offer on "{item.serviceName}" for limited period offer</div>
        //                         <Link to="/mall"><button className="divider-10 bannerButton backgroundBlue colorWhite">Book Now</button></Link>
        //                         <svg viewBox="0 0 1440 320">
        //                             <path fill="#000b76" fillOpacity="1" d="M0,192L34.3,165.3C68.6,139,137,85,206,80C274.3,75,343,117,411,128C480,139,549,117,617,96C685.7,75,754,53,823,58.7C891.4,64,960,96,1029,96C1097.1,96,1166,64,1234,48C1302.9,32,1371,32,1406,32L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        //                             </svg>
        //                         <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
        //                         <div className="tandcApply">*T&amp;C Apply</div>
        //                     </div>
        //                 </div>:null}
        //             {index===2?<div className="bannerContainer backgroundPurple colorWhite">
        //             <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
        //                         <div className="">{item.shopName}</div>
        //                     </div>
        //                 <div className="rowDataPadding10 divider-10 text-center">
        //                     <div className="iconSize20 ">Upto {Math.round(item.percentage)}% Off</div>
        //                     <div className="smallTextLabel divider-10 lineHeight1-2">offer on "{item.serviceName}" for limited period offer</div>
        //                     <Link to="/mall"><button className="divider-10 bannerButton backgroundPink colorWhite">Book Now</button></Link>
        //                     <svg viewBox="0 0 1440 320">
        //                         <path fill="#e7008a" fillOpacity="1" d="M0,128L160,0L320,256L480,96L640,128L800,32L960,288L1120,224L1280,128L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path>
        //                         </svg>
        //                     <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
        //                     <div className="tandcApply">*T&amp;C Apply</div>
        //                 </div>
        //             </div> :null}
                
        //         {index===3?<div className="bannerContainer backgroundDarkPurple colorWhite">
        //             <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
        //                         <div className="">{item.shopName}</div>
        //                     </div>
        //                 <div className="rowDataPadding10 divider-10 text-center">
        //                     <div className="iconSize20 ">Upto {Math.round(item.percentage)}% Off</div>
        //                     <div className="smallTextLabel divider-10 lineHeight1-2">offer on "{item.serviceName}" for limited period offer</div>
        //                     <Link to="/mall"><button className="divider-10 bannerButton backgroundGold colorWhite">Book Now</button></Link>
        //                     <svg viewBox="0 0 1440 320">
        //                         <path fill="#DAA520" fillOpacity="1" d="M0,224L40,192C80,160,160,96,240,96C320,96,400,160,480,176C560,192,640,160,720,133.3C800,107,880,85,960,90.7C1040,96,1120,128,1200,144C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        //                     </svg>
        //                     <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
        //                     <div className="tandcApply">*T&amp;C Apply</div>
        //                 </div>
        //             </div>:null}
        //         {index===0?null:index===1?null:index===2?null:index===3?null:
        //     <div className="bannerContainer backgroundDarkBlue colorWhite">
        //             <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
        //                         <div className="">{item.shopName}</div>
        //                     </div>
        //                 <div className="rowDataPadding10 divider-10 text-center">
        //                     <div className="iconSize20 ">Upto {Math.round(item.percentage)}% Off</div>
        //                     <div className="smallTextLabel divider-10 lineHeight1-2">offer on "{item.serviceName}" for limited period offer</div>
        //                     <Link to="/mall"><button className="divider-10 bannerButton">Book Now</button></Link>
        //                     <svg viewBox="0 0 1440 320">
        //                             <path fill="#e7008a" fillOpacity="1" d="M0,128L160,0L320,256L480,96L640,128L800,32L960,288L1120,224L1280,128L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path>
        //                             </svg>
        //                     <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
        //                     <div className="tandcApply">*T&amp;C Apply</div>
        //                 </div>
        //         </div> }
                
        //         </div>

        // ));

        return (
            <>
            <ProductBar Title={"Offer Section"} search={false}like={false}cart={true}/> 
            <div className="rowDataPadding16 divider-50">
                <div className="coupon colorBlack">
                <img src="https://www.w3schools.com/w3images/hamburger.jpg" alt="Avatar" />
                <div className="rowDataPadding16 divider-10">
                    <h1 className="colorBlack bold">20% OFF YOUR PURCHASE</h1> 
                    <p className="colorBlack divider-10">Lorem ipsum dolor sit amet, et nam pertinax gloriatur.</p>
                </div>

                <div className="rowData textCenter divider-10">
                        <Link to="/mall"><button className="divider-10 bannerButton backgroundPink colorWhite">Order Now</button></Link>
                </div>

                <div className="rowDataPadding10 divider-10">
                    <p >Expires:<span className="expire">Jan 03, 2021</span></p>
                    <div className="tandcApply">*T&amp;C Apply</div>
                </div>
                <div className="divider-10"></div>
                </div>

                <div className="divider-20"></div>
                <div className="coupon colorBlack">
                <img src="https://www.w3schools.com/w3images/hamburger.jpg" alt="Avatar"  />
                <div className="rowDataPadding16 divider-10">
                    <h1 className="colorBlack bold">20% OFF YOUR PURCHASE</h1> 
                    <p className="colorBlack divider-10">Lorem ipsum dolor sit amet, et nam pertinax gloriatur</p>
                </div>
                <div className="rowData textCenter divider-10">
                        <Link to="/mall"><button className="divider-10 bannerButton backgroundGold colorWhite">Order Now</button></Link>
                </div>
                <div className="rowDataPadding10 divider-10">
                    <p >Expires: <span className="expire">Jan 03, 2021</span></p>
                    <div className="tandcApply">*T&amp;C Apply</div>
                </div>
                <div className="divider-10"></div>
                </div>
            </div>
                <div className="divider-20"></div>
        <div className="rowDataPadding16">
            <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} autoPlay={false} showIndicators={true} showStatus={false}>
                <div className="bannerContainer backgroundDarkBlue colorWhite">
                    <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                <div className="">Shop Name</div>
                            </div>
                        <div className="rowDataPadding10 divider-10 text-center">
                            <div className="iconSize20 ">Upto 20% Off</div>
                            <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                            <Link to="/mall"><button className="divider-10 bannerButton">Book Now</button></Link>
                            <svg viewBox="0 0 1440 320">
                                    <path fill="#e7008a" fillOpacity="1" d="M0,128L160,0L320,256L480,96L640,128L800,32L960,288L1120,224L1280,128L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path>
                                    </svg>
                            <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                            <div className="tandcApply">*T&amp;C Apply</div>
                        </div>
                    </div> 

                <div className="bannerContainer backgroundDarkBrownRed colorWhite">
                        <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                    <div className="">Shop Name</div>
                                </div>
                            <div className="rowDataPadding10 divider-10 text-center">
                                <div className="iconSize20 ">Upto 20% Off</div>
                                <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                                <Link to="/mall"><button className="divider-10 bannerButton backgroundBlue colorWhite">Book Now</button></Link>
                                <svg viewBox="0 0 1440 320">
                                    <path fill="#000b76" fillOpacity="1" d="M0,192L34.3,165.3C68.6,139,137,85,206,80C274.3,75,343,117,411,128C480,139,549,117,617,96C685.7,75,754,53,823,58.7C891.4,64,960,96,1029,96C1097.1,96,1166,64,1234,48C1302.9,32,1371,32,1406,32L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                                    </svg>
                                <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                                <div className="tandcApply">*T&amp;C Apply</div>
                            </div>
                        </div>

                <div className="bannerContainer backgroundPurple colorWhite">
                    <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                <div className="">Shop Name</div>
                            </div>
                        <div className="rowDataPadding10 divider-10 text-center">
                            <div className="iconSize20 ">Upto 20% Off</div>
                            <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                            <Link to="/mall"><button className="divider-10 bannerButton backgroundPink colorWhite">Book Now</button></Link>
                            <svg viewBox="0 0 1440 320">
                                <path fill="#e7008a" fillOpacity="1" d="M0,128L160,0L320,256L480,96L640,128L800,32L960,288L1120,224L1280,128L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path>
                                </svg>
                            <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                            <div className="tandcApply">*T&amp;C Apply</div>
                        </div>
                    </div> 


                <div className="bannerContainer backgroundDarkPurple colorWhite">
                    <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                <div className="">Shop Name</div>
                            </div>
                        <div className="rowDataPadding10 divider-10 text-center">
                            <div className="iconSize20 ">Upto 20% Off</div>
                            <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                            <Link to="/SanjiwaniMall"><button className="divider-10 bannerButton backgroundGold colorWhite">Book Now</button></Link>
                            <svg viewBox="0 0 1440 320">
                                <path fill="#DAA520" fillOpacity="1" d="M0,224L40,192C80,160,160,96,240,96C320,96,400,160,480,176C560,192,640,160,720,133.3C800,107,880,85,960,90.7C1040,96,1120,128,1200,144C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                            </svg>
                            <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                            <div className="tandcApply">*T&amp;C Apply</div>
                        </div>
                    </div>

                </Carousel>
        </div>

        <div className="divider-100"></div>
        {/* <div className="bannerOffer">Offer 10% off on cutting</div>
        <div className="divider-120"></div> */}

{/* 
               <div className="rowDataPadding10 divider-60">
                    <div className="bannerContainerSingle backgroundDarkBlue colorWhite">
                    <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                <div className="">Shop Name</div>
                            </div>
                        <div className="rowDataPadding10 divider-10 text-center">
                            <div className="iconSize20 ">Upto 20% Off</div>
                            <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                            <Link to="/mall"><button className="divider-10 bannerButton">Book Now</button></Link>
                            <svg viewBox="0 0 1440 320">
                                    <path fill="#e7008a" fillOpacity="1" d="M0,128L160,0L320,256L480,96L640,128L800,32L960,288L1120,224L1280,128L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path>
                                    </svg>
                            <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                            <div className="tandcApply">*T&amp;C Apply</div>
                        </div>
                    </div>  

                    <div className="bannerContainerSingle  backgroundDarkBrownRed colorWhite">
                        <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                    <div className="">Shop Name</div>
                                </div>
                            <div className="rowDataPadding10 divider-10 text-center">
                                <div className="iconSize20 ">Upto 20% Off</div>
                                <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                                <Link to="/mall"><button className="divider-10 bannerButton backgroundBlue colorWhite">Book Now</button></Link>
                                <svg viewBox="0 0 1440 320">
                                    <path fill="#000b76" fillOpacity="1" d="M0,192L34.3,165.3C68.6,139,137,85,206,80C274.3,75,343,117,411,128C480,139,549,117,617,96C685.7,75,754,53,823,58.7C891.4,64,960,96,1029,96C1097.1,96,1166,64,1234,48C1302.9,32,1371,32,1406,32L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                                    </svg>
                                <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                                <div className="tandcApply">*T&amp;C Apply</div>
                            </div>
                        </div>

                    <div className="bannerContainerSingle  backgroundPurple colorWhite">
                        <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                    <div className="">Shop Name</div>
                                </div>
                            <div className="rowDataPadding10 divider-10 text-center">
                                <div className="iconSize20 ">Upto 20% Off</div>
                                <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                                <Link to="/mall"><button className="divider-10 bannerButton backgroundPink colorWhite">Book Now</button></Link>
                                <svg viewBox="0 0 1440 320">
                                    <path fill="#e7008a" fillOpacity="1" d="M0,128L160,0L320,256L480,96L640,128L800,32L960,288L1120,224L1280,128L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"></path>
                                    </svg>
                                <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                                <div className="tandcApply">*T&amp;C Apply</div>
                            </div>
                        </div> 


                    <div className="bannerContainerSingle  backgroundDarkPurple colorWhite">
                            <div className="rowData textCenter iconSize10 bold letterSpacing1_2 divider-10">
                                        <div className="">Shop Name</div>
                                    </div>
                                <div className="rowDataPadding10 divider-10 text-center">
                                    <div className="iconSize20 ">Upto 20% Off</div>
                                    <div className="smallTextLabel divider-10 lineHeight1-2">offer on "services Name" for limited period offer</div>
                                    <Link to="/mall"><button className="divider-10 bannerButton backgroundGold colorWhite">Book Now</button></Link>
                                    <svg viewBox="0 0 1440 320">
                                        <path fill="#DAA520" fillOpacity="1" d="M0,224L40,192C80,160,160,96,240,96C320,96,400,160,480,176C560,192,640,160,720,133.3C800,107,880,85,960,90.7C1040,96,1120,128,1200,144C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                                    </svg>
                                    <div className="SanjiwaniLogo"><img src={Sanjiwani} alt="Sanjiwani" /></div>
                                    <div className="tandcApply">*T&amp;C Apply</div>
                                </div>
                            </div>
                        </div> 
                     */}

                            
                
                {localStorage.getItem("mallBooking")==="SCHEDULED"?<SanjiwaniMallCurrentOrderView/>:null}
                <div className="divider-60"></div>
                 <BottomMenu myCartCount={localStorage.getItem("cartTotalCount")} />
            </>
        );
    }
}

export default OfferBanner;