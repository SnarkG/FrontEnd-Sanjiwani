import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Login from './Component/login';
import SignUp from './Component/signUp';
import SendOTP from "./Component/sendOTP";
import VerifyOTP from "./Component/verifyOTP";
import FAQ from "./Component/FAQ";
import TermsAndCondition from "./Component/termsAndCondition";
import SanjiwaniMall from "./Component/sanjiwaniMallHome";
import SanjiwaniMallMenu from "./Component/sanjiwaniMallAllCategories";
import ProductList from "./Component/sanjiwaniMallProductList";
import ProductListLike from "./Component/sanjiwaniMallLikeProductList";
import ProductDescription from "./Component/sanjiwaniMallPLDescription";
import Cart from "./Component/sanjiwaniMallCart";
import Review from "./Component/sanjiwaniMallWriteReview";
import ShipAddress from "./Component/sanjiwaniMallAddShippingAddress";
import PaymentMethod from "./Component/sanjiwaniMallPaymentMethod";
import PlaceOrder from "./Component/sanjiwaniMallplaceOrder";
import OrderHistory from "./Component/sanjiwaniMallOrderHistory";
import Ap_M_OrderConfirmPopup from './Component/OrderConfirmPopup';
import OrderDetails from './Component/sanjiwaniMallOrderDetails';
import CheckAddress from "./Component/checkAddress";
import Banners from './Component/sanjiwaniNewsBanner';
import AddPaymentMethod from './Component/addPaymentMethod';
import SanjiwaniMallHelp from './Component/sanjiwaniMallHelp';
import Account from "./Component/userProfile";
import UpdateProfile from "./Component/updateProfile";
import OfferBanner from "./Component/offerBanner";
import Search from "./Component/itemSearch";


const routing = (
    <Router>
      <div>
      <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/send" component={SendOTP} />
        <Route path="/VerifyOTP" component={VerifyOTP} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/terms" component={TermsAndCondition}/>
        <Route path="/mall" component={SanjiwaniMall} />
        <Route path="/menu" component={SanjiwaniMallMenu} />
        <Route path="/product" component={ProductList} />
        <Route path="/like-product" component={ProductListLike} />
        <Route path="/description" component={ProductDescription} />
        <Route path="/cart" component={Cart} />
        <Route path="/check-address" component={CheckAddress} />
        <Route path="/write-review" component={Review} />
        <Route path="/ship-Address" component={ShipAddress} />
        <Route path="/payment" component={PaymentMethod} />
        <Route path="/placeOrder" component={PlaceOrder} />
        <Route path="/order-history" component={OrderHistory} />
        <Route path="/confirmOrder" component={Ap_M_OrderConfirmPopup} />
        <Route path="/order-details" component={OrderDetails} />
        <Route path="/banner" component={Banners} />
        <Route path="/add-payment" component={AddPaymentMethod} />
        <Route path="/mall-help" component={SanjiwaniMallHelp}/>
        <Route path="/account" component={Account}/>
        <Route path="/update-profile" component={UpdateProfile}/>
        <Route path="/offer-banner" component={OfferBanner}/>
        <Route path="/search" component={Search}/>
        
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
