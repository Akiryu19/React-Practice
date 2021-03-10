import React from 'react';
import './DogDetails.css';
import { Link } from 'react-router-dom';

const DogDetails = (props) => {
  let { dog } = props;
  if (dog) {
    return (
      <div className="DogDetails row justify-content-center mt-4">
        <div className="col-11 col-lg-5">
          <div className="DogDetails-card card">
            <img src={dog.src} alt={dog.name} />

            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, idx) => (
                <li className="list-group-item" key={idx}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/" className="btn btn-info">
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="empty">
        <h3 className="card-title">Not Found :(</h3>
      </div>
    );
  }
};

export default DogDetails;
