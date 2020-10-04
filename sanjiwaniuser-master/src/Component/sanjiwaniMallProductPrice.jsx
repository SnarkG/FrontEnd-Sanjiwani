import React from 'react';

const ApectoMallProductPrice = (props) => {
    return (
        <div className="price">Rs.{props.offerPrice}<span className="smallTextLabelStrick"> {props.actualPrice }</span></div>
    );
};

export default ApectoMallProductPrice;