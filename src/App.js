import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

/**
 * paths - names of paths that are used by the browser
 *
 * pathNames - names of pages that are used throughout displayed page
 */

function App() {
  let paths = ["", "About", "Projects", "Contact"];
  let pathNames = ["Home", paths[1], paths[2], paths[3]];
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={<Home paths={paths} pathNames={pathNames} />}
          />
          <Route
            path="/About"
            element={<About paths={paths} pathNames={pathNames} />}
          />
          <Route
            path="/Projects"
            element={<Projects paths={paths} pathNames={pathNames} />}
          />
          <Route
            path="/Contact"
            element={<Contact paths={paths} pathNames={pathNames} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
