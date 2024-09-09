import style from "./BookIcon.module.scss";

export function BookIcon() {
  return (
    <div className={style.bookIconStyling}>
      <img src="../src/assets/Book.svg" alt="book" />
    </div>
  );
}
