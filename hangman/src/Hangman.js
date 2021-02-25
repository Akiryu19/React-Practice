import React, { Component } from 'react';
import AphabetButtons from './AphabetButtons';
import { randomWord } from './words';
import Images from './Images';
import './AphabetButtons.css';
import './Hangman.css';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
  };

  constructor() {
    super();
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  //   initWord() {
  //     this.setState = { answer: randomWord() };
  //   }
  guessedWord() {
    return this.state.answer
      .split('')
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : ' _ '));
  }

  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }
  handleClick(e) {
    const ltr = e.target.value;
    this.setState((preSt) => ({
      guessed: preSt.guessed.add(ltr),
      nWrong: preSt.nWrong + (preSt.answer.includes(ltr) ? 0 : 1),
    }));
  }
  render() {
    // this.initWord();

    const resetMessageAndButton = (
      <div className="gameOver">
        <p>You Lose 😭</p>
        <p>
          The answer is:
          <span className="answer"> {this.state.answer.toUpperCase()}</span>
        </p>
        <button
          onClick={this.resetGame}
          className="restart-button play-one-more"
        >
          Play One More Time
        </button>
      </div>
    );
    let gameStatus = (
      <AphabetButtons
        handleClick={this.handleClick}
        resetGame={this.resetGame}
      />
    );
    const gameOver = this.state.nWrong === this.props.maxWrong;
    const gameWin = this.guessedWord().join('') === this.state.answer;
    if (gameWin)
      gameStatus = (
        <div>
          <p className="gameWin">You Win!✌️</p>{' '}
          <button
            onClick={this.resetGame}
            className="restart-button play-one-more"
          >
            Play One More Time
          </button>
        </div>
      );
    if (gameOver) gameStatus = resetMessageAndButton;

    return (
      <div className="Hangman">
        <Images nWrong={this.state.nWrong} maxWrong={this.props.maxWrong} />
        <div className="message-display">
          <p className="nWrong">Wrong Times:{this.state.nWrong}</p>
          <p className="nGuess">Your Guesses: {this.guessedWord()}</p>
        </div>

        {gameStatus}
      </div>
    );
  }
}

export default Hangman;
