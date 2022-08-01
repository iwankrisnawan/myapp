import styled from "styled-components";

export const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f2937;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (min-width: 350px) and (max-width: 500px) {
    width: 100%;
  }

  a {
    font-size: 18px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (min-width: 350px) and (max-width: 500px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;