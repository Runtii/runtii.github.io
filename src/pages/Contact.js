import * as React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/contact1.png";
import img2 from "../images/contact2.png";
import img3 from "../images/contact3.png";
import img4 from "../images/contact4.png";

const returnLink = (path, pathName, key) => {
  return (
    <h4 key={key}>
      <Link to={"/" + path} className="links">
        {pathName}
      </Link>
    </h4>
  );
};

const randomImage = () => {
  let RNG = Math.floor(Math.random() * 4) + 1;
  switch (RNG) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    default:
      break;
  }
};

export default function Contact({ paths, pathNames }) {
  let img = randomImage();
  return (
    <div
      className="main-frame"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="title">
        <h1 className="glass_background" id="title">
          <a className="hideLink" href="/">
            Home
          </a>
        </h1>
        <div className="glass_background" id="head">
          {paths.map((val, key) => {
            if (key !== 0) return returnLink(val, pathNames[key], key);
            else return "";
          })}
        </div>
      </div>
      <main className="main">
        <div className="glass_background content" id="first">
          <h2>Contact me!</h2>
        </div>
        <div className="glass_background content" id="Github">
          <h2>Github</h2>
          <a href="https://github.com/Runtii" className="links">
            My Github account
          </a>
        </div>
        <div className="glass_background content" id="LinkedIN">
          <h2>Linked in</h2>
          <a
            href="https://www.linkedin.com/in/albert-poniedzia%C5%82ek-52846226b/"
            className="links"
          >
            My Linked In account
          </a>
        </div>
        <div className="glass_background content" id="Facebook">
          <h2>Facebook</h2>
          <a
            href="https://www.facebook.com/profile.php?id=100013619761387"
            className="links"
          >
            My Facebook account
          </a>
        </div>
      </main>
    </div>
  );
}
