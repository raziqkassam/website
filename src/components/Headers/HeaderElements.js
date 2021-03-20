import styled from 'styled-components'

export const HeaderContainer = styled.div`
    // padding: 10px 0;
    background-image: url("../images/img-headerbg.jpg");
    background-position: center center;
    background-size: cover;
    //background-image: url("https://motionarray.imgix.net/preview-167570-xLiElPqQTp-high_0014.jpg");
    align-items: center;
    border-top: 1px solid gold; //#52A3FF;

    @media screen and (max-width: 480px) {
        background-image: url("../images/img-headerbg-mobile.jpg");
    }
`

export const HeaderTextWrapper = styled.div`
    padding: 10px 0;
    align-items: center;
`

export const HeaderText = styled.h1`
    color: gold;
    opacity: 96%;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    letter-spacing: 5px;
`
