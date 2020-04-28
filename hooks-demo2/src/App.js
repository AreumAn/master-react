import React from 'react';
import Counter from './Counter';
import Info from './Info';
import CounterWithReducer from './CounterWithReducer';
import InfoWithReducer from './InfoWithReducer';
import Average from './Average';

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
        <hr />
        <Average />
      </>
  );
}

export default App;
