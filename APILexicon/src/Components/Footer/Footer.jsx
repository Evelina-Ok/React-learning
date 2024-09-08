import style from "./Footer.module.scss";

export function Footer () {
    return (
        <footer className={style.footerStyling}>
            <section>
                <li>Address:</li>
                <li>Somestreet 232</li>
                <li>Luxemborg</li>
            </section>
            <section>
                <li>Contact:</li>
                <li>Email: somemail@mail.com</li>
                <li>Phone: 44332243</li>
            </section>
            <section>
                <li>With special thanks to</li>
                {/* target="_blank" opens in a separate window */}
                <li><a href="https://disctionaryapi.dev" target="_blank"></a>https://disctionaryapi.dev</li>
                <li>For the awesome API</li>
            </section>
            <section className={style.logoStyling}>
                <div>
                    <BookIcon/>
                </div>
                <h4>Lexiconline</h4>
            </section>
        </footer>
    )
}