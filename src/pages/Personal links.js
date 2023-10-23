import * as React from "react";
import { Link } from "react-router-dom";

export default function PersonalLinks() {
  return (
    <>
      <h1>Links to my socials and other pages</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}
