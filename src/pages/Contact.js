import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName) => {
  return (
    <Link to={"/" + path} className="links">
      {pathName}
    </Link>
  );
};

export default function Contact({ paths, pathNames, pageNumber }) {
  return (
    <>
      <div className="title">
        <h1 className="glass_background" id="title">
          {pathNames[pageNumber]}
        </h1>
        <h4 className="glass_background" id="head">
          {paths.map((val, key) => {
            return returnLink(val, pathNames[key]);
          })}
        </h4>
      </div>
      <main className="glass_background" id="main">
        <h3>Contact me!</h3>
      </main>
    </>
  );
}
