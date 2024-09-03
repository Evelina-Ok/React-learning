import { useState } from "react";
import { useEffect } from "react";
import { MainLayout } from "./Layouts/MainLayout";
import { About } from "./Pages/About";
import { Concepts } from "./Pages/Concepts";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          //checks if /home exists, and if it does, then directs to Home
          {/* <Route path={`/home`} element={<Home />}/> */}
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={`/about`} element={<About />} />
            <Route path={`/concepts`} element={<Concepts />} />
            <Route path={`/contact`} element={<Contact />} />
            <Route path={"/*"} element={<div>404...Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
