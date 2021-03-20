import React, {useState, useEffect} from 'react'

import {
    HobbiesHoverImageContainer,
    HobbiesContainer,
    HobbiesWrapper,
    HobbiesCard,
    HobbiesCardHover,
    HobbiesIcon,
    HobbiesPointer,
    HobbiesPointerTitle,
    HobbiesH2,
    HobbiesP,
    TopLine,
    Title,
    Title2,
    Subtitle,
    HobbiesSubtitleContainer,
    LineContainer,
    Line
} from './HobbieElements'


const Hobbies = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover( !hover )
    }
    const [hover2, setHover2] = useState(false)
    const onHover2 = () => {
        setHover2( !hover2 )
    }
    const [hover3, setHover3] = useState(false)
    const onHover3 = () => {
        setHover3( !hover3 )
    }
    const [hover4, setHover4] = useState(false)
    const onHover4 = () => {
        setHover4( !hover4 )
    }
   

    return (
        <HobbiesContainer id='projects'>
            <Title>2015 - Present</Title>
            <Title2>Visual Art Projects</Title2>
            <HobbiesSubtitleContainer>
                <HobbiesPointerTitle><i class="far fa-hand-pointer"/></HobbiesPointerTitle>
                <Subtitle>click to see original</Subtitle>
            </HobbiesSubtitleContainer>

            <TopLine>Acrylic Canvas Painting</TopLine>
            <LineContainer>
                <Line />
            </LineContainer>
            
            <HobbiesWrapper>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-paint1.jpg" alt='na' />
                    <HobbiesH2>" BLOOM "</HobbiesH2>
                    <HobbiesP>November 2016</HobbiesP>
                </HobbiesCard>
                <HobbiesCardHover onClick={onHover3}>
                        {hover3 ? <HobbiesIcon alt='na'  src="./../images/img-paint2-real.jpg"/ > : 
                             <HobbiesIcon alt='nan' src="./../images/img-paint2.jpg"/> }
                    <HobbiesHoverImageContainer>
                        <HobbiesPointer><i class="far fa-hand-pointer"/></HobbiesPointer>
                        <HobbiesH2>" BLOSSOM "</HobbiesH2>
                    </HobbiesHoverImageContainer>
                    <HobbiesP>July 2020</HobbiesP>
                </HobbiesCardHover>
                <HobbiesCardHover onClick={onHover4}>
                        {hover4 ? <HobbiesIcon alt='na'  src="./../images/img-paint3-real.jpg"/ > : 
                            <HobbiesIcon src="./../images/img-paint3.jpg" alt='na'/> }
                    <HobbiesHoverImageContainer>
                        <HobbiesPointer><i class="far fa-hand-pointer"/></HobbiesPointer>
                        <HobbiesH2>" MOO "</HobbiesH2>
                    </HobbiesHoverImageContainer>
                    <HobbiesP>May 2017</HobbiesP>
                </HobbiesCardHover>
                <HobbiesCardHover onClick={onHover} >
                    {hover ? <HobbiesIcon alt='na'  src="./../images/img-paint4-real.jpg"/ > : 
                             <HobbiesIcon alt='nan' src="./../images/img-paint4.jpg"/> }
                    <HobbiesHoverImageContainer>
                        <HobbiesPointer><i class="far fa-hand-pointer"/></HobbiesPointer>
                        <HobbiesH2>" PONTE DE PIEDAD "</HobbiesH2>
                    </HobbiesHoverImageContainer>
                    <HobbiesP>March 2020</HobbiesP>
                </HobbiesCardHover>
            </HobbiesWrapper>

            <TopLine>3D Modelling And Graphic Design</TopLine>
            <LineContainer>
                <Line />
            </LineContainer>

            <HobbiesWrapper>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-3d1.jpg" alt='na' />
                    <HobbiesH2>Golf Cart</HobbiesH2>
                    <HobbiesP>SolidWorks | 2019</HobbiesP>
                </HobbiesCard>
                <HobbiesCardHover onClick={onHover2} >
                    {hover2 ? <HobbiesIcon alt='na'  src="./../images/img-3d3-real.jpg"/ > : 
                             <HobbiesIcon alt='nan' src="./../images/img-3d3.jpg"/> }    
                             <HobbiesHoverImageContainer>
                    <HobbiesPointer><i class="far fa-hand-pointer"/></HobbiesPointer>
                        <HobbiesH2>Belem Tower, Lisbon</HobbiesH2>
                    </HobbiesHoverImageContainer>
                    <HobbiesP>SolidWorks | 2020</HobbiesP>
                </HobbiesCardHover>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-gd1.png" alt='na' />
                    <HobbiesH2>Canadian Junior Championship</HobbiesH2>
                    <HobbiesP>Designed for National Tournament | 2015</HobbiesP>
                </HobbiesCard>
                <HobbiesCard>
                    <HobbiesIcon src="./../images/img-wlisa4.jpg" alt='nas' />
                    <HobbiesH2>Ismaili Student Association</HobbiesH2>
                    <HobbiesP>Designed for Waterloo-Laurier | 2019, 2021</HobbiesP>
                </HobbiesCard>
            </HobbiesWrapper>
        </HobbiesContainer>
    )
}

export default Hobbies
