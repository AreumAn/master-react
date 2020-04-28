import React from 'react';
import Counter from './Counter';
import Info from './Info';
import CounterWithReducer from './CounterWithReducer';
import InfoWithReducer from './InfoWithReducer';

function App() {
  return (
      <>
        <Counter />
        <hr />
        <Info />
        <hr />
        <CounterWithReducer />
        <hr />
        <InfoWithReducer />
      </>
  );
}

export default App;
