import * as React from "react";
import { Link } from "react-router-dom";

// const RandomMove = (id)=>{
//   el = document.getElementById(id)

// }

const returnLink = (path, pathName) => {
  return <Link to={"/" + path}>{pathName}</Link>;
};

export default function About() {
  let credentials = "Albert Poniedziałek";
  let title = "About";
  let paths = ["", "Projects", "PersonalLinks", "Contact"];
  let pathNames = ["Home", paths[1], "Personal Links", paths[3]];

  return (
    <>
      <h1 className="glass_background" id="title">
        {title}
      </h1>
      <div className="glass_background" id="head">
        {paths.map((val, key) => {
          return returnLink(val, pathNames[key]);
        })}
      </div>
      <main className="glass_background" id="main">
        <p>{credentials}</p>
      </main>
    </>
  );
}
