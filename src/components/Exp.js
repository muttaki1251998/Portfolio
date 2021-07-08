import React from 'react';
import './stylesheet/exp.css'
import './stylesheet/boxHover.css';

const Exp = () => {

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className="display-8" style={{ fontFamily: 'Roboto', color: 'rgb(47, 63, 99)' }}>Where I've worked</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card bg-transparent" id="boxHover">
            <div class="card-body">
              <h5 class="card-title">GryphHacks</h5>
              <p class="card-text">
                <p>Web developer</p>
                <p>I am making the official GryphHacks website along with other developers selected by the School of computer Science. I'm part of the front-end team working with React and Bootstrap</p>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-transparent" id="boxHover">
            <div class="card-body">
              <h5 class="card-title">University of Guelph</h5>
              <p class="card-text">
                <p>Residence Desk Clerk</p>
                <p>I worked alongside RLS and Desk services to ensure the safety of the university residence. A vital part of my job was to assist the students of the residences on Student Housing Services Guest Policy.</p>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-transparent" id="boxHover">
            <div class="card-body">
              <h5 class="card-title">Camelyon Group</h5>
              <p class="card-text">
                <p>Dispatcher</p>
                <p>Worked directly with Canadian Tire dispatch department as they were our main client. Maintaining a healthy relationship with drivers and trucking companies.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;