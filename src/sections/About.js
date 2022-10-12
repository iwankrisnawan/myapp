import React from "react";
import images from "../images/about-data/about.jpeg";


function About({desc}) {
    return (
        <>  
        <div id="about" className="container items-center w-full min-h-[300px] mt-[-50px] mb-10 mx-auto">
            <div>
                <div className="w-2/3 flex m-auto">
                    <img src={images} className="w-[200px] h-[200px] border-solid border-2 border-slate-900 rounded-[20px]"/>
                    <h2 className="text-xl text-[#3A4F66] ml-[30px] flex items-center tracking-wide">{desc}</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;