import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {LinkContainer, LinkList, LogoContainer, StyledNavbar} from "./styles/NavBar.styled";
import {FONT_SIZE} from "./styles/constants.sytle";
import {HiOutlineMenu} from "react-icons/all";
import {BiUserCircle} from 'react-icons/bi';
import Button from "./Button";

import logo from '../img/logo.png'

import {useDispatch, useSelector} from "react-redux";
import {changeLoggedInStatus} from "../redux/actions/loggedInAction";
import {logoutUser} from "../redux/actions/userAction";
import {useHistory} from "react-router";
import {loadProducts} from "../redux/actions/productAction";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.userState.user.username)
    const [isLoggedIn, loggedInText] = useSelector((state) => [state.loggedInState.isLoggedIn,
        state.loggedInState.loggedInText])

    const handleClick = () => {
        if (isLoggedIn) {
            dispatch(logoutUser())
            dispatch(changeLoggedInStatus());
            history.push('/')
        }else {
            history.push('/sign-in')
        }
        setIsOpen(false)
    }

    const handleLogoClick = () => {
        dispatch(loadProducts())
        history.push('/')
    }

    return (
        <StyledNavbar>
            <HiOutlineMenu id='menu' onClick={() => setIsOpen(!isOpen)}/>
            <LogoContainer>
                <img src={logo} alt='Hakim livs logo' onClick={handleLogoClick}/>
            </LogoContainer>
            <LinkContainer>
                {isOpen && (
                    <LinkList fontSize={FONT_SIZE}>
                        <li><BiUserCircle id='userIcon'/><p>{user ? user : 'Not logged in'}</p></li>
                        <li><Link to='/' onClick={()=> setIsOpen(false)}>Home</Link></li>
                        {isLoggedIn && (
                            <>
                                <li><Link to='/my-account' onClick={()=> setIsOpen(false)}>My Account</Link></li>
                                <li><Link to='/checkout' onClick={()=> setIsOpen(false)}>Checkout</Link></li>
                            </>
                        )}
                        <li><Link to='/about-us' onClick={()=> setIsOpen(false)}>About Us</Link></li>
                        <li><Button title={loggedInText} onClick={handleClick}/></li>
                    </LinkList>
                )}
            </LinkContainer>
        </StyledNavbar>
    )
}

export default NavBar;