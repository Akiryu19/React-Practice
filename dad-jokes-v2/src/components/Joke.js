import React from 'react';
import './Joke.css';

const Joke = ({ joke, downVote, upVote }) => {
  const votes = joke.vote;
  const getColor = () => {
    if (votes >= 15) {
      return '#2b9348';
    } else if (votes >= 10) {
      return '#90be6d';
    } else if (votes >= 5) {
      return '#d4d700';
    } else if (votes >= 0) {
      return '#f9c74f';
    } else if (votes >= -5) {
      return '#f3722c';
    } else {
      return '#a4161a';
    }
  };
  const getEmoji = () => {
    if (votes >= 15) {
      return 'em em-joy';
    } else if (votes >= 10) {
      return 'em em-relieved ';
    } else if (votes >= 5) {
      return 'em em-laughing';
    } else if (votes > 0) {
      return 'em em-smile';
    } else if (votes === 0) {
      return 'em em-confused';
    } else if (votes >= -5) {
      return 'em em-flushed';
    } else {
      return 'em em-unamused';
    }
  };
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={upVote}></i>
        <span
          className="Joke-votes"
          style={{ borderColor: getColor(), color: getColor() }}
        >
          {joke.vote}
        </span>
        <i className="fas fa-arrow-down" onClick={downVote}></i>
      </div>
      <div className="Joke-text">{joke.text}</div>
      <div className="Joke-smiley">
        <i className={`${getEmoji()}`} aria-label={`${getEmoji()}`}></i>
      </div>
    </div>
  );
};

export default Joke;
