import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../../features/car/carSlice';


function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="/" className="">
                <img src="/images/logo.svg" alt="" srcset="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a href="/" key={index}>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <Fade right>
                    {cars && cars.map((car, index) => (
                        <li key={index}><a href="/">{car}</a></li>
                    ))}
                    <li><a href="/">Existing Inventory</a></li>
                    <li><a href="/">Used Inventory</a></li>
                    <li><a href="/">Trade-in</a></li>
                    <li><a href="/">Cyber Truck</a></li>
                    <li><a href="/">Roadster</a></li>
                </Fade>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    ${'' /* width: 100vw;  */} /* alternative for the below top, left & right*/
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;    
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px
    }

    @media(max-width: 560px){
        a {
            display: none;
        }
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer
`

const BurgerNav = styled.div`
    position: fixed;
    z-index: 100;
    padding: 20px;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.21);

        a {
            font-weight: 600;
        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`