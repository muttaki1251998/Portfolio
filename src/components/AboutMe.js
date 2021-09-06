import React from 'react';
import Logo from './Logo';
import './stylesheet/about.css';

const AboutMe = () => {

  return (
    <div className="row">
      <div className="col" style={{ marginTop: '100px' }}>
        <h1 className="display-8 header">About Me</h1>
        <div style={{color: 'rgb(143, 156, 187)', fontSize: '20px'}}>
        <p>Hello! I’m a Computer Science undergrad who loves creating web applications. 
        My passion for web development started back when I was just a fresh graduate out of high school. 
        I would always fiddle around with HTML and CSS. Now, four years later, I am a Full stack developer working with mainly React and Node with SQL.
        </p>
        <p>Here are some technologies that I have been working with for over a year:</p>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item bg-transparent" style={{color: 'rgb(143, 156, 187)'}}>React / Redux / React-Hooks</li>
          <li className="list-group-item bg-transparent" style={{color: 'rgb(143, 156, 187)'}}>HTML / CSS / Javascript</li>
          <li className="list-group-item bg-transparent" style={{color: 'rgb(143, 156, 187)'}}>Angular / Vue</li>
          <li className="list-group-item bg-transparent" style={{color: 'rgb(143, 156, 187)'}}>Node / Express</li>
          <li className="list-group-item bg-transparent" style={{color: 'rgb(143, 156, 187)'}}>NoSQL / SQL / GraphQL / PostgreSQL</li>
          <li className="list-group-item bg-transparent" style={{color: 'rgb(143, 156, 187)'}}>Webpack / Babel</li>
        </ul>
      </div>
      <div className="col" style={{marginTop: '150px'}}>
        <Logo />
      </div>
    </div>
  );
}

export default AboutMe;