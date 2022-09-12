import styled from 'styled-components'

export const AboutContainer = styled.div`
    background: #242424;
    align-content: center;
`

export const AboutWrapper = styled.div`
    justify-content: center;
`

export const AboutTitleContainer = styled.div`
    align-items: center;
    justify-content: center;
    // background: #121212;    
    padding: 10px 0 10px 0; // 30px 0 30px 0;


    @media screen and (max-width: 480px) {
        padding: 5px;
    }
`

export const AboutTitle = styled.h1`
    text-align: center;
    color: gold;
    font-size: 40px;
    font-weight: normal;

    @media screen and (max-width: 480px) {
        font-size: 30px;
        padding: 20px 0;
    }
`

export const AboutBannerContainer = styled.div`
    background-image: url("../images/img-about-banner-2.png");
    background-position: center center;
    background-size: cover;
    max-width: 100vw;

    height: 150px;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        height: 80px;
        background-image: url("../images/img-about-banner-mobile-2.png");
    }
`

export const AboutBanner = styled.img`
    max-width: 100vw;
    transform: translateY(-9%);

    @media screen and (max-width: 480px) {
        transform: translateY(-6%);
    }
`

export const AboutTextWrapper = styled.div`
    display: grid;
    grid-auto-columns: minmax( auto, 1fr );
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};
    grid-gap: 60px;

    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 65px;
    justify-content: center; 
    align-items: center;

    @media (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col2'` )};
        padding: 30px 10px 0 10px;
        grid-gap: 10px;
    }
`

export const AboutTextContainer = styled.div`
    justify-items: center;    
    align-items: center;
`

export const AboutColumn1Container = styled.div`
    margin-bottom: 0px;
    padding: 0 10px;
    grid-area: col1;
    max-width: 540px;
    align-items: center;

    @media (max-width: 480px) {
        padding: 0 25px;
    }
`

export const AboutColumn2Container= styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    max-width: 540px;
    align-items: center;

    @media (max-width: 480px) {
        padding: 0 15px;
        margin-top: 0;
        margin-bottom: 40px;
    }
`

export const AboutTopline = styled.h2`
    color: gold; //#f7f8fa;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    margin: 10px 0 42px 0;

    @media (max-width: 480px) {
        font-size: 30px;
    }
`

export const AboutSubtitle = styled.p`
    color: white;
    max-width: 410px;
    margin: 0 0 20px 15px;
    font-size: 25px;
    line-height: 1.2;

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`

export const AboutHeader = styled.h3`
    color: #52A3FF; //gold;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;

    margin: 30px 0 20px 0;
`

export const AboutImageTextContainer = styled.div`
    display: flex;
    align-items: center;

`

export const AboutImage = styled.img`
    align-items: center;
    max-height: 100px;
    // margin-right: 20px;
`

export const AboutText = styled.p`
    color: #f9f9f9;
    font-size: 20px;
    line-height: 1.1;
    margin-left: 20px;

    @media screen and (max-width: 480px) {
        max-width: 280px;
    }
`

export const AboutLinksContainer = styled.div`
    display: flex;
    justify-content: start;
    margin: 35px 0 10px 0;
    align-content: center;

    @media (max-width: 480px) {
        margin-right: 0;
        justify-content: space-evenly;
    }
`

export const AboutLinks = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #f9f9f9;
    border-radius: 60px;
    background: #1c1c1c; //#f9f9f9;
    border: 2px gold outset;
    white-space: nowrap;
    padding: 2px 22px 6px 22px;
    font-size: 18px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    margin-right: 30px;

    @media (max-width: 480px) {
        margin-right: 0;
    }

    &:hover {
        font-weight: bold;
        border: 2px #52A3FF inset;
        background: gold;
        color: black;
        transform: translateY(-5px);
    }
`