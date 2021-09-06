import React from 'react';
import { Link } from 'react-router-dom';
import { CgHello } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return(
    <div style={{marginTop: '100px', textAlign:'center', paddingBottom:"100px"}}>
      <h1 className="display-8" style={{ fontFamily: 'Roboto', color: 'rgb(92, 117, 173)' }}>Interested?</h1>
      
      <Link to="/contact" style={{ textDecoration: 'none', color: 'rgb(47, 63, 99)' }}><button className="butts" type="button">Say hello <CgHello/></button></Link>
      <div style={{marginTop: '20px'}}>
        <a style={{textDecoration:'none', color: 'white', margin:'10px', fontSize:'43px'}} href="https://github.com/muttaki1251998"><AiFillGithub /></a>
        <a style={{textDecoration:'none', color: 'white', margin:'10px', fontSize:'40px'}} href="https://www.linkedin.com/in/muhammad-muttaki-0b5a94141/"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Footer;