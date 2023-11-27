// /src/App.jsx

// import dependencies
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> {/* Make sure this line is present */}
      <div className="card">      

      </div>
      
    </>
  )
}

export default App
