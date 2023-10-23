import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <div className="main">
        <Link to="/about">About</Link>
        <Link to="/PersonalLinks">Personal links</Link>
        <p>Page is still under development</p>
      </div>
    </>
  );
}
