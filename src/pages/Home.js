import React, {useState} from 'react'

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoWebSection from '../components/InfoWebSection';
import { aboutMe, experience_BCI, experience_XSENSOR, experience_GE, experience_Lumiere, experience_UWSquash, project_Joymouse, experience_BioTEC, project_WebDev } from '../components/InfoSection/Data';

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hobbies from '../components/Hobbies';
import Footer from '../components/Contact';
import SkillsCards from '../components/SkillsCards';
import Header from '../components/Headers';
import { Header_AboutMe, Header_Experience, Header_Projects, Header_Skills, Header_Contact } from '../components/Headers/HeaderData';
import About from '../components/About';

const HomePage = () => {

    return (
        <>
            <HeroSection />

            <Header {...Header_AboutMe}/>
            <About/>
        </>
    )
}

export default HomePage
