import React from 'react'
// import Icon1 from './../images/svg-bci.svg'
// import Icon2 from './../images/svg-bci.svg'
// import Icon3 from './../images/svg-bci.svg'
import {
    HobbiesContainer,
    HobbiesWrapper,
    HobbiesCard,
    HobbiesIcon,
    HobbiesH2,
    HobbiesP,
    TopLine,
    Title
} from './HobbieElements'

const Hobbies = () => {
    return (
        <HobbiesContainer id='projects'>
            <Title>Personal Interests</Title>

            <TopLine>Acrylic Canvas Painting</TopLine>
            <HobbiesWrapper>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-paint1.jpg" alt='na' />
                    <HobbiesH2>" BLOOM "</HobbiesH2>
                    <HobbiesP>November 2016</HobbiesP>
                </HobbiesCard>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-paint2.jpg" alt='na' />
                    <HobbiesH2>" BLOSSOM "</HobbiesH2>
                    <HobbiesP>July 2020</HobbiesP>
                </HobbiesCard>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-paint3.jpg" alt='na' />
                    <HobbiesH2>" MOO "</HobbiesH2>
                    <HobbiesP>May 2017</HobbiesP>
                </HobbiesCard>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-paint4.jpg" alt='na' />
                    <HobbiesH2>" PONTE DE PIEDAD "</HobbiesH2>
                    <HobbiesP>March 2020</HobbiesP>
                </HobbiesCard>
            </HobbiesWrapper>

            <TopLine>3D Modelling and Graphic Design</TopLine>
            <HobbiesWrapper>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-3d1.jpg" alt='na' />
                    <HobbiesH2>Golf Cart</HobbiesH2>
                    <HobbiesP>SolidWorks | 2019</HobbiesP>
                </HobbiesCard>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-3d3.jpg" alt='na' />
                    <HobbiesH2>Belem Tower, Lisbon</HobbiesH2>
                    <HobbiesP>SolidWorks | 2020</HobbiesP>
                </HobbiesCard>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-gd1.png" alt='na' />
                    <HobbiesH2>Canadian Junior Championship</HobbiesH2>
                    <HobbiesP>Designed for National Tournament | 2015</HobbiesP>
                </HobbiesCard>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-wlisa.png" alt='na' />
                    <HobbiesH2>Ismaili Student Association</HobbiesH2>
                    <HobbiesP>Designed for Waterloo-Laurier | 2019</HobbiesP>
                </HobbiesCard>
            </HobbiesWrapper>
        </HobbiesContainer>
    )
}

export default Hobbies
