import { Link, NavLink, Outlet } from "react-router-dom";
import { Divider } from "../components/common/Divider";
import { LanguageButton } from "../components/main/LanguageButton";

export const MainLayout = () => {
  return (
    <>
      <div className="appBar">
        <div className="loginBar">
          {/* seperate to a seperate component with icon. */}
          <Link to="install" className="install">
            Install Steam
          </Link>
          <Link to="login">login</Link>
          <Divider orientation="vertical" />
          <LanguageButton />
        </div>
        <div className="navBar">
          <div className="logo" />
          <div className="nav-links">
            <NavLink to="store">Store</NavLink>
            <NavLink to="store">Community</NavLink>
            <NavLink to="store">About</NavLink>
            <NavLink to="store">Support</NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
