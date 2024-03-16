import React, { lazy, Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [secondState, setSecondState] = useState(true);
  const pass = 'bubun';

  const FunctionOne = lazy(() => import('./FunctionOne'));

  return (
    <>
      <div>
        Bubun
      </div>

      <div>
        <button onClick={() => setSecondState(true)}>Click me</button>
        {secondState && (
          <Suspense fallback={<div>Loading...</div>}>
            <FunctionOne pass={pass} />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;
