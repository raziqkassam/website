import styled from 'styled-components'

export const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? "#252525" : "#1e1e1e" )};

    @media (max-width: 900px) {
        padding: 40px 25px;
    }

    @media (max-width: 480px) {
        padding: 20px 0 30px 0;
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
    max-width: 1000px;
    display: grid;
    // align-items: center;
    grid-template-areas: 'col3 col1';
    margin-bottom: 10px;

    @media (max-width: 768px) {
        grid-template-areas: 'col1' 'col3';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    align-self: center;
    width: 700px;

    @media (max-width: 480px) {
        // padding: 0 15px;
        margin: -10px 0 0 0;
        width: auto;
    }
`

// export const Column2 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
//     align-self: center;
//     width: 180px;

//     @media (max-width: 480px) {
//         width: 200px;
//         justify-self: center;
//     }
// `

export const Column3 = styled.div`
    margin-bottom: 15px;
    // padding: 0 15px;
    grid-area: col3;
    
    @media (max-width: 480px) {
        padding: 0 -10px;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    // justify-content: center;
`

export const Title = styled.p`
    color: #52A3FF; // black;
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 0 0 10px 20px;
    text-align: left;

    @media (max-width: 480px) {
        margin: 40px 0 0px 20px;
    }
`

export const TopLine = styled.p`
    color: gold; // E1BE00, DEC11B
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 0 0 15px 0;
    text-align: left;
    padding: 0 0 0 20px;


    @media (max-width: 480px) {
        margin-top: 10px;
        // text-align: left;
        max-width: 400px;
    }
`

export const Heading = styled.h1`
    // color: white;
    color: #f7f8fa;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    margin: 0 0 30px -20px;
    text-align: left;
    padding: 0 0 0 30px;

    @media (max-width: 480px) {
        font-size: 27px;
        max-width: 80vw;
        text-align: left;
        margin: 0px;
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
    max-width: 700px;
    margin: 0 0 15px 20px;
    font-size: 20px;
    line-height: 1.1;
    color: ${({ darkText }) => (darkText ? '#010606' : '#f0f0f0')};

    @media (max-width: 480px) {
        max-width: 325px;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: left;
    margin: 30px 0 0 20px;

    @media (max-width: 480px) {
        max-width: 325px;
        margin: 30px 0 20px 20px;
    }
`

export const Img = styled.img`
    margin: 0;
    overflow: hidden;
    padding: 15px 15px 0 15px;
    border-radius: 20px;
    max-height: 200px;
    max-width: 400px;
    justify-self: center;

    @media (max-width: 768px) {
        margin: 0 0 0 0;
        // padding: 0 15px;
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
