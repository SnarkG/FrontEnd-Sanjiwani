import React from 'react';

const ApectoMallProductRating = (props) =>{
    let Ratings=[];
    for(var i=0;i<props.ratingCount;i++){
        Ratings.push(<span className="icon-star-rating" key={i}></span>);
    }
    return(
        <div className="ratings">
            {Ratings}
            <span className="ratingCount"> ({props.ratingCount})</span>
        </div>
        );
    
}

export default ApectoMallProductRating;