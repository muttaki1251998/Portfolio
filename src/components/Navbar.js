import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {

    const navbarFonts = {
      fontFamily: 'Quicksand',
      fontWeight: 'bold',
      fontSize: '15px'
    }

    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-transparent sticky-top">
        <div class="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={navbarFonts} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" style={{color:'#f7e8e6'}} href="#">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:'#f7e8e6', marginLeft: '30px'}} href="https://drive.google.com/file/d/1hplxBDssP5EbbgAUdNCpTe5Od8-rtpb2/view?usp=sharing">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;