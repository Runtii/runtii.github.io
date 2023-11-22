import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="glass_background" id="title">
        Home page
      </h1>
      <head className="glass_background" id="head">
        <Link to="/about">About</Link>
        <Link to="/PersonalLinks">Personal links</Link>
      </head>
      <main className="glass_background" id="main">
        <p>Page is under development</p>
      </main>
    </>
  );
}
