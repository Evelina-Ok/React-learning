import style from "./Header.module.scss";

export function Header ({header, paragraph}) {
    return (
        <header className={style.headerStyle}>          
            <div className={style.headerBox}>
                <h1>{header}</h1>
                <p>{paragraph}</p>
            </div>
            <img src="src/assets/header.jpg" alt="" />

        </header>
    )
}