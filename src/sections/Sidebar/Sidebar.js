import React from 'react';
import { StyledSidebar } from '../../assets/styles/Sidebar/SidebarStyle';
import { bool } from 'prop-types';
import { Link } from "react-scroll";


const SideBar = ({ open }) => {
  return (
    <>
     <StyledSidebar open={open} >
      <Link activeClass="active" to="section1" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[#1a58a4] font-semibold tracking-wider flex align-center justify-center my-4">
        About
      </Link>
      <Link activeClass="active" to="section2" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[#1a58a4] font-semibold tracking-wider flex align-center justify-center my-4">
        Experience
      </Link>
      <Link activeClass="active" to="section3"spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[#1a58a4] font-semibold tracking-wider flex align-center justify-center my-4">
        Education
      </Link>
      <Link activeClass="active" to="section4" Aspy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[#1a58a4] font-semibold tracking-wider flex align-center justify-center my-4">
        Projects
      </Link>
      <Link activeClass="active" to="section2" Aspy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[#1a58a4] font-semibold tracking-wider flex align-center justify-center my-4">
        Testimonial
      </Link>
      <Link activeClass="active" to="section5" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[#1a58a4] font-semibold tracking-wider flex align-center justify-center my-4">
        Blog
      </Link>
     </StyledSidebar>
    </>
  );
}



SideBar.propTypes = {
  open: bool.isRequired
};

export default SideBar;