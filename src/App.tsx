import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useCounter } from './hooks/useCounter';

function App() {
  const { count, inc, dec, reset, set } = useCounter();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <p>
          Count: <code>{count}</code>
        </p>

        <div className="buttons">
          <button onClick={() => inc()}>Increment</button>
          <button onClick={() => dec()}>Decrement</button>
          <button onClick={() => set(5)}>Set (5)</button>
          <button onClick={reset}>Reset</button>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
