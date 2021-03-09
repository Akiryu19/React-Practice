import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';
import Joke from './Joke';
import './JokeList.css';

const JokeList = () => {
  const numJokesToget = 10;
  const initialVal = JSON.parse(window.localStorage.getItem('jokes') || '[]');
  const [jokes, setJokes] = useState(initialVal);
  //   const [isLoading, setIsLoading] = useState(false);

  const getJokes = async () => {
    let jokes = [];
    while (jokes.length < numJokesToget) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json ' },
      });
      jokes.push({ id: uuidv4(), text: res.data.joke, vote: 0 });
    }
    setJokes((oldJokes) => [...oldJokes, ...jokes]); //get more jokes

    window.localStorage.setItem('jokes', JSON.stringify(jokes));
  };

  useEffect(() => {
    if (jokes.length === 0) {
      getJokes();
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('jokes', JSON.stringify(jokes));
  }, [jokes]);

  const handleVote = (id, delta) => {
    setJokes(
      jokes.map((joke) =>
        joke.id === id ? { ...joke, vote: joke.vote + delta } : joke
      )
    );
  };
  const handleClick = () => {
    getJokes();
  };

  if (jokes.length === 0) {
    return (
      <div className="JokeList-spinner">
        <i className="far fa-8x fa-laugh fa-spin"></i>
        <h1 className="JokeList-title">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="JokeList">
      <div className="JokeList-sidebar">
        <h1 className="JokeList-title">
          <span>Dad</span> Jokes
        </h1>
        <img
          src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
          alt="emoji"
        />
        <button className="JokeList-getmore" onClick={handleClick}>
          New Jokes
        </button>
      </div>

      <div className="JokeList-jokes">
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            joke={joke}
            id={joke.id}
            upVote={() => handleVote(joke.id, 1)}
            downVote={() => handleVote(joke.id, -1)}
          />
        ))}
      </div>
    </div>
  );
};

export default JokeList;
