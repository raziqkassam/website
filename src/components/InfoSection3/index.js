import React from 'react'
import { Button } from '../ButtonElements'
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
    BtnWrap,
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
    buttonLink,
    buttonLink2,
    buttonLabel,
    buttonLabel2, 
    title,
    align_left,
    img, 
    alt
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
                                <BtnWrap>
                                    <Button href={buttonLink} target="_blank" rel="noreferrer noopener" >
                                        {buttonLabel}
                                    </Button>
                                    <Button href={buttonLink2} target="_blank" rel="noreferrer noopener" >
                                        {buttonLabel2}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Title align_left={align_left} >{title}</Title>
                            <TopLine align_left={align_left} >{topline}</TopLine>
                            <ImgWrap>
                                <Img src={img} alt={alt} autoPlay muted />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
