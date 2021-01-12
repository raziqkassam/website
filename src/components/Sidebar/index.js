import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        // offset={-80} 
                                        >About</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle} 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        // offset={-80} 
                                        >Skills</SidebarLink>
                    <SidebarLink to="experience" onClick={toggle} 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        // offset={-80} 
                                        >Experience</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        // offset={-80} 
                                        >Projects</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="contact" onClick={toggle}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        // offset={-80} 
                                        >Contact</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
