import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName) => {
  return <Link to={"/" + path}>{pathName}</Link>;
};

export default function Contact() {
  let title = "Contact";
  let paths = ["", "About", "Projects", "PersonalLinks"];
  let pathNames = ["Home", paths[1], paths[2], "Personal links"];
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
        <p>Contact me!</p>
      </main>
    </>
  );
}
