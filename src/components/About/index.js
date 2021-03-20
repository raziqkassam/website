import React from 'react'
import {
    AboutContainer,
    AboutTitleContainer,
    AboutTitle,
    AboutBannerContainer,
    AboutBanner,
    AboutTextContainer,
    AboutColumn1Container,
    AboutColumn2Container,
    AboutTopline,
    AboutSubtitle,
    AboutHeader,
    AboutImageTextContainer,
    AboutImage,
    AboutImageContainer,
    AboutText,
    AboutMajorContainer,
    AboutLinksContainer,
    AboutLinks,
    AboutWrapper,
    AboutTextWrapper
} from './AboutElements'

const About = () => {
    return (
        <>
            <AboutContainer>
                
                    <AboutTitleContainer>
                        {/* <AboutTitle></AboutTitle> */}
                        {/* <AboutTitle>Hi, my name is Raziq</AboutTitle> */}
                    </AboutTitleContainer>
                    <AboutBannerContainer>
                        {/* <AboutBanner src="../images/img-about-banner.png"/> */}
                    </AboutBannerContainer>

                    <AboutWrapper>
                        <AboutTextContainer>
                            <AboutTextWrapper>
                                <AboutColumn1Container>
                                    <AboutTopline>I choose to embrace life’s opportunities and grow from life’s challenges.</AboutTopline>
                                    <AboutSubtitle>I am passionate about design, biotechnology, and machine learning. 
                                        I want to create a better tomorrow by working to improve the lives of others, today.</AboutSubtitle>
                                    <AboutSubtitle>I hope to design and develop creative medical solutions that can help enhance the everyday lives of those affected.</AboutSubtitle>
                                    
                                </AboutColumn1Container>

                                <AboutColumn2Container>
                                    <AboutHeader>Education</AboutHeader>
                                    <AboutImageTextContainer>
                                            <AboutImage src="../images/img-waterloo.png" />
                                            <AboutText>I am working towards a BASc in <b>Biomedical Engineering </b>
                                            at the University of Waterloo. I plan to graduate in 2024.</AboutText>
                                    </AboutImageTextContainer>
                                    <AboutHeader>Interests</AboutHeader>
                                    <AboutText>Travelling, Squash, Golf, Table Tennis, Photography, Cinematography, Music, Painting, Website Design.</AboutText>
                                    <AboutHeader>Get in Touch</AboutHeader>
                                    <AboutLinksContainer>
                                        <AboutLinks href='https://linkedin.com/in/raziqkassam' target="_blank" rel="noreferrer noopener">LINKEDIN</AboutLinks>
                                        {/* <AboutLinks href='https://github.com/raziqkassam' target="_blank" rel="noreferrer noopener">Github</AboutLinks> */}
                                        <AboutLinks href="mailto:raziq.kassam@gmail.com">EMAIL</AboutLinks>
                                    </AboutLinksContainer>
                                </AboutColumn2Container>
                            </AboutTextWrapper>
                        </AboutTextContainer>
                    </AboutWrapper>

            </AboutContainer>
        </>
    )
}

export default About
