
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Timeline } from "../Components/Timeline/Timeline";
// import { TimelineGraph } from "../Components/Timeline/TimelineGraphic/TimelineGraphic";
import { TimelineStyle } from "../Components/Timeline/TimelineStyle/TimelineStyle";

export function MainLayout () {
    return (
        <>
        
       
  
        {/* <TimelineGraph /> */}
        <Outlet />
   

        </>
    )
}