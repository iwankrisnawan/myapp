import React from "react";
import images from "../images/about-data/about.jpeg";


function About({desc}) {
    return (
        <>  
        <div id="about" className="container min-h-[350px] mx-auto">
            <div>
                <h2 className="text-center text-[40px] text-gray-800 font-bold tracking-wide font-montserrat">Summary</h2>
                <div className="w-2/3 flex m-auto mt-10">
                    <img src={images} className="w-[200px] h-[200px] border-solid border-2 border-slate-900 rounded-[20px]"/>
                    <h2 className="text-xl ml-[30px] flex items-center tracking-wide">{desc}</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;