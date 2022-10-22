import React from "react";
import { ImageLogo, ImagePortfolio } from "./image";

const iconSet = "mx-auto inline-block w-[60px]";
const imgSet = "inline-block w-[80px]";
const data = {
    hero : {
        name: "Agus Wibawa",
        desc: "Web Designer | UI & UX Designer",
        resume: "https://www.gmail.com",
        contact: "#contact",
        social: {
            facebook: "https://facebook.com/aguswibawas/",
            instagram: "https://instagram.com/justadynamicnerds/",
            twitter: "https://twitter.com/justdynamicnerd",
            dribbble: "https://dribbble.com/jesuschrist",
            github: "https://github.com/wibawasuyadnya",
            email: "https://mail.google.com/mail/?view=cm&fs=1&to="
        }
    },
    about : {
        desc: "Hey I’m Agus, I’m Bali based Web Designer,UI/UX Designer. I enjoy designing and building a simple, innovative, and minimalist Interface design with the latest technology, and my experience. I can maintain and helping existing site for upgrade, I’m open for remote or full-time work and can easily adapt with your workflow and collaborative with team. Contact me for more info :3 "
    },
    tools : {
        title: "Tech that I use",
        skills: [
            {
                skillName:"Adobe",
                skillLink:"https://www.adobe.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoAdobe} className={iconSet}/>
            },
            {
                skillName:"CSS",
                skillLink:"https://developer.mozilla.org/en-US/docs/Web/CSS",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoCss} className={iconSet}/>
            },
            {
                skillName:"Figma",
                skillLink:"https://www.figma.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoFigma} className={iconSet}/>
            },
            {
                skillName:"Html",
                skillLink:"https://developer.mozilla.org/en-US/docs/Web/HTML",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoHtml5} className={iconSet}/>
            },
            {
                skillName:"JavaScript",
                skillLink:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoJs} className={iconSet}/>
            },
            {
                skillName:"Npm",
                skillLink:"https://npmjs.com",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoNpm} className={iconSet}/>
            },
            {
                skillName:"React",
                skillLink:"https://reactjs.org/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoReact} className={iconSet}/>
            },
            {
                skillName:"Git",
                skillLink:"https://git-scm.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoGit} className={iconSet}/>
            },
        ],
    },
    portfolio : {
        title : "Portfolio",
        PortfolioDataIcon: [
            {
                techIconOne: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageWordpress} className={imgSet}/>
            },
            {
                techIconOne: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageJavascript} className={imgSet}/>
            },
            {
                techIconOne: <img alt="PortfolioImagetech" src={ImagePortfolio.ImagePHP} className={imgSet}/>
            },
            {
                techIconOne: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageElementor} className={imgSet}/>
            },
            {
                techIconOne: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageFigma} className={imgSet}/>
            },
            {
                techIconTwo: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageWordpress} className={imgSet}/>
            },
            {
                techIconTwo: <img alt="PortfolioImagetech" src={ImagePortfolio.ImagePHP} className={imgSet}/>
            },
            {
                techIconTwo: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageElementor} className={imgSet}/>
            },
            {
                techIconTwo: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageLaravel} className={imgSet}/>
            },
            {
                techIconTwo: <img alt="PortfolioImagetech" src={ImagePortfolio.ImageReact} className={imgSet}/>
            },
            {
                techIconTwo: <img alt="PortfolioImagetech" src={ImagePortfolio.ImagejQuery} className={imgSet}/>
            },
        ],
        portfolioProject : [
            {
                projectNameOne: "Multi Level Marketing Site",
                descOne : "I and one of my lifetame changer colleague we build together a lifetime project for someone from europe on his MLM welness project and I was responsible at all layout design that displayed on the site from mocking up to live website, this project was build using PHP, Wordpress, jQuery",
                featuredImageOne : <img alt="FeaturedPortfolio" src={ImagePortfolio.ImageWnf} />
            },
            {
                projectNameTwo: "E-Commerce Pharmacy Manufacture Site",
                descTwo : "we working together to maintain all website for cannabis manufactured company in UK with our company as third party source for supporting their digital marketing campaign, here in All Good Bud I was a Front End Developer and UI / UX Designer have responsibilites to maintain all design interface layout for two website ",
                featuredImageTwo: <img alt="FeaturedPortfolio" src={ImagePortfolio.ImageAgb} />
            },
        ],
    }
    
};


export default data;

