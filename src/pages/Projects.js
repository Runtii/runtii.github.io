import * as React from "react";
import { Link } from "react-router-dom";

const returnLink = (path, pathName, key) => {
  return (
    <Link to={"/" + path} className="links" key={{ key }}>
      {pathName}
    </Link>
  );
};

export default function Projects({ paths, pathNames, pageNumber }) {
  return (
    <>
      <div className="title">
        <h1 className="glass_background" id="title">
          {pathNames[pageNumber]}
        </h1>
        <h4 className="glass_background" id="head">
          {paths.map((val, key) => {
            return returnLink(val, pathNames[key], key);
          })}
        </h4>
      </div>

      <main id="main">
        <h2 className="glass_background content" id="first">
          My projects
        </h2>

        <div className="glass_background content">
          <a href="https://github.com/Runtii/Notes-wallet">
            <h4>Notes wallet</h4>
          </a>
          <p>
            Notes wallet was crated as a small app to store notes. App is
            divided into two segments front-end and back-end. On front-end users
            can create new accounts and of course login to them. While being
            logged in they can create new notes, read, edit and delete them (all
            standard CRUD actions). Back-end works as Rest-API, it has all
            end-nodes to handle CRUD actions and handle users creation and
            logging in. Passwords are encrypted and are stored inside data base
            with notes.
          </p>
        </div>
        <div className="glass_background content">
          <a href="https://github.com/Runtii/password_wallet">
            <h4>Password wallet</h4>
          </a>
          <p>
            Password wallet was created as app to store passwords. App is
            divided into back-end and front-end. On front end users can create
            accounts, during process of creation they can choose between two
            types of password encryption. While they are logged in, they have
            ability to create new passwords with few fields describing them.
            Saved password is encrypted and in that state is stored inside
            database. Passwords are sent encrypted and are decrypted only if
            user requests that. Users have also ability to share their passwords
            with other users. Back-end works as Rest-API, with all end-nodes to
            handle CRUD actions and other actions.
          </p>
        </div>
        <div className="glass_background content" id="last">
          <a href="https://github.com/Runtii/IS-APP">
            <h4>IS APP</h4>
          </a>
          <p></p>
        </div>
      </main>
    </>
  );
}
