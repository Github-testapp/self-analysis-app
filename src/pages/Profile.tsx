import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Settings, History, User, ChevronRight, Bell } from 'lucide-react';
import { RootState } from '../store';

interface TestHistoryItem {
    id: string;
    date: string;
    score: number;
    category: string;
}

const Profile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'history' | 'settings'>('history');

    // モックデータ - 実際の実装では Redux から取得
    const testHistory: TestHistoryItem[] = [
        {
            id: '1',
            date: '2024-02-06',
            score: 85,
            category: '思考パターン分析'
        },
        {
            id: '2',
            date: '2024-02-01',
            score: 78,
            category: '潜在意識テスト'
        },
        {
            id: '3',
            date: '2024-01-25',
            score: 92,
            category: '思い込み診断'
        }
    ];

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            {/* プロファイルヘッダー */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">マイプロファイル</h1>
                        <p className="text-gray-600">継続的な自己分析で成長を可視化</p>
                    </div>
                </div>
            </motion.div>

            {/* タブナビゲーション */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab('history')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200
            ${activeTab === 'history'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    <div className="flex items-center space-x-2">
                        <History className="w-4 h-4" />
                        <span>履歴</span>
                    </div>
                </button>
                <button
                    onClick={() => setActiveTab('settings')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200
            ${activeTab === 'settings'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>設定</span>
                    </div>
                </button>
            </div>

            {/* コンテンツエリア */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {activeTab === 'history' ? (
                    <div className="space-y-4">
                        {testHistory.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium text-gray-900">{item.category}</h3>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-lg font-semibold text-blue-500">
                                            {item.score}点
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="space-y-6">
                            {/* 通知設定 */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">通知設定</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Bell className="w-5 h-5 text-gray-500" />
                                            <span className="text-gray-700">テスト通知</span>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full 
                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
                                    after:left-[2px] after:bg-white after:border-gray-300 after:border 
                                    after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* アカウント設定 */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">アカウント設定</h3>
                                <div className="space-y-4">
                                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 
                                   transition-colors duration-200 flex justify-between items-center">
                                        <span className="text-gray-700">プロファイル編集</span>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </button>
                                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 
                                   transition-colors duration-200 flex justify-between items-center">
                                        <span className="text-gray-700">パスワード変更</span>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </button>
                                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 
                                   transition-colors duration-200 flex justify-between items-center">
                                        <span className="text-red-600">ログアウト</span>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Profile;