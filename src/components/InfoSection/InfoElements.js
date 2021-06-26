import styled from 'styled-components'

export const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? "#252525" : "#1e1e1e" )};

    @media (max-width: 900px) {
        padding: 40px 25px;
    }

    @media (max-width: 480px) {
        padding: 20px 0 0 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: flex;  // 860px; // flex;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 30px 10px; // 80px 24px; // 40px 25px; // 0 24px;
    justify-content: center;

    @media (max-width: 480px) {
        padding: 20px 15px 10px 15px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    // grid-auto-columns: minmax( auto, 1fr );
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};
    // grid-template-areas: 'col2 col1';


    @media (max-width: 768px) {
        // grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
        grid-template-areas: 'col2' 'col1';

    }
`

export const Column1 = styled.div`
    width: 700px;
    margin-bottom: 15px;
    // padding: 0 15px;
    grid-area: col1;

    @media (max-width: 480px) {
        padding: 0 15px;
        width: auto;
    }
`

export const Column2 = styled.div`
    // margin-bottom: 15px;
    // padding: 0 15px;
    grid-area: col2;
    align-items: center;

    @media (max-width: 480px) {
        padding: 0 15px;
    }
`

export const TextWrapper = styled.div`
    // max-width: 540px;
    padding: 0 10px;
`

export const Title = styled.p`
    color: #52A3FF; // black;
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 10px; // 36px;
    margin-top: 0px;
    // text-align: ${({ align_left }) => (align_left ? 'left' : 'right')};
    text-align: left;

    @media (max-width: 480px) {
        text-align: left;
    }
`

export const TopLine = styled.p`
    color: gold; // E1BE00, DEC11B
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    max-width: 300px;
    // text-align: ${({ align_left }) => (align_left ? 'left' : 'right')};
    text-align: left;


    @media (max-width: 480px) {
        text-align: left;
        max-width: 250px;
    }
`

export const Heading = styled.h1`
    color: #f7f8fa;    
    // color: white;
    font-size: 35px; //48px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 10px; //42px;
    // text-align: right;

    @media (max-width: 480px) {
        font-size: 27px;
    }
`

export const Subtitle = styled.p`
    max-width: 410px;
    margin-bottom: 35px;
    font-size: 26px;
    line-height: 1.2;
    color: ${({ darkText }) => (darkText ? '#010606' : 'white')};
`

export const BulletPoints = styled.p`
    max-width: 650px;
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 1.1;
    color: ${({ darkText }) => (darkText ? '#010606' : '#f0f0f0')};
`

export const BtnWrap = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 250px;
    height: 100%;
    margin: 20px 50px 0 0px;
    justify-content: center;

    @media (max-width: 768px) {
        // max-width: 400px;
        align-items: center;
        margin-left: 0;
        margin-right: 0;
    }

    @media (max-width: 480px) {
        align-content: center;
        margin: 0 0 12px 30px;

        // height: 150px;
        overflow: hidden;
    }
`

export const Img = styled.img`
    width: 100%; // 85%
    // margin: 0 0 10px 0;
    padding: 0;
    border-radius: 10px;
    // max-height: 90%;
    align-self: center;
    justify-self: center;

    @media (max-width: 768px) {
        margin-top: 0;
    }

    @media (max-width: 480px) {
        margin: 0px 0 0 0;
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
