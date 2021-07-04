import logo from './logo.svg';
import './App.css';
import React from 'react';
let users = [{
  name: "Sanaullah",
  age: 24,
},
{
  name: "Raheem bux",
  age: 26,
}
]
function App() {
  return  <React.Fragment>
    <div>hello man </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>
        {users.map(rec=><li>{rec.name}</li>)}
        </ol>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </React.Fragment>

}

export default App;
