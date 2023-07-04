import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { Link,Route, Routes } from 'react-router-dom'
import Section from './components/Section'
import Footer from './components/Footer'
import NotFound from './components/NotFound'



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
          <Route path="/hero"> 
              <Route path=":id" element={<Hero />} />
          </Route>
        {/* <Route path="/hero" element={<Hero />} />
        <Route path="/hero/:id" element={<Section />} />
        <Route path="/hero/new" element={<Footer />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>

  )
}

export default App
