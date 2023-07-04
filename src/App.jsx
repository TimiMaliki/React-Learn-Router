import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
// import Section from './components/Section'
import { Link,Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>

      <nav>
        <ul>
          <li><Link to="/">Home</Link>
          </li>
          <li><Link to="/hero">Hero</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>

    </>

  )
}

export default App
