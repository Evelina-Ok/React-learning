import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { BookIcon } from "../BookIcon/BookIcon";
import { useContext } from "react";

export function Navbar() {
  // we're adding 'handleChangeDarkMode' because we're making a sort of a button only in Navbar that will trigger dark mode in all other places like components or pages
  const {isDarkMode, handleChangeDarkMode} = useContext(ThemedContext)

  console.log('isDarkMode', isDarkMode);
  

  return (
    <nav className={isDarkMode === true ? style.darkModeNav : style.navStyling}>
      <ul>
        <li>
          {/* when we are on the "home" page, meaning active, the page link will be underline, otherwise it won't be */}
          {/* inside jsx files camelCase is used */}
          <NavLink style={({ isActive }) => isActive ? { textDecoration: "underline" } : { textDecoration: "none"  }} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => isActive ? { textDecoration: "underline" } : { textDecoration: "none" }} to={"/about"}>About</NavLink>
        </li>
        <li>
          {/* // API in navigation will open the link to api
              // target="_blank" means that document will open in a new tab */}
          <a href="https://dictionaryapi.dev/" target="_blank">Api</a>
        </li>
      </ul>
      <div className={style.navCirle}></div>

      <div className={style.bookStyling}>
          <BookIcon/>
      </div>
    </nav>
  );
}
