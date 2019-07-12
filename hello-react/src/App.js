import React from 'react';
import Hello from './Hello';
import Clock from './Clock';
import Select from './Select';

function App() {

  const items = [
    {
      value: "romain",
      label: "Romain"
    },
    {
      value: "eric",
      label: "Eric"
    }
  ]
  return (
    <div className="App">
      <h2> Title </h2>
      <Hello firstname="Yassir" lastname="ZAKI"/>
      <Clock></Clock>
      <Select items = {items}/>
    </div>
  );
}

export default App;
