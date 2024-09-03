import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={style.navStyling}>
      <ul>
        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "black" }} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "black" }} to={"/concepts"}>Concepts</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "black" }} to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "black" }} to={"/contact"}>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
