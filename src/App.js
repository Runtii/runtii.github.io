import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalLinks from "./pages/Personal links";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/PersonalLinks" element={<PersonalLinks />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
