import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export function MainLayout() {
    return (
        <>
        <Navbar />
        <Header />
        <main>
            <Outlet />
        </main>    
        <Footer />    
        </>
    );
}