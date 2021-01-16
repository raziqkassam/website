import React, {useState} from 'react'

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import { aboutMe, experience_BCI, experience_XSENSOR, experience_GE, experience_Lumiere, experience_UWSquash, project_Joymouse } from '../components/InfoSection/Data';

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';
import SkillsCards from '../components/SkillsCards';

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
            <InfoSection {...aboutMe}/>
            <SkillsCards />
            {/* <InfoSection {...experience_XSENSOR}/> */}
            <InfoSection {...experience_BCI}/>
            <InfoSection {...experience_UWSquash}/>
            <InfoSection2 {...experience_Lumiere}/>
            <InfoSection2 {...experience_GE}/>
            <InfoSection {...project_Joymouse}/>
            <Hobbies />
            <Footer />
        </>
    )
}

export default Home
