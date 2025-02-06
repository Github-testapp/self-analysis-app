import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';
import { RootState } from '../store';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const results = useSelector((state: RootState) => state.test.results);

  if (!results) {
    navigate('/test');
    return null;
  }

  const categories = [
    { name: '思考の柔軟性', value: results.categories.flexibility * 100 },
    { name: '自己認識', value: results.categories.awareness * 100 },
    { name: '思考パターン', value: results.categories.thinking * 100 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto px-4 py-8"
    >
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          分析結果
        </h2>

        {/* レーダーチャート */}
        <div className="w-full h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={categories}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar
                name="スコア"
                dataKey="value"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 分析コメント */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              思考の特徴
            </h3>
            <p className="text-gray-600">
              あなたの思考パターンは柔軟性が高く、新しい視点を取り入れる傾向があります。
              自己認識も比較的高いレベルにあり、自分の考えや行動を客観的に見ることができます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              改善のヒント
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>異なる視点からの意見を積極的に取り入れてみましょう</li>
              <li>定期的に自己振り返りの時間を設けることをお勧めします</li>
              <li>思考の過程を意識的に観察する習慣をつけてみましょう</li>
            </ul>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/test')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                    transition-colors duration-200 font-medium"
          >
            もう一度テストを受ける
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Results;