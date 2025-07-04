import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { loadGameData } from './Data/LocalGameData.js';
import QuestionCard from './QuestionCard.jsx';
import ProgressBar from './ProgressBar.jsx';
import GameSummary from './GameSummary.jsx';
import { useParams } from 'react-router-dom';

function TriviaGameLocal() {
  const [gameData, setGameData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const savedData = loadGameData(id);
    if (savedData) {
      setGameData(savedData);
    }
  }, [id]);

  const handleAnswer = option => {
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setTimeout(() => {
      if (currentQuestion < gameData.game.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnswered(false);
        setSelectedAnswer(null);
      } else {
        setGameFinished(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setGameFinished(false);
  };

  if (!gameData) {
    return (
      <div className='min-h-screen bg-custom-l flex items-center justify-center'>
        <div className='text-xl'>
          No hay juego disponible en el almacenamiento local
        </div>
      </div>
    );
  }

  if (gameFinished) {
    return (
      <div className='min-h-screen bg-custom-l flex items-center justify-center p-4'>
        <GameSummary
          correctAnswers={correctAnswers}
          totalQuestions={gameData.game.length}
          onRestart={restartGame}
          transitionType={gameData.transitions}
        />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-custom-l flex flex-col items-center p-4 pt-8'>
      <div className='w-full bg-white p-4 rounded-md max-w-2xl mb-8'>
        <h1 className='text-3xl font-bold text-center font-Pangolin text-black mb-2'>
          {gameData.title}
        </h1>
        <p className='text-center text-gray-900 font-Roboto mb-6'>{gameData.description}</p>
      </div>

      <ProgressBar
        current={gameData.game[currentQuestion].level}
        total={gameData.game.length}
        correct={correctAnswers}
      />

      <AnimatePresence mode='wait'>
        <QuestionCard
          key={currentQuestion}
          question={gameData.game[currentQuestion]}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          transitionType={gameData.transitions}
        />
      </AnimatePresence>
    </div>
  );
}

export default TriviaGameLocal;
