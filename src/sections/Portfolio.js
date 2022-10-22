import React, { Fragment } from 'react';
import { PortfolioSlideOne, PortfolioSlideTwo } from './PortfolioSlide';

function Portfolio() {
    return(
        <Fragment>
            <PortfolioSlideOne></PortfolioSlideOne>
            <PortfolioSlideTwo></PortfolioSlideTwo>
        </Fragment>
    );
};

export default Portfolio;