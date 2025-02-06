import React from 'react';
import { motion } from 'framer-motion';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string | number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  const renderOptions = () => {
    switch (question.type) {
      case 'multiple':
        return (
          <div className="space-y-4">
            {question.options?.map((option) => (
              <motion.button
                key={option.id}
                className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-blue-500 
                         hover:bg-blue-50 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(option.value)}
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        );

      case 'scale':
        return (
          <div className="flex justify-between space-x-2 py-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <motion.button
                key={value}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 
                         hover:border-blue-500 hover:bg-blue-50 transition-colors duration-200
                         flex items-center justify-center text-lg font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onAnswer(value)}
              >
                {value}
              </motion.button>
            ))}
          </div>
        );

      case 'text':
        return (
          <div className="mt-4">
            <textarea
              className="w-full p-4 rounded-lg border border-gray-200 focus:border-blue-500 
                       focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
              rows={4}
              placeholder="あなたの回答を入力してください..."
              onChange={(e) => onAnswer(e.target.value)}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {question.content}
      </h2>
      {renderOptions()}
    </div>
  );
};

export default QuestionCard;