import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Ashley" lastName="Renee" age="37" hairColor="pink"/>
      <PersonCard firstName="Chazz" lastName="Cupcake" age="31" hairColor="chestnut"/>
      <PersonCard firstName="Clara" lastName="Smith" age="37" hairColor="blonde"/>
      <PersonCard firstName="Yuri" lastName="Pan" age="32" hairColor="blue"/>

    </div>
  );
}

export default App;
