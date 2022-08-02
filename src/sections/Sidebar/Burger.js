import React from 'react';
import { StyledBurger } from '../../assets/styles/Burger/BurgerStyle';
import { bool, func } from 'prop-types';

const ButtonSidebar = ({ open, setOpen }) => {
    return (
        <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
    </StyledBurger>
        </>
    );
}
ButtonSidebar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default ButtonSidebar;