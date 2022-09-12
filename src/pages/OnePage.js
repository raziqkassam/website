import React, {useState} from 'react'

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/InfoSection3';
import InfoWebSection from '../components/InfoWebSection';
import { aboutMe, experience_BCI, experience_XSENSOR, experience_GE, experience_Lumiere, experience_UWSquash, project_Joymouse, experience_BioTEC, project_WebDev, experience_Ford, project_Gaitmate, experience_Molli } from '../components/InfoSection/Data';

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hobbies from '../components/Hobbies';
import Footer from '../components/Contact';
import SkillsCards from '../components/SkillsCards';
import Header from '../components/Headers';
import { Header_AboutMe, Header_Experience, Header_Projects, Header_Skills, Header_Contact, Header_Work, Header_Leadership } from '../components/Headers/HeaderData';
import About from '../components/About';
import InfoWebScrollSection from '../components/InfoWebScroll';

const OnePage = () => {

    const [isOpen, setIsOpen] = useState( false );

    const toggle = () => {
        setIsOpen( !isOpen );
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <HeroSection />


            <Header {...Header_AboutMe}/>
            <About/>

            <Header {...Header_Skills}/>
            <SkillsCards />

            <Header {...Header_Work}/>
            <InfoSection2 {...experience_Molli}/>
            <InfoSection2 {...experience_Ford}/>
            <InfoSection2 {...experience_XSENSOR}/>
            <InfoSection3 {...experience_BCI}/>
            <InfoWebSection {...project_WebDev}/>
            {/* <InfoWebScrollSection /> */}
            
            <Header {...Header_Leadership}/>
            <InfoSection {...experience_BioTEC}/>
            <InfoSection2 {...experience_UWSquash}/>
            <InfoSection2 {...experience_GE}/>

            <Header {...Header_Projects}/>
            <InfoSection2 {...project_Gaitmate}/>
            <InfoSection {...project_Joymouse}/>
            {/* <InfoSection2 {...experience_Lumiere}/> */}
            
            <Hobbies />

            <Header {...Header_Contact}/>
            <Footer />
        </>
    )
}

export default OnePage
