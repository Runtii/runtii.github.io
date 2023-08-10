import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import construction from "./images/under construction.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={construction} width="300px" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
