import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ApectoMallCurrentOrderView extends Component {
    render() {
        return (
            <div className="activeBooking">
                <div className="activeBookingTextView">
                    <Link to="/order-details">View Your Current Order Status</Link>
                </div>
            </div>
        );
    }
}

export default ApectoMallCurrentOrderView;