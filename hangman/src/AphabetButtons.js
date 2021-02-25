import React from 'react';
import './AphabetButtons.css';

const AphabetButtons = (props) => {
  const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  //   console.log(props);
  const buttons = alphabetStr.split('').map((ltr) => (
    <button
      key={ltr}
      value={ltr}
      onClick={props.handleClick}
      className="alphabet-button"
    >
      {ltr}
    </button>
  ));

  return (
    <div>
      <div className="alphabet-buttons">{buttons}</div>
      <button className="restart-button restart" onClick={props.resetGame}>
        Restart
      </button>
    </div>
  );
};

export default AphabetButtons;
