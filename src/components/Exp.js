import React from 'react';
import './stylesheet/exp.css'
import './stylesheet/boxHover.css';

const Exp = () => {

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="display-8" style={{ fontFamily: 'Roboto', color: 'rgb(92, 117, 173)' }}>Where I've worked</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
          <div class="card bg-transparent" id="boxHover">
            <div class="card-body">
              <h5 class="card-title" style={{ color: 'rgb(183, 205, 255)' }}>Ride Cycle</h5>
              <p class="card-text">
                <p style={{ color: 'grey' }}>Full Stack Developer (Intern) <i>2021 - Present</i></p>
                <p style={{ color: 'rgb(92, 117, 173)' }}>Working on making the back-end server with Node for a new booking system. Developing the front-end framework with React, react-redux and react-hooks and using MySQL for database management.</p>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-transparent" id="boxHover">
            <div class="card-body">
              <h5 class="card-title" style={{ color: 'rgb(183, 205, 255)' }}>University of Guelph</h5>
              <p class="card-text">
                <p style={{ color: 'grey' }}>Residence Desk Clerk, <i>2020-2021</i></p>
                <p style={{ color: 'rgb(92, 117, 173)' }}>
                  Worked alongside RLS and Desk services to ensure the safety of the university residents. A vital part of my job was to assist the students of the residences in Student Housing Services Guest Policy and maintaining the residence database sytem. </p>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-transparent" id="boxHover">
            <div class="card-body">
              <h5 class="card-title" style={{ color: 'rgb(183, 205, 255)' }}>Camelyon Group</h5>
              <p class="card-text">
                <p style={{ color: 'grey' }}>Dispatcher, <i>2019-2020</i></p>
                <p style={{ color: 'rgb(92, 117, 173)' }}>Worked directly with Canadian Tire Dispatch department. Maintained a healthy relationship with drivers and trucking companies. On absence of the managere, I led the dispatch team.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;