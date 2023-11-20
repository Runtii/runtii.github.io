import * as React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <div className="main">
        <Link to="/">Home page</Link>
        <Link to="/PersonalLinks">Personal links</Link>
        <p>Albert Poniedziałek</p>
      </div>
    </>
  );
}
