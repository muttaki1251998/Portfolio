import React from 'react';
import './stylesheet/about.css';
import Dp from './dp.jpeg';

const AboutMe = () => {

  return (
    <div>
      <div className="row">
        <div className="col" style={{ marginTop: '100px' }}>
          <h1 className="display-8" style={{fontFamily: 'Roboto', color:'rgb(47, 63, 99)'}}>About Me</h1>
          Hi! My name is Muhammad Muttaki and I love creating web applications. My
          interest in web development started back in 2017 when I had just graduated
          highschool. I would always fiddle around with HTML and CSS.
          <p>Fast forward to today, Now I am a front-end developer working
            with React.
          </p>
          <p>Here are some technologies that I have been working with for over a year:</p>
          <ul className="list-group list-group-flush ">
            <li class="list-group-item bg-transparent">React</li>
            <li class="list-group-item bg-transparent">HTML</li>
            <li class="list-group-item bg-transparent">CSS</li>
            <li class="list-group-item bg-transparent">Express</li>
            <li class="list-group-item bg-transparent">MongoDB</li>
            <li class="list-group-item bg-transparent">JavaScript</li>
            <li class="list-group-item bg-transparent">Jquery</li>
          </ul>
        </div>
        <div className="col" style={{ marginTop: '160px'}}>
        <img src={Dp} class="img-fluid" id="pic" alt="..." style={{ border: "6px solid rgb(47, 63, 99)", borderRadius:"6px"}}/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe