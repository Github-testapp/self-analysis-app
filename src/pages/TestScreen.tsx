import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import { questions } from '../data/questions';
import { setQuestions, addAnswer, setResults } from '../store/slices/testSlice';

const TestScreen: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentQuestion, answers, isComplete } = useSelector(
        (state: RootState) => state.test
    );

    useEffect(() => {
        // 質問データをストアに設定
        dispatch(setQuestions(questions));
    }, [dispatch]);

    useEffect(() => {
        if (isComplete) {
            // 結果を計算して保存
            const results = calculateResults(answers);
            dispatch(setResults(results));
            navigate('/results');
        }
    }, [isComplete, navigate, dispatch, answers]);

    const handleAnswer = (answer: string | number) => {
        if (currentQuestion < questions.length) {
            dispatch(
                addAnswer({
                    questionId: questions[currentQuestion].id,
                    value: answer,
                    timestamp: Date.now(),
                })
            );
        }
    };

    const calculateResults = (answers: any[]) => {
        // 仮の結果計算ロジック
        return {
            categories: {
                flexibility: 0.8,
                awareness: 0.6,
                thinking: 0.7,
            },
            timestamp: Date.now(),
        };
    };

    if (!questions || questions.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-600">質問を読み込んでいます...</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <ProgressBar
                current={currentQuestion + 1}
                total={questions.length}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                {questions[currentQuestion] && (
                    <QuestionCard
                        question={questions[currentQuestion]}
                        onAnswer={handleAnswer}
                    />
                )}
            </motion.div>
        </div>
    );
};

export default TestScreen;