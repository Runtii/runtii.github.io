import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName, key) => {
  return (
    <h4 key={key}>
      <Link to={"/" + path} className="links">
        {pathName}
      </Link>
    </h4>
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
        <div className="glass_background" id="head">
          {paths.map((val, key) => {
            if (key !== 0) return returnLink(val, pathNames[key], key);
            else return "";
          })}
        </div>
      </div>

      <main className="main">
        <div className="glass_background content">
          <h2>Hi! I'm Albert Poniedziałek</h2>
          <p>
            I'm captain of this spaceship. If You want to find more information
            about me, head straight to our archives, where We catalog everything
            We come across while exploring space. Oh and you have to know that
            archives are labeled "About". If you want to trade with our
            merchants like buy some minerals, projects or some space fuel head
            straight to storage units, they are labeled "Projects". Lastly if
            you want to have a relaxing conversation with something to drink
            while we will be going through endless void of universe gazing upon
            natural wonders head to Contact area.
          </p>
        </div>
      </main>
    </div>
  );
}
