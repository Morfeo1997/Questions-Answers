import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Challenge from '../Data/HistoryData.json';
import QuestionCard from '../components/QuestionCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import GameSummary from '../components/GameSummary.jsx';

function HistoryChallenge() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);
  
  // Nuevos estados para manejo de IDs
  const [currentGameIds, setCurrentGameIds] = useState([]); // IDs para el juego actual
  const [usedIds, setUsedIds] = useState([]); // IDs ya utilizados en juegos anteriores
  const [selectedQuestions, setSelectedQuestions] = useState([]); // Preguntas seleccionadas para el juego actual

  // Función para obtener IDs disponibles (que no estén en usedIds)
  const getAvailableIds = () => {
    const allIds = Challenge.game.map(question => question.id);
    return allIds.filter(id => !usedIds.includes(id));
  };

  // Función para seleccionar 10 IDs aleatorios de los disponibles
  const selectRandomIds = () => {
    const availableIds = getAvailableIds();
    
    // Si no hay suficientes preguntas disponibles, reiniciar el array de usedIds
    if (availableIds.length < 10) {
      setUsedIds([]);
      const allIds = Challenge.game.map(question => question.id);
      // Mezclar y tomar 10
      const shuffled = [...allIds].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 10);
    }
    
    // Mezclar los IDs disponibles y tomar 10
    const shuffled = [...availableIds].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  };

  // Función para obtener preguntas por sus IDs
  const getQuestionsByIds = (ids) => {
    return ids.map(id => Challenge.game.find(question => question.id === id));
  };

  // Inicializar el juego al montar el componente
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const selectedIds = selectRandomIds();
    setCurrentGameIds(selectedIds);
    setSelectedQuestions(getQuestionsByIds(selectedIds));
  };

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option.correct) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Espera solo por la animación
    setTimeout(() => {
      setIsAnswered(false);
      setSelectedAnswer(null);

      setTimeout(() => {
        if (currentQuestion < 9) { // Cambiado a 9 porque siempre serán 10 preguntas (0-9)
          setCurrentQuestion((prev) => prev + 1);
        } else {
          // Agregar los IDs del juego actual al array de usedIds
          setUsedIds(prev => [...prev, ...currentGameIds]);
          setGameFinished(true);
        }
      }, 300); // pequeño delay para que el color desaparezca primero
    }, 1200); // tiempo visible para mostrar color
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setGameFinished(false);
    
    // Inicializar un nuevo juego con nuevas preguntas
    initializeGame();
  };

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-950  to-purple-950 flex items-center justify-center p-4">
        <GameSummary
          correctAnswers={correctAnswers}
          totalQuestions={10} // Siempre serán 10 preguntas
          onRestart={restartGame}
          transitionType={Challenge.transitions}
        />
      </div>
    );
  }

  // Si aún no se han cargado las preguntas, mostrar loading
  if (selectedQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando preguntas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 to-orange-600 flex flex-col items-center p-4 pt-8">
      <div className="w-full max-w-2xl mb-8">
        <h1 className="text-3xl font-bold text-center text-black mb-2">
          {Challenge.title}
        </h1>
        <p className="text-center text-gray-900 mb-6">
          {Challenge.description}
        </p>
      </div>

      <ProgressBar
        current={currentQuestion + 1} // Mostrar pregunta actual (1-10)
        total={10} // Siempre serán 10 preguntas
        correct={correctAnswers}
        countColor='text-grey-900'
        correctColor='text-emerald-700'
      />

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestion}
          question={selectedQuestions[currentQuestion]}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          transitionType={Challenge.transitions}
        />
      </AnimatePresence>



      <div className='min-w-screen flex justify-center'>
        <button
          onClick={() => navigate("/")}
          className="mt-6 cursor-pointer  px-16 py-3 bg-white text-amber-600 text-xl font-bold rounded-xl shadow-lg hover:bg-amber-200 hover:text-orange-800 transition duration-300"
        >
          Volver
        </button>
      </div>
    </div>
  );
}

export default HistoryChallenge;