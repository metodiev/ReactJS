import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import GreetComponent from './components/GreetComponent';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <GreetComponent name="Miroslav" heroName="Miro"/>
      <Welcome  name="Miroslav" heroName="Miro"/>
   <Counter/>
    </div>
  );
}

export default App;
