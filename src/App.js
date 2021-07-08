import './App.css';
import React from 'react';

const athleteData = [
  { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
  { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
  { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
  { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
  { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
  { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
  { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
  { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
  { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
  { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
];

function App() {
  return <React.Fragment>
    <div>
      <h1>Hello Welcome to React World!!</h1>
      <h5>Assignment 1</h5>
        {
          athleteData.filter(record=> record.athlete==='Mohamed Salah').map(athlete=> 
        <div>
          <p>{athlete.athlete+' in '+athlete.team+' earned '+athlete.income+' euros'}</p>
        </div>
      
      )
        }
      <h5>Assignment 2</h5>
      {
          athleteData.filter(record=> record.income.toString().length>7).map(athlete=> 
        <div>
          <p>{'Name : '+athlete.athlete}</p>
          <p>{'Team : '+athlete.team}</p>
          <p>{'Income :'+athlete.income}</p>
          <br></br>
        </div>
      
      )
        }
      <h5>Assignment 3</h5>
      {
          athleteData.filter(record=> record.income>10000000).map(athlete=> 
        <div>
          <p>{athlete.athlete+' is a great football player '}</p>
        </div>
      
      )
        }
    </div>
  </React.Fragment>
  }

export default App;
