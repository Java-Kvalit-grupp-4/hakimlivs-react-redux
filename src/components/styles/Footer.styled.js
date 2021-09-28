import styled from "styled-components";

export const StyledFooter = styled.footer`
  min-height: 10vh;
  width: 100%;
  background-color: #1a3a50;
  display: flex;
  flex-direction: column;
  margin: auto;
  
`;

export const FooterContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 10rem;

  @media (min-width: 850px) {
    flex-direction: row;
    text-align: left;
    justify-content: space-around;
    
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
  @media (min-width: 1400px) {
    width: 40%;
  }
`;

export const FooterWrapper = styled.div`
  .footerTitle {
    color: #fff;
    font-size: 1.3rem;
  }

  .lineSpace {
    padding-bottom: 0.5rem;
  }

  .titlePadding {
    padding: 1rem 0;
  }
  
  .pointer {
    cursor: pointer;
  }

  p {
    color: #fff;
  }
`;