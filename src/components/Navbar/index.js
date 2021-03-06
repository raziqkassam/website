import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavImage,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ( {toggle} ) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home'
                                        smooth={true}
                                        duration={2000}
                                        spy={true}
                                        exact="true"
                                        // offset={-80} 
                                        >
                        <NavImage src="./../images/img-hdr.jpg"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >
                                            About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills"
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >
                                            Skills</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="experience"
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >
                                            Experience</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to="work"
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >
                                            Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="leadership"
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >
                                            Leadership</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                                        smooth={true}
                                        duration={1500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >
                                            Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact"
                                        smooth={true}
                                        duration={1700}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        >
                                            Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
