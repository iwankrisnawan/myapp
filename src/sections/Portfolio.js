import React, { Fragment } from "react";
import { PortfolioImage, PortfolioContent } from "./Portfolio-source/PortfolioSource";

 function PortfolioSlideOne( title, techUsed ) {
    return(
        <Fragment>
            <div className="container">
                <div className="title">
                    <h2 className="text-5xl"> {title} </h2>
                </div>
                <div>
                    <div className="content">
                        
                    </div>
                    <div className="image">
                        <img></img>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

 function PortfolioSlideTwo( title, techUsed ) {
    return(
        <Fragment>
            <div className="container">
                <div className="title">
                    <h2 className="text-5xl">{title}</h2>
                </div>
                <div>
                    <div className="content">

                    </div>
                    <div className="image ">

                    </div>
                </div>

            </div>

        </Fragment>
    );
};

export { PortfolioSlideOne, PortfolioSlideTwo };