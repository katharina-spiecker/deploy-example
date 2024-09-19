import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom';

function App() {

  return (
    <>
    <nav>
      <NavLink to="/">Startseite</NavLink>
      <NavLink to="/about">Über uns</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

function Home() {
  return (
    <h1>Home</h1>
  )
}

function About() {
  return (
    <h1>About</h1>
  )
}

function Contact() {
  return (
    <h1>Contact</h1>
  )
}

export default App