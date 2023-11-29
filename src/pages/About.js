import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName) => {
  return <Link to={"/" + path}>{pathName}</Link>;
};

export default function About({ paths, pathNames, pageNumber }) {
  let credentials = "Albert Poniedziałek";

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
      <main className="glass_background" id="main">
        <p>{credentials}</p>
      </main>
    </>
  );
}
