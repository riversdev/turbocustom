import { useState } from 'react'
import { Button } from '@mono/ui/button'
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
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Button onClick={fetchApi}>
          Fetch api
        </Button>
        <p>{JSON.stringify(apiData, null, 4)}</p>
      </div>
    </>
  )
}

export default App
