import React from 'react'
// import { Button } from '../ButtonElements'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    ImgWrap,
    Img
} from './SkillsElements'


const SkillsSection = ( {
    lightBg,
    id, 
    imgStart, 
    topline,
    img1, 
    img2,
    alt1,
    alt2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topline}</TopLine>
                                <ImgWrap>
                                    <Img src={img1} alt={alt1} />
                                </ImgWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img2} alt={alt2} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SkillsSection
