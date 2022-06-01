import logo from './logo.svg';
import './App.css';
import {Greet}
 from './components/Greet';
import { render } from "@testing-library/react";
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    <Message/> 
     <Counter/>
      Create Statless Functional component 
     
     <Greet name="Bruse" heroName="Batman">
       <p>This is children props</p>
      </Greet>
      <button>Action</button>
      <Greet name="Clark" heroName="Superman"/>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
