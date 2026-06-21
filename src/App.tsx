import { useEffect, useState } from 'react'
import { register } from '@tauri-apps/api/globalShortcut'
import './App.css'

function App() {
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(78)

  useEffect(() => {
    register('F8', () => {
      setShow(true)
      setTimeout(() => setShow(false), 3000)
    })
  }, [])

  return (
    <div className="overlay">
      {show && (
        <div className="box">
          <h1>CORRE PRA USINA</h1>
          <div className="bar">
            <div className="fill" style={{width: `${progress}%`}}></div>
          </div>
          <p>{progress}%</p>
        </div>
      )}
    </div>
  )
}

export default App
