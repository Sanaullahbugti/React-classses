import './App.css';
import React from 'react';
import SecondLecture from './components/second/SecondLecture'
import Button from './components/third/Button';
import FetchData from './components/third/FetchData';
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
function App() {

  return <React.Fragment>
    <SecondLecture />
    {list.map( item => {
      return <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    }
    )}
    <Button onClick={() => { console.log( "I am clicked from chile" ); }} className="red" text="Hit me" />
    <Button onClick={() => { console.log( "I am clicked from child blue" ); }} className="blue" text="Hit me blue" />
    <FetchData />
    {/* <div>hello man </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>
          {users.map( rec => <li>{rec.name}</li> )}
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
     
    </div> */}
  </React.Fragment>
}

export default App;
