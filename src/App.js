import "./App.scss";
import React, { useCallback, useEffect, useState } from "react";
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
 * path *state - current path
 *
 * lastPath *state - last path used to prevent going from eg. Home -> Home
 *
 * img *state - current background image
 *
 * paths *Arr - names of paths that are used by the browser
 *
 * pathNames *Arr - names of pages that are used throughout displayed page
 *
 * fromUrl *bool - used to indicate if page was refreshed or not and to prevent breaking of door animation
 *
 * location *react-router-dom object - used to determine which patch should be set inside locationFromUrl()
 *
 * animationTick *number [milliseconds] - determines length of door animation
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

  /**
   * pathname from *react-router-dom object useLocation() - used to determine which patch should be set
   */

  const locationFromUrl = () => {
    let { pathname } = location;

    if (pathname === "" || pathname === "/") pathname = "/Home";

    pathname = pathname.slice(1);
    pathname = pathname[0].toUpperCase() + pathname.substring(1);

    if (pathsNames.includes(pathname)) {
      setPath(pathname);
      setLastPath(pathname);
      setFromUrl(false);
    }
  };
  /**
   * first iteration (after reload/load) has animation of opening and also fixes and sets URL and path
   */
  if (fromUrl) locationFromUrl();

  /**
   * @param state *String - indicates what part of animation should be triggered
   *
   * steamArray *Arr - contains DOM objects that are modified during animation
   */

  const animateSteam = useCallback((state) => {
    let steamArray = [
      document.getElementById("steam1"),
      document.getElementById("steam2"),
      document.getElementById("steam3"),
    ];

    if (state === "closing") {
      steamArray.map((val, key) => {
        key += 1;
        val.classList.add("steam" + key + "Burst");
        console.log(1);
        return 0;
      });
    } else if (state === "opening") {
      steamArray.map((val, key) => {
        key += 1;
        val.classList.remove("steam" + key + "Burst");
        val.classList.add("steam" + key + "FadingAway");
        return 0;
      });
      setTimeout(function () {
        animateSteam("opened");
      }, 15 * animationTick);
    } else {
      steamArray.map((val, key) => {
        key += 1;
        val.classList.remove("steam" + key + "FadingAway");
        return 0;
      });
    }
  }, []);

  /**
   * @param state *String - indicates what part of animation should be triggered
   *
   * left and right *Obj - DOM objects that are modified during animation
   *
   */

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

  /**
   * @param state *String - indicates what part of animation should be triggered
   *
   * tick - shortened animationTick *int [milliseconds]
   *
   * steamTiming *number - time [milliseconds] that indicates length of bursting and fading away parts of animation
   *
   * doorTiming *number - time [milliseconds] that indicates length of opening and closing parts of door animation
   */

  const animate = useCallback(
    (state) => {
      let tick = animationTick;
      let steamTiming = state === "opening" ? tick : 12 * tick;
      let doorTiming = state === "opening" ? 6 * tick : 0;
      setTimeout(function () {
        animateSteam(state);
      }, steamTiming);
      setTimeout(function () {
        animateDoors(state);
      }, doorTiming);
    },
    [animateSteam]
  );

  /**
   * @param navigationPath - path from user input (out of NavLinks)
   * @returns Promise that has 20 times tick latency of setting path (to ensure that doors are closed while background image is changing)
   * lag *time [milliseconds] - latency between closing animation and changing background
   */

  const closingAnimation = (navigationPath) => {
    let lag = 20 * animationTick;
    animate("closing");
    return new Promise(() => {
      setTimeout(() => {
        setPath(navigationPath);
        setLastPath(navigationPath);
      }, lag);
    });
  };

  /**
   * aboutImg *Arr - contains imported images for about page
   *
   * contactImg *Arr - contains imported images for contact page
   *
   * projectImg *Arr - contains imported images for project page
   *
   * tick - shortened animationTick *int [milliseconds]
   *
   * RNG *number - random number that indicates which image will be set as background
   */

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
  }, [path, animate]);

  /**
   * @param props - data from NavLink obj containing Url and path name
   * @returns Link obj with additional onClink that triggers door animation
   */

  const NavLink = (props) => (
    <h4>
      <Link
        {...props}
        onClick={async () => {
          if (lastPath !== props.path) {
            await closingAnimation(props.path);
          }
        }}
      />
    </h4>
  );

  /**
   * @param path - path from Url/internal functions used to determine what content should be displayed
   *
   * @returns content from components such as "Home", "About", "Contact" and "Project" pages
   */

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

  /**
   * main DOM structure
   */
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
          <nav className="title">
            <div className="glass_background" id="title">
              <NavLink to={"/"} path={"Home"} className="mainLink">
                {path}
              </NavLink>
            </div>
            <div className="glass_background" id="head">
              {paths.map((val, key) => {
                return (
                  <NavLink
                    to={"/" + paths[key]}
                    path={pathsNames[key]}
                    key={key}
                  >
                    {pathsNames[key]}
                  </NavLink>
                );
              })}
            </div>
          </nav>
          {returnContent(path)}
        </div>
      </header>
    </div>
  );
}

export default App;
