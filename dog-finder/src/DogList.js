import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = (props) => {
  return (
    <div className="DogList">
      <h1 className="display-3 text-center DogList-title mt-5">Dog List</h1>
      <div className="row">
        {props.dogs.map((dog) => (
          <div className="Dog col-lg-4 text-center" key={dog.name}>
            <h3>
              <Link className="underline" to={`/dogs/${dog.name}`}>
                {dog.name}
              </Link>
            </h3>

            <Link to={`/dogs/${dog.name}`}>
              <img src={dog.src} alt={dog.name} />{' '}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
