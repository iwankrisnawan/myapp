import styled from "styled-components";

export const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e1e8ed;
  height: 100vh;
  width: 300px;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.35s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  
  @media (min-width: 350px) and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;