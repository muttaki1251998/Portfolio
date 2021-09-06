import React from 'react';
import './app.css'
import Try from './components/Try';


class App extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div>
            <Try />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
