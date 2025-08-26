import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from './Pages/Home'
import HistoryGame from './Pages/HistoryChallenge'
import ArtGame from './Pages/ArtChallenge'
import MathGame from './Pages/MathChallenge'
import SportsGame from './Pages/SportsChallenge'
import CinemaGame from './Pages/CinemaChallenge'
import MusicGame from './Pages/MusicChallenge'
import ScienceGame from './Pages/ScienceChallenge'
import NutritionGame from "./Pages/NutritionChallenge";

function App() {


  return (
    <>
      <div className='bg-gradient-to-b from-blue-950 to-violet-950'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<HistoryGame />} />
            <Route path="/arte" element={<ArtGame />} />
            <Route path="/matematicas" element={<MathGame />} />
            <Route path="/deporte" element={<SportsGame />} />
            <Route path="/cine" element={<CinemaGame />} />
            <Route path="/musica" element={<MusicGame />} />
            <Route path="/ciencia" element={<ScienceGame />} />
            <Route path="/nutricion" element={<NutritionGame />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
