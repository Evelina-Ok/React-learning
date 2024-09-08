import { useState } from 'react'
import { useEffect } from 'react'

import { MainLayout } from './Layouts/MainLayout';
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Api } from "./Pages/Api";
import { NoPage } from "./Pages/NoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <BrowserRouter>
        <Routes>
          //checks if /home exists, and if it does, then directs to Home
          {/* <Route path={`/home`} element={<Home />}/> */}
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={`/about`} element={<About />} />
            <Route path={`/api`} element={<Api />} />
            <Route path={"/*"} element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
