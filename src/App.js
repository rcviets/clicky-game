import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Cards from './components/Cards';
import officers from './tng.js';
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
    let officerCards = this.state.officers.map((officer) =>{
      console.log(officer.image);
      return (
        <Cards 
          name = {officer.name}
          image = {officer.image}
          key = {officer.id}
          id = {officer.id}
          handleClick = {this.handleClick}
        />  
      )
    }
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