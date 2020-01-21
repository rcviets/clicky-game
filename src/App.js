import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Cards from './components/Cards';
import officers from './tng.json';
import './App.css';

class App extends React.Component {
  state = {
    topScore: 0,
    score: 0,
    officers
  }

  // officer ID for looping through array of officers
  handleClick = officerID => {
    console.log(officerID)

  }
  
  
  render() {
    const {score, topScore} = this.state;
    let officerCards = this.state.officers.map((officer) =>
      <Cards 
        name = {officer.name}
        image = {officer.image}
        key = {officer.id}
        id = {officer.id}
        handleClick = {this.handleClick}
      />  
    )
    return (
      <div>
         {/* score = {score} topScore = {topScore} */}
        <Header {...{score, topScore}} />
        <Jumbotron />
        <Wrapper>
          {officerCards}
        </Wrapper>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


