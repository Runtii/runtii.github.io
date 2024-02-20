import "./App.scss";
import React, { useEffect, useState } from "react";

import {
  Routes,
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import homeImg from "./images/main.png";
import aboutImg1 from "./images/about1.png";
import aboutImg2 from "./images/about2.png";
import aboutImg3 from "./images/about3.png";
import aboutImg4 from "./images/about4.png";
import contactImg1 from "./images/contact1.png";
import contactImg2 from "./images/contact2.png";
import contactImg3 from "./images/contact3.png";
import contactImg4 from "./images/contact4.png";
import projectImg1 from "./images/projects1.png";
import projectImg2 from "./images/projects2.png";
import projectImg3 from "./images/projects3.png";
import projectImg4 from "./images/projects4.png";
/**
 * paths - names of paths that are used by the browser
 *
 * pathNames - names of pages that are used throughout displayed page
 */
function App() {
  const [path, setPath] = useState("Home");
  const [lastPath, setLastPath] = useState("Home");
  const [img, setImg] = useState(homeImg);
  const aboutImg = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];
  const contactImg = [contactImg1, contactImg2, contactImg3, contactImg4];
  const projectImg = [projectImg1, projectImg2, projectImg3, projectImg4];
  const paths = ["", "About", "Projects", "Contact"];
  const pathsNames = ["Home", paths[1], paths[2], paths[3]];
  let left = document.getElementsByClassName("leftWing");
  let right = document.getElementsByClassName("rightWing");

  const openingAnimation = () => {
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos == 50) {
        clearInterval(id);
      } else {
        pos++;
        left[0].style.left = -pos + "vw";
        right[0].style.right = -pos + "vw";
      }
    }
  };

  const closingAnimation = (path) => {
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
      if (pos == 50) {
        clearInterval(id);
      } else {
        pos++;
        left[0].style.left = -50 + pos + "vw";
        right[0].style.right = -50 + pos + "vw";
      }
    }
    return new Promise(() => {
      setTimeout(() => {
        setPath(path);
        setLastPath(path);
      }, 2000);
    });
  };

  const NavLink = (props) => (
    <h4>
      <Link
        {...props}
        onClick={async () => {
          console.log(lastPath, props.path);
          if (lastPath !== props.path) {
            await closingAnimation(props.path);
          }
        }}
      />
    </h4>
  );

  useEffect(() => {
    let RNG = Math.floor(Math.random() * 4);
    setTimeout(function () {
      openingAnimation();
    }, 500);
    switch (path) {
      case "Home":
        setImg(homeImg);
        break;
      case "About":
        setImg(aboutImg[RNG]);
        break;
      case "Contact":
        setImg(contactImg[RNG]);
        break;
      case "Projects":
        setImg(projectImg[RNG]);
        break;
    }
  }, [path, aboutImg, contactImg, projectImg]);

  const returnContent = (path) => {
    switch (path) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      default:
        return "";
    }
  };

  return (
    <div className="App">
      <div className="leftWing"></div>
      <div className="rightWing"></div>
      <header className="App-header">
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
                {path}
              </a>
            </h1>
            <div className="glass_background" id="head">
              {paths.map((val, key) => {
                return (
                  <NavLink to={"/" + paths[key]} path={pathsNames[key]}>
                    {pathsNames[key]}
                  </NavLink>
                );
              })}
            </div>
          </div>
          {returnContent(path)}
        </div>
      </header>
    </div>
  );
}

export default App;
