import React from 'react';
import Lottery from './Lottery';

const App = () => {
  return (
    <div>
      <Lottery />
      <Lottery title="Mini Lottery" numBalls="4" />
    </div>
  );
};

export default App;
