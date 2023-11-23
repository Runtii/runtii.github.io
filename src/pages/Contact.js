import * as React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1 className="glass_background" id="title">
        Contact
      </h1>
      <head className="glass_background" id="head">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/PersonalLinks">Personal links</Link>
      </head>
      <main className="glass_background" id="main">
        <p>Contact me!</p>
      </main>
    </>
  );
}
