
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="input-group">
        <h4>Hello, SkyTrack+ Members</h4>
          <input type="text" id="fname" name="fname" placeholder="First name" />
          <input type="text" id="lname" name="lname" placeholder="Last name" />
          <input type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
        
        <img src="https://th.bing.com/th/id/OIP.O7WWXDar8cxnFwEWCbMXkAHaCv?pid=ImgDet&rs=1" alt="Descriptive Alt Text" />
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));