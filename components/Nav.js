import { useState } from "react";
import Link from "next/link";

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">Dota Stats</a>
          </Link>
          <a
            role="button"
            className={`navbar-burger ${open ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={`navbar-menu ${open ? "is-active" : ""}`}>
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
