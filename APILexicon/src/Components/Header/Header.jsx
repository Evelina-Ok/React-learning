import style from "./Header.module.scss";

export function Header () {
    return (
        <header className={style.headerStyling}>
        <div className={style.headerText}>
            <h1>Lexiconline</h1>
        </div>
        </header>
    );
}