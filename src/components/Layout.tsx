import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, Home, User, BarChart2, Settings, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleSidebar } from '../store/slices/uiSlice';
import { RootState } from '../store';

const Layout: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMenuOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

    const handleMenuToggle = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold text-gray-900">自己分析アプリ</h1>
                        <button
                            onClick={handleMenuToggle}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* サイドメニュー */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* オーバーレイ */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={handleMenuToggle}
                            className="fixed inset-0 bg-black z-20"
                        />

                        {/* メニューパネル */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg z-30"
                        >
                            <div className="p-4">
                                <div className="flex justify-end">
                                    <button
                                        onClick={handleMenuToggle}
                                        className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="mt-4 space-y-2">
                                    <button
                                        onClick={() => {
                                            navigate('/');
                                            handleMenuToggle();
                                        }}
                                        className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100"
                                    >
                                        <Home className="w-5 h-5 mr-3 text-gray-500" />
                                        <span>ホーム</span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            navigate('/test');
                                            handleMenuToggle();
                                        }}
                                        className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100"
                                    >
                                        <BarChart2 className="w-5 h-5 mr-3 text-gray-500" />
                                        <span>テストを受ける</span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            navigate('/profile');
                                            handleMenuToggle();
                                        }}
                                        className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100"
                                    >
                                        <User className="w-5 h-5 mr-3 text-gray-500" />
                                        <span>プロフィール</span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            // 設定画面への遷移
                                            handleMenuToggle();
                                        }}
                                        className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100"
                                    >
                                        <Settings className="w-5 h-5 mr-3 text-gray-500" />
                                        <span>設定</span>
                                    </button>

                                    <div className="pt-4 mt-4 border-t border-gray-200">
                                        <button
                                            onClick={() => {
                                                // ログアウト処理
                                                handleMenuToggle();
                                            }}
                                            className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100 text-red-600"
                                        >
                                            <LogOut className="w-5 h-5 mr-3" />
                                            <span>ログアウト</span>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="bg-white shadow-lg fixed bottom-0 w-full">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-around py-3">
                        <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                            <Home size={24} />
                            <span className="text-xs mt-1">ホーム</span>
                        </Link>
                        <Link to="/test" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                            <BarChart2 size={24} />
                            <span className="text-xs mt-1">テスト</span>
                        </Link>
                        <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                            <User size={24} />
                            <span className="text-xs mt-1">プロフィール</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Padding bottom for fixed navigation */}
            <div className="h-16"></div>
        </div>
    );
};

export default Layout;