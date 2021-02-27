import React, {useState} from 'react'

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import { aboutMe, experience_BCI, experience_XSENSOR, experience_GE, experience_Lumiere, experience_UWSquash, project_Joymouse, experience_BioTEC, project_WebDev } from '../components/InfoSection/Data';

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';
import SkillsCards from '../components/SkillsCards';
import Header from '../components/Headers';
import { Header_AboutMe, Header_Experience, Header_Projects, Header_Skills, Header_Contact } from '../components/Headers/HeaderData';
import About from '../components/About';

const Home = () => {

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
            {/* <InfoSection {...aboutMe}/> */}
            <Header {...Header_Skills}/>
            <SkillsCards />
            <Header {...Header_Experience}/>
            {/* <InfoSection2 {...experience_XSENSOR}/> */}
            <InfoSection {...experience_BCI}/>
            <InfoSection {...experience_BioTEC}/>
            <InfoSection2 {...experience_UWSquash}/>
            <InfoSection2 {...experience_Lumiere}/>
            <InfoSection2 {...experience_GE}/>
            <Header {...Header_Projects}/>
            <InfoSection {...project_Joymouse}/>
            {/* <InfoSection2 {...project_WebDev}/> */}
            <Hobbies />
            <Header {...Header_Contact}/>
            <Footer />
        </>
    )
}

export default Home
