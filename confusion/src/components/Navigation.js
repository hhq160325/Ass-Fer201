import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

export default function Navigation() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <nav
        className="NavHeader d-flex justify-content-between"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul className="Tabpanel">
          <li>
            <Link
              to="/"
              className="active Links"
              href="#home"
              style={{ color: theme.color }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="./components/Contact"
              className="Links"
              href="#contact"
              style={{ color: theme.color }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
