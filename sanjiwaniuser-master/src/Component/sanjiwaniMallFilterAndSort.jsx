import React, { Component } from 'react';
// import {Link} from "react-router-dom";
import FilterPopup from "./apectoMallFilter";
import SortPopup from "./sanjiwaniMallSort";

import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

class SanjiwaniFilterAndSort extends Component {
    constructor(props) {
        super(props);
        this.state={
            filterPopup:false,
            sortPopup:false,
        }
    }

    render() {
        return (
            <div>
                <div className="divider-80"></div>
                <div className="bottomMenuFilter noSelect">
                    <div className="bottomMenuContentFilter" >
                        <div className="bottomMenuContentMenuFilter marginRight1">
                            <div className="divider-10 sortandfilter" onClick={()=>this.sort()}>
                                <svg height="12pt" viewBox="-10 0 447 448" width="12pt">
                                    <path d="m118.324219 393.375v-393.375h-32v393.375l-63.199219-63.199219-22.625 22.625 90.511719 90.511719c6.25 6.246094 16.375 6.246094 22.625 0l90.511719-90.511719-22.625-22.625zm0 0"/>
                                    <path d="m428.148438 95.199219-90.511719-90.511719c-6.25-6.246094-16.375-6.246094-22.625 0l-90.511719 90.511719 22.625 22.625 63.199219-63.199219v393.375h32v-393.375l63.199219 63.199219zm0 0"/>
                                    </svg><span className="marginRight6PX"></span>sort</div>
                        </div>
                        <div className="bottomMenuContentMenuFilter">
                            <div className="divider-10 sortandfilter" onClick={()=>this.filter()}>
                                <svg height="12pt" width="12pt" viewBox="-4 0 393 393.99003" >
                                    <path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0"/>
                                    </svg><span className="marginRight6PX"></span>Filter</div>
                        </div>
                    </div>
                  </div>
                  {this.state.filterPopup ? (
                        <FilterPopup
                            title="Sorting"
                            closePopup={this.CloseMessagePopupFilter.bind(this)}
                        />
                        ) : null}

                {this.state.sortPopup ? (
                    <SortPopup
                        title="Filter"
                        closePopup={this.CloseMessagePopupSort.bind(this)}
                    />
                    ) : null}
            </div>
        );
    }


    sort(){
        this.setState({
            sortPopup:true,
        })
    }

    filter(){
        this.setState({
            filterPopup:true,
        })
    }
    CloseMessagePopupFilter() {
        this.setState({
            filterPopup: !this.state.filterPopup
        });
      }

CloseMessagePopupSort() {
    this.setState({
        sortPopup: !this.state.sortPopup
    });
    }
}

export default SanjiwaniMallFilterAndSort;