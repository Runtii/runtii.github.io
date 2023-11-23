import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName) => {
  return <Link to={"/" + path}>{pathName}</Link>;
};

export default function Home() {
  let title = "Home";
  let paths = ["About", "Projects", "PersonalLinks", "Contact"];
  let pathNames = [paths[0], paths[1], "Personal links", paths[3]];

  return (
    <>
      <h1 className="glass_background" id="title">
        {title}
      </h1>
      <head className="glass_background" id="head">
        {paths.map((val, key) => {
          return returnLink(val, pathNames[key]);
        })}
      </head>
      <main className="glass_background" id="main">
        <p>Page is under development</p>
      </main>
    </>
  );
}
