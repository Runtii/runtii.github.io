import * as React from "react";

export default function Contact() {
  return (
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
  );
}
