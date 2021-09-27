import { StyledCard } from "./styles/Card.styled";

const Card = ({margin,width, padding,children}) => {
    return(
        <StyledCard width={width} margin={margin} padding={padding}>
            {children}
        </StyledCard>
    );
}

export default Card;