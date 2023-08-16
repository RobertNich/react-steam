import { Link, NavLink, Outlet } from "react-router-dom";
import { LanguageButton } from "../components/main/LanguageButton";
import logoImage from "../assets/logo_steam.svg";
import downloadImage from "../assets/icon-download.svg";
import { useState } from "react";

export const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="appBar">
        <div className="loginBar">
          <Link to="install" className="install">
            <img width={20} src={downloadImage} alt="download" />
            <p>Install Steam</p>
          </Link>
          <Link style={{ color: "#b9b9b9" }} to="login">
            login
          </Link>
          <p style={{ paddingLeft: "15px" }}>|</p>
          <LanguageButton />
        </div>
        <div className="navBar">
          <span className="hamburger" onClick={toggleMenu}>
            ☰
          </span>
          <img src={logoImage} width={180} alt="logo" />
          <div className={`nav-links ${menuOpen ? "open" : "closed"}`}>
            <NavLink
              style={{ color: "#1c9cf1", borderBottom: "3px solid #1c9cf1" }}
              to="store"
            >
              STORE
            </NavLink>
            <NavLink to="store">COMMUNITY</NavLink>
            <NavLink to="store">ABOUT</NavLink>
            <NavLink to="store">SUPPORT</NavLink>
          </div>
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};
