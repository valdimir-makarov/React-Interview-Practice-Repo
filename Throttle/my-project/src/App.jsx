import { useState } from 'react';
import './App.css';

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const throttledIncrement = throttle(incrementCount, 1);

  return (
    <>
      <button onClick={throttledIncrement}>onClick</button>
      <div>{count}</div>
    </>
  );
}

export default App;
