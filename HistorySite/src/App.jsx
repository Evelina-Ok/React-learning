import { useState } from 'react'

import './App.scss'
import { MainLayout } from './Layouts/MainLayout'
import { Today } from './Pages/Today';
import { Since } from './Pages/Since';
import { NoPage } from './Pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [input, setInput] = useState([])
  const [result, setResult] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
      {/* <Route index element={<ByDate />} /> */}
      <Route path={`/today`} element={<Today />} />
      <Route path={`/since`} element={<Since />} />
      <Route path={"/*"} element={<NoPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
