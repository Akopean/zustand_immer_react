import { useState } from 'react'
import reactLogo from './assets/react.svg'
import useCartStore from './store/cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {increase, bears, clear} = useCartStore((state) => ({increase: state.increase, bears: state.bears, clear: state.removeAllBears}))
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ clear", clear)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1); increase(1)}}>
          count is {count}, bears is {bears}
        </button>
        <p>
          Edit <code onClick={() =>clear()}>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
