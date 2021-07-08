import React from 'react';
import './stylesheet/intro.css';
import { Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Exp from './Exp';
import Footer from './Footer';

const Intro = () => {

  const headerStyle = {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: '100px',
    color: 'rgb(26, 35, 55)'
  }
  const contentHeader = {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: '60px',
    color: 'rgb(47, 63, 99)'
  }


  return (
    <div className="box">
      <span>Hi, my name is</span>
      <h2 style={headerStyle}>Muhammad Muttaki</h2>
      <h2 style={contentHeader}>I make web applications</h2>
      <p>I am a Front-end developer studying at
        University of Guelph. I develop user friendly
        and responsive web apps with React.<br />
        I am currently working as a developer for the School of Computer Science of my University.</p>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'rgb(47, 63, 99)' }}><button className="button" type="button">Get in touch</button></Link>
      <AboutMe />
      <Projects />
      <Exp />
      <Footer />
    </div>
  );
}

export default Intro;