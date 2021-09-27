import styled from "styled-components";

export const StyledProduct = styled.div`
  padding: 2rem 0.5rem 1rem 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
    transition: all 250ms ease-out;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const InfoContainer = styled.div`
  word-break: break-word;
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .title {
    text-align: center;
    font-size: ${props => props.fontSize.title};
  }
  .comparePrice {
    text-align: center;
    font-size: ${props => props.fontSize.paragraph};
    font-weight: bolder;
  }
  .price {
    text-align: center;
    font-size: ${props => props.fontSize.subTitle};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
`;

export const InCartLabel = styled.p`
  pointer-events: none;
`;

export const BuyButton = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(0.98);
  }
`;

export const IncrementButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    
  }
`;