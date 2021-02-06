import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'

export const FooterContainer = styled.div`
    height: 720px;
    background: black;
    // background: transparent;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-bottom: 45px;
    padding: 24px;
    color: #fff;
`

export const FooterImage = styled.img`
    height: 150px;
    width: 150px;
    margin-top: 50px;

    &:hover {
        transform: scale(0.9);
        transition: 0.2s all ease-out;
    }
`

export const FooterImageWrapper = styled(LinkS)`
    height: 150px;
    width: 150px;
    cursor: pointer;
    margin-bottom: 80px;
`

export const FooterH1 = styled.h1`
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: gold;
`

export const FooterP = styled.a`
    color: #f9f9f9;
    margin-bottom: 6px;
    font-size: 1.5rem;
    font-weight: 550;
    text-decoration: none;

    &:hover {
        color: gold;
        transition: 0.3s ease-out;
    }
`

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: grid;
    align-items: center;
    justify-content: center;
`

export const FooterLinksWrapper = styled.div`
    display: flex;
`

export const FooterLinksItems = styled.a`
    color: #f9f9f9;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin: 10px;

    &:hover {
        color: gold;
        transition: 0.3s ease-out;
    }
`

export const FooterLineContainer = styled.div`
    background: black;
    padding: 1rem;
`

export const Line = styled.hr`
    margin-left: 3vw;
    margin-right: 3vw;
    border: 1px solid gold;
    border-radius: 50%;
    opacity: 50%;
`

export const FooterP2 = styled.p`
    text-align: right; // left;
    color: gold;
    text-transform: uppercase;
    font-style: italic;
    margin: 15px 15vw 10px 15vw;
`