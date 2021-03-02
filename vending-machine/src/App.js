import VendingMachine from './VendingMachine';
import './App.css';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={VendingMachine}></Route>
        <Route exact path="/soda" component={Soda}></Route>
        <Route exact path="/sardines" component={Sardines}></Route>
        <Route exact path="/chips" component={Chips}></Route>
      </Switch>
    </div>
  );
}

export default App;
