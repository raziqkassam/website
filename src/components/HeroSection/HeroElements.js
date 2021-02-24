import styled from 'styled-components'
import {MdArrowDownward, MdKeyboardArrowDown} from 'react-icons/md';

export const HeroContainer = styled.div`
    // background: #0c0c0c;
    display: flex;
    justify-content: center;
    // align-items: center;
    padding: 0 30px;
    height: 800px; // 100vh
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%; // 100vh
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`

export const ImageBg = styled.img`

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        background: #232a34;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #f9f9f9;
    font-size: 130px;
    text-align: center;
    justify-self: center;
    line-height: 1;

    margin-top: 260px;
    margin-bottom: 40px;

    @media only screen and (max-width: 768px) {
        font-size: 70px;
        margin-top: 220px;
    }
`

export const HeroP = styled.p`
    color: gold;
    // margin-top: 34px;
    // margin-bottom: 34px;
    line-height: 1.2;
    font-size: 30px;
    text-align: center;
    align-items: center;
    max-width: 500px;
    // font-weight: bold;

    @media only screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 480px) {
        max-width: 200px;
        font-size: 22px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowDownward = styled(MdArrowDownward)`
    margin-top: 3px;
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowDown = styled(MdKeyboardArrowDown)`
    margin-top: 3px;    
    margin-left: 8px;
    font-size: 20px;
`
