import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from  "./components/Navbar"
import Home from './pages/Home'
import CodeView from './pages/Codeview'
const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code/:id" element={<CodeView />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
// 694d4daca3495eaa82f435ee