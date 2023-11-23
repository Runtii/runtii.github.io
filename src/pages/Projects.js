import * as React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <h1 className="glass_background" id="title">
        Projects
      </h1>
      <head className="glass_background" id="head">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/PersonalLinks">Personal links</Link>
        <Link to="/Contact">Contact</Link>
      </head>
      <main className="glass_background" id="main">
        <p>My projects</p>
      </main>
    </>
  );
}
