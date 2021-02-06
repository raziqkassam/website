import { getByPlaceholderText } from '@testing-library/react'
import styled from 'styled-components'

export const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? "#f9f9f9" : "#757575" )};

    @media (max-width: 900px) {
        padding: 100px 0;
    }

    @media (max-width: 480px) {
        padding-top: 80px;
        padding-bottom: 105px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax( auto, 1fr );
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`

export const Title = styled.p`
    color: black;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 36px;
    margin-top: 0px;
    text-align: ${({ align_left }) => (align_left ? 'left' : 'right')};

    @media (max-width: 480px) {
        text-align: left;
    }
`

export const TopLine = styled.p`
    color: #DEC11B;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: ${({ align_left }) => (align_left ? 'left' : 'right')};

    @media (max-width: 480px) {
        text-align: left;
    }
`

export const Heading = styled.h1`
    // color: white;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 42px;

    @media (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 26px;
    line-height: 1.2;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BulletPoints = styled.p`
    max-width: 470px;
    margin-bottom: 18px;
    font-size: 20px;
    line-height: 1.1;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    margin: 40px 40px 0 40px;

    @media (max-width: 768px) {
        // max-width: 400px;
        align-items: center;
        margin-left: 0;
        margin-right: 0;
    }

    @media (max-width: 480px) {
        // max-width: 300px;
        align-items: center;
        margin-left: 0;
        margin-right: 0;
        padding-bottom: 30px;
    }
`

export const Img = styled.img`
    width: 100%; // 85%
    margin: 0 0 10px 0;
    padding: 0;
    border-radius: 10px;
    // max-height: 90%;
    align-items: center;
    justify-self: center;

    @media (max-width: 768px) {
        margin-top: 0;
        
    }

    &:hover {
        transform: scale(1.02);
        transition: 0.25s all ease-in-out
    }
`

export const InfoLogo = styled.div`
    color: gold;
    font-size: 2rem;
    display: flex;
    align-items: center;
`
