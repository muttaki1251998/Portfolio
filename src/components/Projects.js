import React from 'react';
import './stylesheet/boxHover.css';

const Projects = () => {

  return (
    <div className="row" style={{ marginTop: '100px' }}>
      <h1 className="display-8" style={{fontFamily: 'Roboto', color:'rgb(47, 63, 99)', fontWeight:'lighter'}}> Some Projects I've built</h1>
      <div className="col">
        <div className="card bg-transparent" id="boxHover" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Feedbacker</h5>
            <p className="card-text">Feedback collection app where a user can log in with Google and by using a payment method, he can buy credits to create and send surveys to people</p>
            <a style={{textDecoration:'none'}} href="https://stark-headland-72911.herokuapp.com/"><button className="button">Take a look</button></a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card bg-transparent" id="boxHover" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Video Streamer</h5>
            <p className="card-text">This a web application made with React-redux. I used RESTful conventions to create, edit and delete streams. User needs to login with Google Auth. </p>
            <a style={{textDecoration:'none'}} href="https://github.com/muttaki1251998/StreamyApp"><button className="button">Take a look</button></a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card bg-transparent" id="boxHover" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">File Decryptor</h5>
            <p className="card-text">The program reads in a given binary file, decrypts the data right after reading a certain amount of bytes,writes the ecrypted strings to a file or standard output.</p>
            <a style={{textDecoration:'none'}} href="https://github.com/muttaki1251998/File_Decryptor"><button className="button">Take a look</button></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;