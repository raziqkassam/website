import React, {useState} from 'react'

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import OnePage from './pages/OnePage';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import HeroSection from './components/HeroSection';
// import HomePage from './pages/Home';
// import Skills from './components/SkillsCards';



function App() {
  const [isOpen, setIsOpen] = useState( false );

    const toggle = () => {
        setIsOpen( !isOpen );
    }

  return (
    <Router>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/skills" exact component={Skills} />
        
      </Switch> */}
      <OnePage />
    </Router>
  );
}

export default App;
