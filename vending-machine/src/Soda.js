import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

const Soda = () => {
  return (
    <div>
      <Message>
        <h1>Soda</h1>
        <Link to="/">Back to Vending Machine</Link>
      </Message>
    </div>
  );
};

export default Soda;
