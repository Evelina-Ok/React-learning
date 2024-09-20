import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss"

export function Navbar () {
    return (
      <nav className={style.navStyle}>
        <ul>
            <li>
                <NavLink style={({ isActive }) => isActive? { textDecoration: "underline", fontWeight: "bold", outline: "1px solid $copper" } : { textDecoration: "none" }} to={"/bydate"}>By Date</NavLink>
            </li>
            <li> 
           {/* --- today is our index page as is indicated in App.jsxm therefore, link to is only "/" --- */}
                <NavLink style={({ isActive }) => isActive? { textDecoration: "underline", fontWeight: "bold", outline: "1px solid $copper" } : { textDecoration: "none" }} to={"/"}>Today</NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) => isActive? { textDecoration: "underline", fontWeight: "bold", outline: "1px solid $copper" } : { textDecoration: "none" }} to={"/since"}>Since</NavLink>
            </li>
        </ul>
      </nav>  
    );
}

