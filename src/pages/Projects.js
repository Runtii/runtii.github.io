import * as React from "react";

export default function Projects() {
  return (
    <main className="main">
      <div className="glass_background content" id="first">
        <h2>"My projects" - stored minerals</h2>
      </div>

      <div className="glass_background content">
        <a href="https://github.com/Runtii/Notes-wallet" className="links">
          <h4>Notes wallet</h4>
        </a>
        <p>
          Notes wallet was crated as a small app to store notes for University
          laboratories about back-end technologies. App is divided into two
          segments front-end and back-end. On front-end users can create new
          accounts and of course login to them. While being logged in they can
          create new notes, read, edit and delete them (all standard CRUD
          actions). Back-end works as Rest-API, it has all end-nodes to handle
          CRUD actions and handle users creation and logging in. Passwords are
          encrypted and are stored inside data base with notes.
        </p>
      </div>
      <div className="glass_background content">
        <a href="https://github.com/Runtii/password_wallet" className="links">
          <h4>Password wallet</h4>
        </a>
        <p>
          Password wallet was created to store passwords for University
          laboratories about web security. App is divided into back-end and
          front-end. On front end users can create accounts, during process of
          creation they can choose between two types of password encryption.
          While they are logged in, they have ability to create new passwords
          with few fields describing them. Saved password is encrypted and in
          that state is stored inside database. Passwords are sent encrypted and
          are decrypted only if user requests that. Users have also ability to
          share their passwords with other users. Back-end works as Rest-API,
          with all end-nodes to handle CRUD actions and other actions.
        </p>
      </div>
      <div className="glass_background content" id="last">
        <a href="https://github.com/Runtii/IS-APP" className="links">
          <h4>IS APP</h4>
        </a>
        <p>
          IS APP was created to display data from data base or other means of
          storing data for University Laboratories about System Integration. App
          is divided into back-end and front-end. Front part handle displaying
          data, data validation and connection with back-end. Back-end works as
          Rest-API with end nodes for actions performed on front-end. Back-end
          handles data flow flow between front and database or other files that
          data is saved into. As for now users can create into plain txt that is
          formatted to store data, XML format (back-end has custom XML parser)
          and also into database.
        </p>
      </div>
    </main>
  );
}
