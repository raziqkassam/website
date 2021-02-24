import React from 'react'
import {
    SkillsContainer,
    SkillsWrapper,
    SkillsCard,
    SkillsIcon,
    SkillsH2,
    SkillsP,
    // SkillsPBold,
    TopLine,
    Title
} from './SkillsCardsElements'

const Hobbies = () => {
    return (
        <SkillsContainer id="skills">

            <Title>skills</Title>
            <TopLine>“Education is an ornament in prosperity and a refuge in adversity” — Aristotle</TopLine>

            <SkillsWrapper>
                
                <SkillsCard>
                    <SkillsIcon src="./../images/img-s1.svg" alt='na' />
                    <SkillsH2>Programming</SkillsH2>
                    <SkillsP>C++, C#, Python</SkillsP>
                    <SkillsP>Node.js, Arduino</SkillsP>
                </SkillsCard>

                <SkillsCard>
                    <SkillsIcon src="./../images/img-s2.svg" alt='na' />
                    <SkillsH2>Web Development</SkillsH2>
                    <SkillsP>React.js, HTML</SkillsP>
                    <SkillsP>CSS, Wix</SkillsP>
                </SkillsCard>

                <SkillsCard>
                    <SkillsIcon src="./../images/img-s3.svg" alt='na' />
                    <SkillsH2>3D Modelling</SkillsH2>
                    <SkillsP>SolidWorks</SkillsP>
                    <SkillsP>3D Printing, MATLAB</SkillsP>
                </SkillsCard>

                <SkillsCard>
                    <SkillsIcon src="./../images/img-s4.svg" alt='na' />
                    <SkillsH2>graphic design</SkillsH2>
                    <SkillsP>SketchBook, Adobe Photoshop</SkillsP>
                    <SkillsP>Final Cut Pro, Canva, Figma</SkillsP>
                </SkillsCard>

            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Hobbies
