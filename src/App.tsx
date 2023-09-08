// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  const test = () => {
    const a = 5;
    const b = 7;
    return a + b;
  };

  test();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button
          type="button"
          className="dsfjksdjfksdjflk"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <input
        type="text"
        id="dsfjlasjfdlksjf"
        className="sdjlkfjsdf"
        name="dsjfljfslkdfjlksdfjlksd"
        aria-describedby="jsdlkfjsldkfjsdlkfj"
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
