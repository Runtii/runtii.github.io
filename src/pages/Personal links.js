import * as React from "react";
import { Link } from "react-router-dom";

export default function PersonalLinks() {
  return (
    <>
      <h1 className="glass_background" id="title">
        Links to my socials and other pages
      </h1>
      <head className="glass_background" id="head">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </head>
      <main className="glass_background" id="main">
        [LINKS TO SOCIAL MEDIAS]
      </main>
    </>
  );
}
