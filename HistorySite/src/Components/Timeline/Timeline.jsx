import style from "./Timeline.module.scss";
// import { TimelineGraph } from "./TimelineGraphic/TimelineGraphic";
import { TimelineStyle } from "./TimelineStyle/TimelineStyle";

export function Timeline({year, extract}) {
  const events = []


  return (
    
       
        <div className={style.timelineStyle}>
          <article>
            <h4>{year}</h4>
            <p>{extract}</p>
            <footer>
              <a href="#">Read more:</a>
              <img src="../src/assets/Bookmark.svg" alt="bookmark" />
            </footer>
          </article>
        </div>
  );
}



         {/* {data?.events ? ( */}
        {/* ) : null} */}
    


{/* // img onClick={action} */}
