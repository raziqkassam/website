import styled from 'styled-components'
// import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: black;
    height: 80px; //10vh; // 80px;
    margin-top: -80px; // -10vh; //80px; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled( LinkS )`
    color: gold;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate( -100%, 60% );
        font-size: 1.8rem;
        cursor: pointer;
        color: gold;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    // margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`
export const NavItem = styled.li`
    height: 80px;

    &:active {
        border-bottom: 3px solid gold;
    }
`

export const NavLinks = styled(LinkS)`
    color: #f9f9f9;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        font-weight: bold;
        color: gold;
    }
    
    &:active {
        border-bottom: 3px solid gold;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

export const NavBtnLink = styled(LinkS)`
    border-radius: 50px;
    background: gold;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`