import React, { Fragment } from "react";

const PortfolioHeading = ( pHeading ) => {
    return (
        <Fragment>
        <h2 className="text-4xl font-semibold" >{pHeading}</h2>
        </Fragment>
    );
};

const PortfolioIcon = ( pIcon ) => {
    return(
        <Fragment>
            <div className="m-2 w-[100px] flex-none mx-auto p-5 rounded-[10px]"> {pIcon} </div>
        </Fragment>
    );
};

const PortfolioParagraf = ( pDesc ) => {
    return(
        <Fragment>
            <p>{pDesc}</p>
        </Fragment>
    );
};

const PortfolioImage = ( pImage ) => {
    return (
        <Fragment>
        <div className="m-2 w-[400px] flex-none mx-auto p-5 rounded-[10px]"> {pImage} </div>
        </Fragment>
    );
};

export { PortfolioHeading, PortfolioIcon, PortfolioParagraf, PortfolioImage };