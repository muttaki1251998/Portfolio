import React from 'react';
import Intro from './components/Intro';
import './app.css'


class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div>
            <Intro />
          </div>
        </div>
      </div>
    );
  }
}

export default App;