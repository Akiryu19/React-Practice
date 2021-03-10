import './App.css';
import tubby from './imgs/tubby.jpeg';
import hazel from './imgs/hazel.jpeg';
import whiskey from './imgs/whiskey.jpeg';
import Routes from './Routes';
import Navbar from './Navbar';

const dogs = [
  {
    name: 'Whiskey',
    age: 5,
    src: whiskey,
    facts: [
      'Whiskey loves eating popcorn.',
      'Whiskey is a terrible guard dog.',
      'Whiskey wants to cuddle with you!',
    ],
  },
  {
    name: 'Hazel',
    age: 3,
    src: hazel,
    facts: [
      'Hazel has soooo much energy!',
      'Hazel is highly intelligent.',
      'Hazel loves people more than dogs.',
    ],
  },
  {
    name: 'Tubby',
    age: 4,
    src: tubby,
    facts: [
      'Tubby is not the brightest dog',
      'Tubby does not like walks or exercise.',
      'Tubby loves eating food.',
    ],
  },
];
function App() {
  return (
    <div>
      <Navbar dogs={dogs} />
      <div className="container">
        <Routes dogs={dogs} />
      </div>
    </div>
  );
}

export default App;
