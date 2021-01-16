import React, {useState} from 'react';
import {ButtonScroll} from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroBtnWrapper,
    ArrowDownward,
    ArrowDown,
    HeroP
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
                    <ImageBg src="../../images/video-img.jpg" alt='bg' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>RAZIQ KASSAM</HeroH1>
                    {/* <HeroP>Biomedical Engineering Student</HeroP> */}
                    <HeroBtnWrapper>
                        <ButtonScroll to="contact" onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary='false' dark='true' fontBig='false' big='false' 
                        smooth={true}
                        duration={1000}
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
