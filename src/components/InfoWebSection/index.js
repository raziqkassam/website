import React from 'react'
import { ButtonWeb } from '../ButtonElements'

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
} from './InfoWebSectionElements'


const InfoWebSection = ( {
    lightBg,
    darkText
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg}>
                <InfoWrapper>
                    {/* <Title>Website Developor Experience</Title> */}
                    <Heading>Freelance Website Developer</Heading>

                        <InfoRow>
                            <Column1>
                                <TextWrapper>
                                    <Title>Apr - June 2021</Title>
                                    <TopLine>Technology4Seniors</TopLine>
                                    <BulletPoints darkText={darkText}>Created an informative website for a non-profit that helps seniors stay connected through virtual assistant technology.</BulletPoints>
                                    <BtnWrap>
                                        <ButtonWeb href="https://www.technology4seniors.ca" target="_blank" rel="noreferrer noopener">
                                            Technology4Seniors
                                        </ButtonWeb>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column3>
                                <Img src="./../images/web-tech4.png" alt="Technology4Seniors" />
                            </Column3>
                        </InfoRow>

                        <InfoRow>
                            <Column1>
                                <TextWrapper>
                                    <Title>Mar 2021 - Present</Title>
                                    <TopLine>Ismaili Youth Soccer Academy</TopLine>
                                    <BulletPoints darkText={darkText}>Created a user-friendly website for an international academy that promotes the development of life-long skills through sport.</BulletPoints>
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
                                    <Title>Jan - Feb 2021</Title>
                                    <TopLine>Ladhani Consulting</TopLine>
                                    <BulletPoints darkText={darkText} >Created a multi-page website for a consulting firm garnering over 200 monthly visitors.</BulletPoints>

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

                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoWebSection
