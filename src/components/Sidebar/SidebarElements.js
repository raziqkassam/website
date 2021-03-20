import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    // align-items: center;
    top: 0;
    // left: 0;
    transition: 0.6s ease-in-out;
    
    opacity: ${ ({ isOpen }) => ( isOpen ? '100%' : '25%' )}; // if open, 100%, else 0%
    right: ${ ({ isOpen }) => ( isOpen ? '0' : '-100%' )}; // top:
    // top: ${ ({ isOpen }) => ( isOpen ? '0' : '-100%' )}; // top:


`

export const CloseIcon = styled(FaTimes)`
    color: gold;
    
    &:hover {
        color: white;
    }
`

export const NavLogo = styled( LinkS )`
    justify-self: flex-start;
    display: flex;
    align-items: center;
`

export const NavImage = styled.img`
    height: 72px;
    width: 75px;

    justify-self: flex-start;
    align-items: center;
    margin: 0 0 0 24px;

    &:hover {
        transform: scale(0.93);
        transition: 0.2s all ease-out;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #f9f9f9;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 90px);
    text-align: center;
    font-size: 1.5rem;
    cursor: pointer;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    color: white;

    &:hover {
        color: gold;
        font-weight: bold;
        font-size: 1.5rem;
        transform: translateX(-50px);
        transition: 0.3s ease-in-out;
    }
`

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkS)`
    border-radius: 50px;
    background: gold;
    white-space: nowrap;
    padding: 10px 40px;
    color: black;
    font-size: 1.5rem;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #f9f9f9;
        color: #010606;
        font-weight: bold;
        // padding: 16px 61px;
    }
`