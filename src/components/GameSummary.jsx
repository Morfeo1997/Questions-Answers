import React from 'react';
import AnimatedContainer from './AnimatedContainer.jsx';

function GameSummary({ correctAnswers, totalQuestions, onRestart, transitionType }) {
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <AnimatedContainer
      transitionType={transitionType}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center"
    >
      <h2 className="text-2xl font-bold mb-4">¡Juego Terminado!</h2>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        {percentage.toFixed(0)}%
      </div>
      <p className="mb-6 text-gray-600">
        Respondiste correctamente {correctAnswers} de {totalQuestions} preguntas
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-200 text-blue-950 cursor-pointer px-6 py-2 rounded-lg hover:bg-blue-950 hover:text-blue-200 transition-colors duration-300"
      >
        Jugar de nuevo
      </button>
    </AnimatedContainer>
  );
}

export default GameSummary;
