import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom';
import Home from "./components/Home";

function App() {

  return (
    <>
    <nav>
      <NavLink to="/">Startseite</NavLink>
      <NavLink to="/about">Über uns</NavLink>
    </nav>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </>
  )
}



function About() {
  return (
    <h1>About</h1>
  )
}

function Contact() {
  const {test} = useParams();
  return (
    <h1>Contact {test}</h1>
  )
}

export default App