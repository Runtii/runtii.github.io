import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName) => {
  return <Link to={"/" + path}>{pathName}</Link>;
};

const move = () => {
  let collection = document.getElementsByClassName("glass_background");
  console.log(collection);
  for (let i in collection) {
    if (i < collection.length) {
      console.log(collection[i]);
      collection[i].style.top =
        parseFloat(collection[i].style.top || 0) + 5 + "px";
      collection[i].style.left =
        parseFloat(collection[i].style.left || 0) + 5 + "px";
      collection[i].style.rotate =
        parseFloat(collection[i].style.rotate || 0) + 0.1 + "deg";
    }
  }
};

export default function About({ paths, pathNames, pageNumber }) {
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
        <p className="glass_background" id="first">
          Hi! I'm Albert Poniedziałek, it would be Albert Monday in english if
          translated. Yes i know that many people don't like mondays,
          nonetheless i hope that we will get along.
        </p>
        <p className="glass_background">
          I'm a aspiring front-end developer, but someone after seeing my
          projects might even say full-stack developer. Mainly due to creating
          both client and server apps (with data base connected of course) for
          my projects and I have to admit I really enjoy connecting both via
          requests.
        </p>
        <p className="glass_background" id="last">
          I do my best to make my projects good looking... but we all know that
          it is difficult and not always goes to plan.
        </p>
        <input type="button" onClick={() => move()}></input>
      </main>
    </>
  );
}
