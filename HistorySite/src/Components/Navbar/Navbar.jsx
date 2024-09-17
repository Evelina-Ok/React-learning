import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss"

export function Navbar () {
    return (
      <nav className={style.navStyle}>
        <ul>
            <li>
                <NavLink style={({ isActive }) => isActive? { textDecoration: "underline", fontWeight: "bold", outline: "1px solid $copper" } : { textDecoration: "none" }} to={"/"}>By Date</NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) => isActive? { textDecoration: "underline", fontWeight: "bold", outline: "1px solid $copper" } : { textDecoration: "none" }} to={"/"}>Today</NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) => isActive? { textDecoration: "underline", fontWeight: "bold", outline: "1px solid $copper" } : { textDecoration: "none" }} to={"/since"}>Since</NavLink>
            </li>
        </ul>
      </nav>  
    );
}