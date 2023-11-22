import * as React from "react";
import { Link } from "react-router-dom";

let credentials = "Albert Poniedziałek";

export default function About() {
  return (
    <>
      <h1 className="glass_background" id="title">
        About page
      </h1>
      <head className="glass_background" id="head">
        <Link to="/">Home page</Link>
        <Link to="/PersonalLinks">Personal links</Link>
      </head>
      <main className="glass_background" id="main">
        <p>{credentials}</p>
      </main>
    </>
  );
}
