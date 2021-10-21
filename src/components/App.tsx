import React from 'react';
import Card from './Card/Card';

function App(): JSX.Element {
  return <Card card={{suit: "spades", rank: 13}}/>;
}

export default App;
