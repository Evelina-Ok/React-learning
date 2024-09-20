import style from "./Header.module.scss";

export function Header ({header, paragraph, withinput}) {
    return (
        <>
        <header className={style.headerStyle}>          
            <div className={style.headerBox}>
                <h1>                 
                    {header}
                {/*--- adding prop 'withinput' and '&&' to the input to control where user can write in date in pages or where input is not needed ---*/}
                    {withinput&&
                    <>
                    <input type="text"/>
                    <span>/</span>
                    <input type="text"/>
                    </>}
                </h1>
                <p>{paragraph}</p>
            </div>
            <img src="src/assets/header.jpg" alt="" />

        </header>
        </>
    )
}