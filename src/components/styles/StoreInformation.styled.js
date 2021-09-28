import styled from "styled-components";

export const StyledStoreInformation = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  
  .title {
    padding-bottom: 1rem;
  }
  
  .underTitle {
    padding-top: 1rem;
    font-weight: bolder;
    font-size: ${props => props.fontSize.title};
  }
  
  .information {
    padding-top: 0.3rem;
    font-size: ${props => props.fontSize.text};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  }
`;