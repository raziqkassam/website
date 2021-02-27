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
    padding: 80px 24px; // 40px 25px; // 0 24px;
    justify-content: center;

    @media (max-width: 480px) {
        padding: 40px 20px 20px 20px;
    }
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

    @media (max-width: 480px) {
        padding: 0 15px;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media (max-width: 480px) {
        padding: 0 15px;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`

export const Title = styled.p`
    color: #52A3FF; // black;
    font-size: 20px;
    line-height: 1.1;
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
    color: gold; // E1BE00, DEC11B
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    max-width: 700px;
    text-align: ${({ align_left }) => (align_left ? 'left' : 'right')};

    @media (max-width: 480px) {
        text-align: left;
        max-width: 250px;
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
    max-width: 410px;
    margin-bottom: 35px;
    font-size: 26px;
    line-height: 1.2;
    color: ${({ darkText }) => (darkText ? '#010606' : 'white')};
`

export const BulletPoints = styled.p`
    max-width: 470px;
    margin-bottom: 18px;
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
