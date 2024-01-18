import * as React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/about1.png";
import img2 from "../images/about2.png";
import img3 from "../images/about3.png";
import img4 from "../images/about4.png";

const returnLink = (path, pathName, key) => {
  return (
    <h4>
      <Link to={"/" + path} className="links" key={{ key }}>
        {pathName}
      </Link>
    </h4>
  );
};

// const move = () => {
//   let collection = document.getElementsByClassName("glass_background");
//   console.log(collection);
//   for (let i in collection) {
//     if (i < collection.length) {
//       console.log(collection[i]);
//       collection[i].style.top =
//         parseFloat(collection[i].style.top || 0) + 5 + "px";
//       collection[i].style.left =
//         parseFloat(collection[i].style.left || 0) + 5 + "px";
//       collection[i].style.rotate =
//         parseFloat(collection[i].style.rotate || 0) + 0.1 + "deg";
//     }
//   }
// };

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

export default function About({ paths, pathNames }) {
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
        <p className="glass_background content" id="first">
          Hi! I'm Albert Poniedziałek, it would be Albert Monday in english if
          translated. Yes i know that a lot of people don't like Mondays,
          nonetheless i hope that we will get along.
        </p>
        <p className="glass_background content">
          I'm a aspiring front-end developer, but someone after seeing my
          projects might even say full-stack developer. Mainly due to creating
          both client and server apps (with data base connected of course) for
          my projects and I have to admit I really enjoy creating those types of
          structures.
        </p>
        <p className="glass_background content" id="last">
          I do my best to make my projects good looking... but we all know that
          it is difficult and not always goes to plan.
        </p>
        {/* <input type="button" onClick={() => move()}></input> */}
      </main>
    </div>
  );
}
