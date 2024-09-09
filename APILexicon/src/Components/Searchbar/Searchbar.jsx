import style from "./Searchbar.module.scss"

export function Searchbar ({title, input, action}) {
    return (
        <>
        <div className={style.searchBoxtStyling}>
            <h2>{title}</h2>
        </div>
        <div className={style.searchStyling}>
            <input type="search" name="searchbar" onChange={input} placeholder="Search for a word" />
            <button onClick={action}>Search</button>
        </div>
        </>
    );
}