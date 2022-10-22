import React, { Fragment } from "react";
import { PortfolioHeading, PortfolioIcon, PortfolioParagraf, PortfolioImage } from "./Portfolio-source/PortfolioSource";



 function PortfolioSlideOne( techContentOne, techImageOne ) {
    return(
        <Fragment>
            <div className="container">
                <div>
                    <div className="content">
                        {
                            techContentOne.map(( portfolioProject, PortfolioDataIcon, index ) => {
                                return(
                                    <Fragment>
                                    <PortfolioHeading key={index} pHeading={portfolioProject.projectNameOne}/>
                                    <PortfolioIcon key={index} pIcon={PortfolioDataIcon.techIconOne}/>
                                    <PortfolioParagraf key={index} pDesc={portfolioProject.descOne}/>
                                    </Fragment>
                                );
                            })
                        };
                    </div>
                    <div className="image">
                        {
                            techImageOne.map(( portfolioProject, index ) => {
                                return(
                                    <Fragment>
                                        <PortfolioImage key={index} pImage={portfolioProject.featuredImageOne}/>
                                    </Fragment>
                                );
                            })
                        };
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

 function PortfolioSlideTwo( techContentTwo, techImageTwo) {
    return(
        <Fragment>
            <div className="container">
                <div>
                    <div className="content">
                        {
                            techContentTwo.map(( portfolioProject,PortfolioDataIcon,index ) => {
                                return(
                                    <Fragment>
                                    <PortfolioHeading key={index} pHeading={portfolioProject.projectNameTwo}/>
                                    <PortfolioIcon key={index} pIcon={PortfolioDataIcon.techIconTwo}/>
                                    <PortfolioParagraf key={index} pDesc={portfolioProject.descTwo}/>
                                    </Fragment>
                                );
                            })
                        }
                    </div>
                    <div className="image ">
                        {
                            techImageTwo.map(( portfolioProject, index ) => {
                                return(
                                    <Fragment>
                                        <PortfolioImage key={index} pImage={portfolioProject.featuredImageTwo}/>
                                    </Fragment>
                                );
                            })
                        };
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export { PortfolioSlideOne, PortfolioSlideTwo };