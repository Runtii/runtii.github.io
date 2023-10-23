import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalLinks from "./pages/Personal links";

let i = 10;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>{i}</h3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/PersonalLinks" element={<PersonalLinks />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
