import React from 'react';
import { Link } from 'react-router-dom';
import { CgHello } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return(
    <div style={{marginTop: '100px', textAlign:'center', paddingBottom:"100px"}}>
      <h1 className="display-8" style={{ fontFamily: 'Roboto', color: 'rgb(47, 63, 99)' }}>Interested?</h1>
      <p>I am actively looking for front-end jobs with React. Get in touch with me if you're interested.</p>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'rgb(47, 63, 99)' }}><button className="button" type="button">Say hello <CgHello/></button></Link>
      <div style={{marginTop: '50px'}}>
        <a style={{textDecoration:'none', color: 'black', margin:'10px', fontSize:'43px'}} href="https://github.com/muttaki1251998"><AiFillGithub /></a>
        <a style={{textDecoration:'none', color: 'black', margin:'10px', fontSize:'40px'}} href="https://www.linkedin.com/in/muhammad-muttaki-0b5a94141/"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Footer;