import React from 'react';

const Coin = (props) => {
  return (
    <div className="Coin">
      {props.data && <img src={props.data.imgSrc} alt={props.data.side} />}
    </div>
  );
};

export default Coin;
