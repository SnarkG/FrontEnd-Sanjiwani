import React from 'react';

const ApectoMallPDRatings = (props) =>{
    let Ratings=[];
    for(var i=0;i<props.ratingCount;i++){
        Ratings.push(<span className="icon-star-pdrating " key={i}></span>);
    }
    return(
        <div className="pdRatings divider-10">
            {Ratings}
            <span className="pdRatingCount"> ({props.ratingCount})</span>
        </div>
        );
    
}

export default ApectoMallPDRatings;