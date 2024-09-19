import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom';

function App() {

  return (
    <>
    <nav>
      <NavLink to="/deploy-example/">Startseite</NavLink>
      <NavLink to="/deploy-example/about">Über uns</NavLink>
      <NavLink to="/deploy-example/hi/contact">Kontakt</NavLink>
    </nav>
    <Routes>
      <Route path="/deploy-example">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path=":test/contact" element={<Contact />} />
      </Route>
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
  const {test} = useParams();
  return (
    <h1>Contact {test}</h1>
  )
}

export default App