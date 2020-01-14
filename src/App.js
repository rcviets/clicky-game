import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Score from './components/Score';
import Officers from './tng.json';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    topScore: 0,
    score: 0,
    body: Officers
  }


  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Score />
      </div>
    );
  }
}

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

export default App;
