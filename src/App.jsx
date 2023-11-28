// /src/App.jsx

// import dependencies
import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Project />
      <Footer />      
    </>
  )
}

export default App
