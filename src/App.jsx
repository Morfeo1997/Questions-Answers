import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from './Pages/Home'
import HistoryGame from './Pages/HistoryChallenge'

function App() {


  return (
    <>
      <div className='bg-gradient-to-b from-blue-950 to-violet-950'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<HistoryGame />} />{/*
            <Route path="/arte" element={<ArtGame />} />
            <Route path="/matematicas" element={<MathGame />} />
            <Route path="/deporte" element={<SportsGame />} />
            */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
