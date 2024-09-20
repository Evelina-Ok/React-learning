import { useState } from 'react'

import './App.scss'
import { MainLayout } from './Layouts/MainLayout'
import { Today } from './Pages/Today';
import { Since } from './Pages/Since';
import { NoPage } from './Pages/NoPage';
import { ByDate } from './Pages/ByDate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery, useQueryClient } from '@tanstack/react-query';




function App() {

  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
      <Route index element={<Today />} />
      <Route path={`/bydate`} element={<ByDate />} />
      <Route path={`/since`} element={<Since />} />
      <Route path={"/*"} element={<NoPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
