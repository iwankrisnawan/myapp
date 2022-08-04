import React from 'react';
import { StyledSidebar } from '../../assets/styles/Sidebar/SidebarStyle';
import { bool } from 'prop-types';

const SideBar = ({open}) => {
  return (
    <>
     <StyledSidebar open={open} >
      <a
        href="#"
        className="text-3xl text-black font-semibold tracking-wider flex align-center justify-center my-4"
      >
        Skills
      </a>
      <a
        href="#"
        className="text-3xl text-black font-semibold tracking-wider flex align-center justify-center my-4"
      >
        Experience
      </a>
      <a
        href="#"
        className="text-3xl text-black font-semibold tracking-wider flex align-center justify-center my-4"
      >
        Education
      </a>
      <a
        href="#"
        className="text-3xl text-black font-semibold tracking-wider flex align-center justify-center my-4"
      >
        Projects
      </a>
      <a
        href="#"
        className="text-3xl text-black font-semibold tracking-wider flex align-center justify-center my-4"
      >
        Testimonial
      </a>
      <a
        href="#"
        className="text-3xl text-black font-semibold tracking-wider flex align-center justify-center my-4"
      >
        Blog
      </a>
     </StyledSidebar>
    </>
  );
}

SideBar.propTypes = {
  open: bool.isRequired
};

export default SideBar;