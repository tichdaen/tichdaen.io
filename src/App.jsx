import logo from './logo.svg'
import './App.css'
import { useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const clickEvent = useCallback(() => {
    setCount(count => {
      console.log('count ', count);
      return count + 1;
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <button onClick={clickEvent}>Count! : {count}</button>
        <p>
          개종진 애자ㅋㅋ
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
