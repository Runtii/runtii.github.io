import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName, key) => {
  return (
    <Link to={"/" + path} className="links" key={{ key }}>
      {pathName}
    </Link>
  );
};

export default function Contact({ paths, pathNames, pageNumber }) {
  return (
    <>
      <div className="title">
        <h1 className="glass_background" id="title">
          <a id="hideLink" href="/">
            {pathNames[pageNumber]}
          </a>
        </h1>
        <h4 className="glass_background" id="head">
          {paths.map((val, key) => {
            if (key !== 0) return returnLink(val, pathNames[key], key);
            else return "";
          })}
        </h4>
      </div>
      <main id="main">
        <div className="glass_background content">
          <h2>Contact me!</h2>
        </div>
        <div className="glass_background content" id="Github">
          <h2>Github</h2>
          <a href="https://github.com/Runtii">My Github account</a>
        </div>
        <div className="glass_background content" id="LinkedIN">
          <h2>Linked in</h2>
          <a href="https://www.linkedin.com/in/albert-poniedzia%C5%82ek-52846226b/">
            My Linked In account
          </a>
        </div>
        <div className="glass_background content" id="Facebook">
          <h2>Facebook</h2>
          <a href="https://www.facebook.com/profile.php?id=100013619761387">
            My Facebook account
          </a>
        </div>
      </main>
    </>
  );
}
