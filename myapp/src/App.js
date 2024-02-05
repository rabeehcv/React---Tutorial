
import './App.css';
import { useState } from 'react';
import Animal from './Components/Animal';
import Msg from './Components/Msg';

function App() {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick = { () => setCounter((prevCount) => prevCount-1)}> - </button>
      <h1>{counter}</h1>
      <button onClick = { () => setCounter((prevCount) => prevCount + 1)}>+</button>
      <h1>Rabeeh CV</h1>
      <Msg/>
      <Animal name={'lion'}/>
      <Animal name={'Rabbit'}/>
      <h2>2+2=4</h2>
    </div>
  );
}

export default App;
