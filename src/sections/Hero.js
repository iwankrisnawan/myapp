import React from "react";
import images from "../images/hero-data/agus.jpeg";
import { FaEnvelope, FaGithub, FaDribbble, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Hero ({name, desc, resume, contact, medsos:{github, facebook, instagram, twitter, dribbble, email}}) {
    return (
        <>
       <div className="container flex items-center w-full mx-auto min-h-[600px] my-8">
            <div className="m-auto align-middle">
                <div>
                <img src={images} width="140px" className="border-solid border-2 border-[#1a58a4] rounded-full m-auto"/>
                </div> 
                <div className="">
                <h1 className="text-center text-[#1a58a4] font-extrabold text-6xl tracking-wider pb-[10px] pt-[10px]">Hey, I'm {name}</h1>
                <h2 className="text-center text-[#3A4F66] font-semibold text-2xl tracking-wider pt-[10px]">{desc}</h2>
                <div className="flex align-center justify-center mt-4">
                    <a className="text-xl m-2 border-solid text-[#1a58a4] font-medium border-2 border-[#0c40b0] py-2 px-5 rounded-full hover:bg-[#0c40b0] hover:text-white hover:border-[#0c40b0]" href={resume}>Resume</a>
                    <a className="text-xl m-2 border-solid text-[#1a58a4] font-medium border-2 border-[#0c40b0] py-2 px-5 rounded-full hover:bg-[#0c40b0] hover:text-white hover:border-[#0c40b0]" href={contact}>Contact</a>
                </div>
                </div>
                <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#1a58a4] hover:bg-[#1a58a4] rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#1a58a4] hover:bg-[#1a58a4] rounded-full hover:text-white transition-colors duration-300"
              href={facebook}
            >
              <FaFacebook />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#1a58a4] hover:bg-[#1a58a4] rounded-full hover:text-white transition-colors duration-300"
              href={instagram}
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#1a58a4] hover:bg-[#1a58a4] rounded-full hover:text-white transition-colors duration-300"
              href={dribbble}
            >
              <FaDribbble />
              <span className="sr-only">Dribbble</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#1a58a4] hover:bg-[#1a58a4] rounded-full hover:text-white transition-colors duration-300"
              href={twitter}
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#1a58a4] hover:bg-[#1a58a4] rounded-full hover:text-white transition-colors duration-300"
              href={email}
            >
              <FaEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
    </div>
        </>
    );
}

export default Hero;