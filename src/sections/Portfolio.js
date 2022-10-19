import React from "react";
import PortfolioImage from "./Portfolio-source/PortfolioImage";

function Portfolio( title, techUsed ) {
    return(
        <>
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
        </>
    );
}