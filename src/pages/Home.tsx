import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Target, RefreshCw } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: '深層心理分析',
      description: '無意識の思考パターンを可視化し、自己理解を深めます。'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: '客観的な視点',
      description: '第三者的な視点から自己分析を行い、新たな気づきを得られます。'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />,
      title: '継続的な成長',
      description: '定期的なテストで自己の変化を追跡し、成長を実感できます。'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      {/* ヒーローセクション */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          自己分析チェックテスト
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          あなたの思考パターンを理解し、より良い自己理解へ
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/test')}
          className="px-8 py-4 bg-blue-500 text-white rounded-lg font-medium
                   hover:bg-blue-600 transition-colors duration-200"
        >
          テストを始める
        </motion.button>
      </div>

      {/* 特徴紹介 */}
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 使い方ガイド */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          使い方
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-600">
          <li>「テストを始める」ボタンをクリック</li>
          <li>質問に正直に答えていきましょう</li>
          <li>結果を確認し、自己理解を深めましょう</li>
          <li>定期的にテストを受けて、変化を追跡しましょう</li>
        </ol>
      </div>
    </motion.div>
  );
};

export default Home;