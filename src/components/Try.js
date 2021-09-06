import React from 'react';
import './stylesheet/intro.css';
import { Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Exp from './Exp';
import Footer from './Footer';

import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Shake from 'react-reveal/Shake';


const Try = () => {
  return (
    <div className="container" style={{ marginTop: '16rem' }}>
      <Fade left>
        <div>
          <h2 className="test" >Muhammad Muttaki</h2>
          <h2 className="test2">Full-Stack Developer</h2>
          <Link
            to="/contact"
          >
            <button className="butts" type="button">Get in touch</button></Link>
        </div>
      </Fade>
      <Fade right>
        <div>
          <AboutMe />
        </div>
      </Fade>
      <Slide bottom>
        <Projects />
      </Slide>
      <Slide bottom>
        <Exp />
      </Slide>
      <Bounce>
        <Footer bottom />
      </Bounce>
    </div>
  );
}

export default Try;
