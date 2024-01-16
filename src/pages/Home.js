import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName, key) => {
  return (
    <Link to={"/" + path} className="links" key={{ key }}>
      {pathName}
    </Link>
  );
};

export default function Home({ paths, pathNames, pageNumber }) {
  return (
    <>
      <div className="title">
        <h1 className="glass_background" id="title">
          {pathNames[pageNumber]}
        </h1>
        <h4 className="glass_background" id="head">
          {paths.map((val, key) => {
            return returnLink(val, pathNames[key], key);
          })}
        </h4>
      </div>
      <main className="glass_background" id="main">
        <h3>Page is under development</h3>
        <p>Check back later</p>
      </main>
    </>
  );
}
