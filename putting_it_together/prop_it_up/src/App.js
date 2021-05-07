import React from 'react';
import './App.css';

import BirthdayButton from './components/BirthdayButton';

function App() {
  return (
    <div className="App">
      <BirthdayButton firstName="Ashley" lastName="Renee" age={37} hairColor="pink"/>

      <BirthdayButton firstName="Chazz" lastName="Cupcake" age={31} hairColor="chestnut"/>
      <BirthdayButton firstName="Clara" lastName="Smith" age={37} hairColor="blonde"/>
      <BirthdayButton firstName="Yuri" lastName="Pan" age={32} hairColor="blue"/>
    </div>
  );
}
//by default props is empty
export default App;
