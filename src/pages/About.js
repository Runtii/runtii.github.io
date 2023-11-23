import * as React from "react";
import { Link } from "react-router-dom";

let credentials = "Albert Poniedziałek";

// const RandomMove = (id)=>{
//   el = document.getElementById(id)

// }

export default function About() {
  return (
    <>
      <h1 className="glass_background" id="title">
        About
      </h1>
      <links className="glass_background" id="head">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/PersonalLinks">Personal links</Link>
        <Link to="/Contact">Contact</Link>
      </links>
      <main className="glass_background" id="main">
        <p>{credentials}</p>
      </main>
    </>
  );
}
