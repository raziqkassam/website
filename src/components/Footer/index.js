import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterImageWrapper,
    FooterImage,
    FooterH1,
    FooterP,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLineContainer,
    Line,
    FooterP2
} from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer id='contact'>

                <FooterWrap>
                    <FooterH1>Feel free to connect!</FooterH1>
                    <FooterP href="mailto:raziq.kassam@gmail.com" >raziq.kassam@gmail.com</FooterP>
                    <FooterP href="mailto:r9kassam@uwaterloo.ca">r9kassam@uwaterloo.ca</FooterP>
                </FooterWrap>

                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                                <FooterLinksItems href='https://linkedin.com/in/raziqkassam' target="_blank" rel="noreferrer noopener">
                                    <i class='fab fa-linkedin' />LINKEDIN 
                                </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinksItems href='https://github.com/raziqkassam' target="_blank" rel="noreferrer noopener">
                                <i class='fab fa-github' />GITHUB 
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    {/* <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinksItems href='https://github.com/raziqkassam' target="_blank" rel="noreferrer noopener">
                                <i class="fas fa-file-signature"/>RESUMÉ 
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer> */}

                    <FooterImageWrapper to='home' smooth={true}
                                            duration={2400}
                                            spy={true}
                                            exact="true"
                                            offset={-80} >
                        <FooterImage src="./../images/img-icon.png" />
                    </FooterImageWrapper>
                    
            </FooterContainer>

            <FooterLineContainer>
                <Line />
                <FooterP2>Raziq Kassam © 2021</FooterP2>
            </FooterLineContainer>
        </>
    )
}

export default Footer
