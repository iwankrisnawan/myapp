import React, { Fragment } from "react";

const PortfolioImage = ( pIcon, pImage ) => {
    return (
        <Fragment>
        <div className="m-2 w-[100px] flex-none mx-auto p-5 rounded-[10px]"> {pIcon} </div>
        <div className="m-2 w-[400px] flex-none mx-auto p-5 rounded-[10px]"> {pImage} </div>
        </Fragment>
    );
};

const PortfolioContent = ( pHeading, pDesc ) => {
    return (
        <Fragment>
        <h2 className="text-4xl font-semibold" >{pHeading}</h2>
        <p>{pDesc}</p>
        </Fragment>
    );
};

export { PortfolioImage, PortfolioContent };