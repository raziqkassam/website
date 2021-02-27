import styled from 'styled-components';
import {Link} from 'react-scroll'

// Used on each InfoSection, for buttons that link out of website
export const Button = styled.a`
    border-radius: 50px;
    background: ${ ({primary}) => (primary ? '#01BF71' : '#414141' ) };
    white-space: nowrap;
    padding: ${ ({big}) => ( big ? '14px 48px' : '12px 30px' ) };
    color: ${ ({dark}) => ( dark ? '#010606' : '#FFF' ) };
    font-size: ${ ({fontBig}) => ( fontBig ? '20px' : '16px' ) };
    outline: none;
    border: 0.5px gold outset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    text-decoration: none;
    font-weight: bold;
    margin-top: -20px;
    margin-right: 20px;

    &:hover {
        border: 0.5px #52A3FF inset;
        transform: scale(0.95);
        transition: all 0.2s ease-in-out;
        background: ${ ({primary}) => (primary ? '#FFF' : 'gold' ) };
        color: black;
    }

`

// Used on the HeroSection, Contact button that scrolls to bottom
export const ButtonScroll = styled(Link)`
    border-radius: 60px;
    background: transparent; //#f9f9f9;
    border: 2px gold outset;
    white-space: nowrap;
    padding: 2px 22px 6px 22px;
    color: #f9f9f9;
    font-size: 25px;
    outline: none;
    cursor: pointer;
    display: flex;
    // justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        border: 2px gold inset;
        transition: all 0.2s ease-in-out;
        background: gold;
        color: black;
        transform: scale(0.99);
    }

    @media screen and (max-width: 768px) {
        padding: 2px 18px 6px 18px;
        font-size: 20px;
    }

`