import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Cards from './components/Cards';
import officers from './tng.js';
import update from "immutability-helper";
import './App.css';

class App extends React.Component {
  state = {
    topScore: 0,
    score: 0,
    headerText: "Don't Click A Picture Twice! ENGAGE!",
    officers
  }

  // officer ID for looping through array of officers
  handleClick = officerID => {
    console.log(officerID)

    let officerArr = this.state.officers;

    //check if officer has been clicked
    for (let i = 0; i < officerArr.length; i++) {
      if (officerID === officerArr[i].id) {
        //increase score if unclicked
        if(officerArr[i].clicked === false) {
          this.setState({
            score: this.state.score + 1,
            officers: update(this.state.officers, {[i]: {clicked: {$set: true}}}),
            headerText: 'Make It So!'
          })
        } else {
          if (this.state.score > this.state.topScore) {
            this.setState({
              topScore: this.state.score,
              score: 0,
              headerText: 'The Line Must Be Drawn Here!',
              officers
            })
          }
          if (this.state.score <= this.state.topScore) {
            this.setState({
              score: 0,
              headerText: 'The Line Must Be Drawn Here!',
              officers
            });
          }
        }
      }
    }
  };

  //Shuffle Cards Function
  shuffleArray = array => {
    let i = array.length - 1;

    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  
  render() {
    const {score, topScore, headerText} = this.state;
    let officerCards = this.state.officers.map((officer) =>
      //console.log(officer.image);
      <Cards 
        name = {officer.name}
        image = {officer.image}
        key = {officer.id}
        id = {officer.id}
        handleClick = {this.handleClick}
      />  
    )
    let shuffledCards = this.shuffleArray(officerCards)
    return (
      <div>
         {/* score = {score} topScore = {topScore} */}
        <Header {...{score, topScore}} />
        <Jumbotron {...{headerText}} />
        <Wrapper>
          {shuffledCards}
        </Wrapper>
      </div>
    );
  }
}

export default App;