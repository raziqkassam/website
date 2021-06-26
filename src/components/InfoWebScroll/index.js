import React from 'react'
import { ButtonWeb } from '../ButtonElements'
import Carousel from 'styled-components-carousel';
import Slider from 'react-styled-carousel';

import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    Column3,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BulletPoints,
    BtnWrap,
    ImgWrap,
    Img,
    Title
} from '../InfoWebSection/InfoWebSectionElements'


const InfoWebScrollSection = ( {
    lightBg,
    darkText
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg}>
                <InfoWrapper>
                    {/* <Title>Website Developor Experience</Title> */}
                    <Heading>Freelance Website Developer</Heading>

                    <Carousel 
                        center={true}
                        showArrows
                        showIndicator={true}
                        swipeable
                        infinite
                        slidesToShow={1}
                        centerPadding={-300}
                        scaleOnFocus={1}
                    >
                        <InfoRow>
                            <Column1>
                                <TextWrapper>
                                    <Title>March 2021 - Present</Title>
                                    <TopLine>Ismaili Youth Soccer Academy</TopLine>
                                    <BulletPoints darkText={darkText}>Created a user-friendly website for an international youth soccer academy that promotes the development of life-long skills through sport.</BulletPoints>
                                    <BtnWrap>
                                        <ButtonWeb >
                                            Coming Soon ...
                                        </ButtonWeb>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column3>
                                <Img src="./../images/web-iysa.png" alt="IYSA" />
                            </Column3>
                        </InfoRow>


                        <InfoRow>
                            <Column1>
                                <TextWrapper>
                                    <Title>February 2021</Title>
                                    <TopLine>Ladhani Consulting</TopLine>
                                    <BulletPoints darkText={darkText} >Created a multi-page website for a digital marketing consulting firm, that aligned with its professional brand.</BulletPoints>

                                    <BtnWrap>
                                        <ButtonWeb href="https://www.ladhaniconsulting.ca" target="_blank" rel="noreferrer noopener" >
                                            Ladhani Consulting
                                        </ButtonWeb>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column3>
                                {/* <Title>February 2021 - Present</Title> */}
                                <Img src="./../images/web-ladhani.png" alt="Ladhani Consulting" />
                            </Column3>
                        </InfoRow>

                    </Carousel>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoWebScrollSection
