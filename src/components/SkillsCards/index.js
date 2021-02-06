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
                    {/* <SkillsPBold>C++, C#</SkillsPBold> */}
                    <SkillsP>C++, C#, Python</SkillsP>
                    <SkillsP>Node.js, Arduino</SkillsP>
                </SkillsCard>

                <SkillsCard>
                    <SkillsIcon src="./../images/img-s2.svg" alt='na' />
                    <SkillsH2>Web Development</SkillsH2>
                    {/* <SkillsPBold>React.js</SkillsPBold> */}
                    <SkillsP>React.js</SkillsP>
                    <SkillsP>HTML, CSS</SkillsP>
                </SkillsCard>

                <SkillsCard>
                    <SkillsIcon src="./../images/img-s3.svg" alt='na' />
                    <SkillsH2>3D Modelling</SkillsH2>
                    {/* <SkillsPBold>SolidWorks</SkillsPBold> */}
                    <SkillsP>SolidWorks</SkillsP>
                    <SkillsP>3D Printing, MATLAB</SkillsP>
                </SkillsCard>

                <SkillsCard>
                    <SkillsIcon src="./../images/img-s4.svg" alt='na' />
                    <SkillsH2>graphic design</SkillsH2>
                    {/* <SkillsPBold>SketchBook</SkillsPBold> */}
                    <SkillsP>SketchBook, Final Cut Pro</SkillsP>
                    <SkillsP>Adobe Photoshop, Canva</SkillsP>
                </SkillsCard>

            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Hobbies
