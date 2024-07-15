import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState(null)

  const fetchApi = async () => {
    const response = await fetch('/api')
    const data = await response.json()

    setApiData(data)
  }

  return (
    <>
      <h1>Monorepo test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={fetchApi}>
          Fetch api
        </button>
        <p>{JSON.stringify(apiData, null, 4)}</p>
      </div>
    </>
  )
}

export default App
