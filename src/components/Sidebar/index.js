import React from 'react'
import { NavLogo } from '../Navbar/NavbarElements'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    NavImage,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <NavLogo to="home" onClick={toggle} smooth={true}
                                            duration={1500}
                                            spy={true}
                                            exact="true"
                                            offset={-80} >
                <NavImage src="./../images/img-hdr.jpg"/>
            </NavLogo>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80} 
                                        >About</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle} 
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80} 
                                        >Skills</SidebarLink>
                    {/* <SidebarLink to="experience" onClick={toggle} 
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80} 
                                        >Experience</SidebarLink> */}
                    <SidebarLink to="work" onClick={toggle} 
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80} 
                                        >Work</SidebarLink>
                    <SidebarLink to="leadership" onClick={toggle} 
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80} 
                                        >Leadership</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} 
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80} 
                                        >Projects</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="contact" onClick={toggle}
                                        smooth={true}
                                        duration={2000}
                                        spy={true}
                                        exact="true"
                                        offset={-80} 
                                        >Contact</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
