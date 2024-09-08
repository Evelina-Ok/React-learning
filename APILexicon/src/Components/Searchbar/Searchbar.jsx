import style from "./Searchbar.module.scss"

export function Searchbar () {
    return (
        <div className={style.searchStyling}>
            <input type="search" name="searchbar" onChange={input} placeholder="Search for a word" />
            <button onClick={action}>Search</button>
        </div>
    );
}