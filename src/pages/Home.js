import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName, key) => {
  return (
    <Link to={"/" + path} className="links" key={{ key }}>
      {pathName}
    </Link>
  );
};

export default function Home({ paths, pathNames }) {
  return (
    <div className="main-frame home">
      <div className="title">
        <h1 className="glass_background" id="title">
          <a className="hideLink" href="/">
            Home
          </a>
        </h1>
        <h4 className="glass_background" id="head">
          {paths.map((val, key) => {
            if (key !== 0) return returnLink(val, pathNames[key], key);
            else return "";
          })}
        </h4>
      </div>

      <main className="glass_background content" id="main">
        <h2>Hi! I'm Albert Poniedziałek</h2>
        <p>
          This is my spaceship (portfolio). You can find more information about
          captain of this spaceship (me) if you head to About page. If you are
          searching for some minerals, namely "projects" head to Project page.
          Lastly if you want to communicate with captain of this spaceship head
          to Contact area.
        </p>
      </main>
    </div>
  );
}
