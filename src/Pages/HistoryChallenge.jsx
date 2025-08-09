import React, { useState } from 'react';
import {  AnimatePresence } from 'framer-motion';
import Challenge from '../Data/HistoryData.json';
import QuestionCard from '../components/QuestionCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import GameSummary from '../components/GameSummary.jsx';

function HistoryChallenge() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);

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
      if (currentQuestion < Challenge.game.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
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
  };

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <GameSummary
          correctAnswers={correctAnswers}
          totalQuestions={Challenge.game.length}
          onRestart={restartGame}
          transitionType={Challenge.transitions}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  flex flex-col items-center p-4 pt-8">
      <div className="w-full max-w-2xl mb-8">
        <h1 className="text-3xl  font-bold text-center text-black mb-2">
          {Challenge.title}
        </h1>
        <p className="text-center text-gray-900 mb-6">
          {Challenge.description}
        </p>
      </div>

      <ProgressBar
        current={Challenge.game[currentQuestion].level}
        total={Challenge.game.length}
        correct={correctAnswers}
      />

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestion}
          question={Challenge.game[currentQuestion]}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          transitionType={Challenge.transitions}
        />
      </AnimatePresence>
    </div>
  );
}

export default HistoryChallenge;