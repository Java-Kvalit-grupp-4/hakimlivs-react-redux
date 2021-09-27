import Card from "./Card";
import {
    ButtonContainer,
    BuyButton,
    ImageContainer, InCartLabel,
    IncrementButton,
    InfoContainer,
    StyledProduct
} from "./styles/Product.styled";
import {FONT_SIZE} from "./styles/constants.sytle";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addProductToCart, decrementCart, incrementCart} from "../redux/actions/cartAction";

const Product = ({product}) => {
    const [inCart, setInCart] = useState(0);

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProductToCart(product.sku))
        setInCart(inCart + 1)
    }

    const incrementProduct = () => {
        dispatch(incrementCart(product.sku))
        setInCart(inCart + 1)
    }

    const decrementProduct = () => {
        dispatch(decrementCart(product.sku))
        setInCart(inCart - 1)
    }

    const checkProductStock = () => {
        return product.stock <= 0;
    }

    const checkComparePriceUnit = () => {
        if (product.unit === 'ml' || product.unit === 'cl' || product.unit === 'l') {
            return 'l'
        }else if (product.unit === 'g' || product.unit === 'hg' || product.unit === 'kg') {
            return 'kg'
        }else {
            return 'no unit'
        }
    }

    const formatPrice = (price) => {
        return price;
    }

    return (
        <Card width='150px' margin='10px'>
            <StyledProduct>
                <ImageContainer>
                    <img src={product.image} alt="product"/>
                </ImageContainer>
                <InfoContainer fontSize={FONT_SIZE}>
                    <h2 className='title'>{product.title}</h2>
                    <p className='comparePrice'>{product.comparablePrice}/{checkComparePriceUnit()}</p>
                    <h3 className='price'>{formatPrice(product.price)} kr</h3>
                </InfoContainer>
                <ButtonContainer>
                    {inCart === 0 && (
                        <BuyButton disabled={checkProductStock()} onClick={() => addToCart()}>{!checkProductStock() ? 'Köp':'Slut'}</BuyButton>
                    )}
                    {inCart !== 0 && (
                        <>
                            <IncrementButton onClick={() => decrementProduct()}>-</IncrementButton>
                            <div>
                                <InCartLabel>{inCart}</InCartLabel>
                            </div>
                            <IncrementButton onClick={() => incrementProduct()}>+
                            </IncrementButton>
                        </>
                    )}
                </ButtonContainer>
            </StyledProduct>
        </Card>
    )
}



export default Product;