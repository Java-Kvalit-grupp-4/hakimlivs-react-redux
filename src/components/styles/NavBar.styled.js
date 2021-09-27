import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  #menu {
    position: fixed;
    right: 10px;
    top: 10px;
    font-size: 35px;
    z-index: 10;
    cursor: pointer;
  }

  @media ( min-width: 850px ) and ( max-height: 768px ) {

  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 10vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const LinkContainer = styled.div`
  position: relative;
`;

export const Fade = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.29);
  z-index: -10;
`;

export const LinkList = styled.ul`
  position: fixed;
  z-index: 3;
  right: 0;
  top: 0;
  padding: 2rem 2rem;
  list-style: none;
  height: 100vh;
  width: 70%;
  background-color: #727272;
  #userIcon {
    font-size: 2rem;
  }
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  li a {
    font-size: ${props => props.fontSize.navLinks};
  }
  li p {
    padding-top: 5px;
    padding-left: 5px;
  }
`;