import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

const Routes = (props) => {
  const dogs = props.dogs;

  const getDog = (props) => {
    let name = props.match.params.name;
    let currentDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails {...props} dog={currentDog} />;
  };
  return (
    <Switch>
      <Route exact path="/">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name" render={getDog}></Route>

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
