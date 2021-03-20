import React from 'react'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BulletPoints,
    ImgWrap,
    Img,
    Title
} from '../InfoSection/InfoElements'


const InfoSection = ( {
    lightBg, 
    id, 
    imgStart, 
    topline, 
    lightText, 
    headline, 
    darkText, 
    description,
    description1, 
    description2, 
    description3,
    description4,
    title,
    align_left,
    img, 
    alt,
    // button_true
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                {/* <Title align_left={align_left} >{title}</Title>
                                <TopLine align_left={align_left} >{topline}</TopLine> */}
                                <Heading lightText={lightText} >{headline}</Heading>
                                <Subtitle darkText={darkText} >{description}</Subtitle>
                                <BulletPoints darkText={darkText} >{description1}</BulletPoints>
                                <BulletPoints darkText={darkText} >{description2}</BulletPoints>
                                <BulletPoints darkText={darkText} >{description3}</BulletPoints>
                                <BulletPoints darkText={darkText} >{description4}</BulletPoints>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Title align_left={align_left} >{title}</Title>
                            <TopLine align_left={align_left} >{topline}</TopLine>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
