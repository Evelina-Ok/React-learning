
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";

export function MainLayout () {
    return (
        <>
        <Outlet />
        <Navbar />
        </>
    )
}