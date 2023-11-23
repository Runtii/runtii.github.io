import * as React from "react";
import { Link } from "react-router-dom";

export default function PersonalLinks() {
  return (
    <>
      <h1 className="glass_background" id="title">
        Personal links
      </h1>
      <head className="glass_background" id="head">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </head>
      <main className="glass_background" id="main">
        [LINKS TO SOCIAL MEDIAS]
      </main>
    </>
  );
}
