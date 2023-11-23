import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="glass_background" id="title">
        Home
      </h1>
      <head className="glass_background" id="head">
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/PersonalLinks">Personal links</Link>
        <Link to="/Contact">Contact</Link>
      </head>
      <main className="glass_background" id="main">
        <p>Page is under development</p>
      </main>
    </>
  );
}
