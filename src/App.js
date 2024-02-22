import "./App.scss";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  const paths = ["", "About", "Projects", "Contact"];
  const pathsNames = ["Home", paths[1], paths[2], paths[3]];
  const [fromUrl, setFromUrl] = useState(true);
  const location = useLocation();
  const animationTick = 80;

  const locationFromUrl = () => {
    let { pathname } = location;

    if (pathname === "" || pathname === "/") pathname = "/Home";

    pathname = pathname.slice(1);
    pathname = pathname[0].toUpperCase() + pathname.substring(1);

    if (pathsNames.includes(pathname) && pathsNames !== pathname) {
      setPath(pathname);
      setLastPath(pathname);
      setFromUrl(false);
      console.log(location, path, lastPath);
    }
  };

  if (fromUrl) locationFromUrl();

  const addClass = (element, cssClass) => {
    element.classList.add(cssClass);
  };

  const removeClass = (element, cssClass) => {
    element.classList.remove(cssClass);
  };

  const animateSteam = (state) => {
    let steam1 = document.getElementById("steam1");
    let steam2 = document.getElementById("steam2");
    let steam3 = document.getElementById("steam3");
    let steamArray = [steam1, steam2, steam3];

    if (state === "closing") {
      steamArray.map((val, key) => {
        key += 1;
        addClass(val, "steam" + key + "Burst");
        return 0;
      });
    } else if (state === "opening") {
      steamArray.map((val, key) => {
        key += 1;
        removeClass(val, "steam" + key + "Burst");
        addClass(val, "steam" + key + "FadingAway");
        return 0;
      });
      setTimeout(function () {
        animateSteam("opened");
      }, 30 * animationTick);
    } else {
      steamArray.map((val, key) => {
        key += 1;
        removeClass(val, "steam" + key + "FadingAway");
        return 0;
      });
    }
  };

  const animateDoors = (state) => {
    let left = document.getElementsByClassName("leftWing");
    let right = document.getElementsByClassName("rightWing");

    if (state === "opening") {
      left[0].classList.add("leftOpen");
      left[0].classList.remove("leftClose");
      right[0].classList.add("rightOpen");
      right[0].classList.remove("rightClose");
    } else {
      left[0].classList.add("leftClose");
      left[0].classList.remove("leftOpen");
      right[0].classList.add("rightClose");
      right[0].classList.remove("rightOpen");
    }
  };

  const animate = (state) => {
    let tick = animationTick;
    let steamDuration = state === "opening" ? tick : 12 * tick;
    let openingDuration = state === "opening" ? 6 * tick : 0;
    setTimeout(function () {
      animateSteam(state);
    }, steamDuration);
    setTimeout(function () {
      animateDoors(state);
    }, openingDuration);
  };

  useEffect(() => {
    const aboutImg = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];
    const contactImg = [contactImg1, contactImg2, contactImg3, contactImg4];
    const projectImg = [projectImg1, projectImg2, projectImg3, projectImg4];
    let tick = animationTick;
    let RNG = Math.floor(Math.random() * 4);

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
      default:
        break;
    }
    setTimeout(animate("opening"), 20 * tick);
  }, [path]);

  const closingAnimation = (path) => {
    let duration = 20 * animationTick;
    animate("closing");
    return new Promise(() => {
      setTimeout(() => {
        setPath(path);
        setLastPath(path);
      }, duration);
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
      <div id="steam1"></div>
      <div id="steam2"></div>
      <div id="steam3"></div>
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
              <NavLink to={"/"} path={"Home"} className="mainLink">
                {path}
              </NavLink>
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
