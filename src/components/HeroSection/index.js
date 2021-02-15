import React, {useState} from 'react';
import {ButtonScroll} from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroBtnWrapper,
    ArrowDownward,
    ArrowDown,
    HeroP,
    ImageBg
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover( !hover )
    }


    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src="../../videos/video-bg2.mp4" type='video/mp4' />
                    <ImageBg src="../../images/video-img.jpg" />
                </HeroBg>
                <HeroContent>
                    <HeroH1>RAZIQ KASSAM</HeroH1>
                    <HeroP><b>Biomedical Engineering</b></HeroP>
                    <HeroP>University of Waterloo</HeroP>
                    <HeroP>Class of 2024</HeroP>
                    {/* <HeroP>University of Waterloo, Class of 2024</HeroP> */}
                    <HeroBtnWrapper>
                        <ButtonScroll to="contact" onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary='false' dark='true' fontBig='false' big='false' 
                        smooth={true}
                        duration={2500}
                        spy={true}
                        exact="true"
                        offset={-80}>
                            Contact {hover ? <ArrowDownward /> : <ArrowDown />}
                        </ButtonScroll>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
