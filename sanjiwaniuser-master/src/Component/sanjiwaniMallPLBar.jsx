import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
class SanjiwaniMallPLBar extends Component {
    constructor(props) {
        super(props);
        this.state={
         toProductList:false,
        }
    }

    sendProductIdtoProductList(value){
        localStorage.setItem("CategoryName",value);
          this.setState({
              toProductList: true,
            });
           
      }

    render() {
            if (this.state.toProductList === true) {
                return <Redirect to={{
                  pathname: '/product'
              }} />
            }
        return (
            <div className="topBarPL"><Link to={this.props.backUrl} >
                <div className="iconStarPLBackButton icon-angle-left-arrow"></div></Link>
                    <div className="topBarPLName">{this.props.productTitle}</div>
                    <div className="topBarPLNotificationIcon">
                        {this.props.search?<div className="dropdownDotMenu">
                        <span className="icon-menuDot space-4px"></span>
                        <div className="dropdown-content">
                            <p className="textCenter" onClick={event => this.sendProductIdtoProductList("Diwali")}>Vegetable</p>
                            <p className="textCenter">Fruits</p>
                            <p className="textCenter">Hotel</p>
                            <p className="textCenter">Diwali</p>
                            <p className="textCenter">Latest</p>
                            <p className="textCenter">Grocery</p>
                        </div>
                        </div>:null}
                        {this.props.like?<Link to="/like-product"><span className="flaticon-like space-4px"></span></Link>:null}
                        {this.props.cart?<Link to="/cart"><span className="flaticon-cart space-4px">
                        <div className=" notify-badge" data-badge={localStorage.getItem("cartTotalCount")}></div>
                        </span></Link>:null}
                    </div>
                </div>
        );
    }

}

export default SanjiwaniMallPLBar;