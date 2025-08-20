import React from 'react';

function ProgressBar({ current, total, correct }) {
  return (
    <div className="w-full max-w-2xl mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-950">
          Pregunta {current} de {total}
        </span>
        <span className="text-sm font-medium text-green-950">
          Correctas: {correct}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
