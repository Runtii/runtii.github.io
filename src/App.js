import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersonalLinks from "./pages/Personal links";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

/**
 * paths - names of paths that are used by the browser
 *
 * pathNames - names of pages that are used throughout displayed page
 *
 * pageNumber - ID of page
 */

function App() {
  let paths = ["", "About", "Projects", "PersonalLinks", "Contact"];
  let pathNames = ["Home", paths[1], paths[2], "Personal links", paths[4]];
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <Home paths={paths} pathNames={pathNames} pageNumber={0} />
            }
          />
          <Route
            path="/About"
            element={
              <About paths={paths} pathNames={pathNames} pageNumber={1} />
            }
          />
          <Route
            path="/Projects"
            element={
              <Projects paths={paths} pathNames={pathNames} pageNumber={2} />
            }
          />
          <Route
            path="/PersonalLinks"
            element={
              <PersonalLinks
                paths={paths}
                pathNames={pathNames}
                pageNumber={3}
              />
            }
          />
          <Route
            path="/Contact"
            element={
              <Contact paths={paths} pathNames={pathNames} pageNumber={4} />
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
