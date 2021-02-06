import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled.a`
    border-radius: 50px;
    background: ${ ({primary}) => (primary ? '#01BF71' : '#414141' ) };
    white-space: nowrap;
    padding: ${ ({big}) => ( big ? '14px 48px' : '12px 30px' ) };
    color: ${ ({dark}) => ( dark ? '#010606' : '#FFF' ) };
    font-size: ${ ({fontBig}) => ( fontBig ? '20px' : '16px' ) };
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    text-decoration: none;
    font-weight: bold;
    margin-right: 20px;

    &:hover {
        transform: scale(0.95);
        transition: all 0.2s ease-in-out;
        background: ${ ({primary}) => (primary ? '#FFF' : 'gold' ) };
        color: black;
    }

`

export const ButtonScroll = styled(Link)`
    border-radius: 60px;
    background: transparent; //#f9f9f9;
    border: 3px solid gold;
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