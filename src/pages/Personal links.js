import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName) => {
  return <Link to={"/" + path}>{pathName}</Link>;
};

export default function PersonalLinks() {
  let title = "Personal links";
  let paths = ["", "About", "Projects", "Contact"];
  let pathNames = ["Home", paths[1], paths[2], paths[3]];
  return (
    <>
      <div className="title">
        <h1 className="glass_background" id="title">
          {title}
        </h1>
        <head className="glass_background" id="head">
          {paths.map((val, key) => {
            return returnLink(val, pathNames[key]);
          })}
        </head>
      </div>
      <main className="glass_background" id="main">
        [LINKS TO SOCIAL MEDIAS]
      </main>
    </>
  );
}
