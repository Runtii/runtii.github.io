import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName) => {
  return (
    <Link to={"/" + path} className="links">
      {pathName}
    </Link>
  );
};

export default function Projects({ paths, pathNames, pageNumber }) {
  return (
    <>
      <div className="title">
        <h1 className="glass_background" id="title">
          {pathNames[pageNumber]}
        </h1>
        <head className="glass_background" id="head">
          {paths.map((val, key) => {
            if (key !== pageNumber) return returnLink(val, pathNames[key]);
            else return "";
          })}
        </head>
      </div>

      <main id="main">
        <h2 className="glass_background content" id="first">
          My projects
        </h2>

        <div className="glass_background content">
          <h4>Notes wallet</h4>
          <p></p>
        </div>
        <div className="glass_background content">
          <h4>Password wallet</h4>
          <p></p>
        </div>
        <div className="glass_background content" id="last">
          <h4>IS APP</h4>
          <p></p>
        </div>
      </main>
    </>
  );
}
