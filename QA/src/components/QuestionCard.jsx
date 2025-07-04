import React from 'react';
import AnimatedContainer from './AnimatedContainer';

function QuestionCard({
  question,
  onAnswer,
  isAnswered,
  selectedAnswer,
  transitionType,
}) {
  return (
    <AnimatedContainer
      transitionType={transitionType}
      className=' bg-white p-6 rounded-md shadow-lg max-w-2xl w-full'
    >
      <h2 className='text-xl font-semibold mb-4 text-black'>
        {question.question}
      </h2>
      <div className='grid grid-rows-2 grid-cols-2 gap-3'>
        {question.options.map((optionItem, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && onAnswer(optionItem)}
            className={`w-full h-full p-3 text-left cursor-pointer  rounded-lg border-gray-500 transition-colors hover:scale-105  duration-500 ${
              isAnswered
                ? optionItem.correct
                  ? 'bg-green-200 border-green-500'
                  : selectedAnswer?.option === optionItem.option
                  ? 'bg-red-200 border-red-500'
                  : 'bg-gray-100'
                : 'hover:bg-blue-50 bg-gray-50'
            } border ${
              isAnswered &&
              (optionItem.correct || selectedAnswer?.option === optionItem.option)
                ? 'border-2'
                : 'border-2'
            }`}
            disabled={isAnswered}
          >
            {optionItem.option}
          </button>
        ))}
      </div>
    </AnimatedContainer>
  );
}

export default QuestionCard;
