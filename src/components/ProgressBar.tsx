import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const progress = (current / total) * 100;

    return (
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">
                    質問 {current} / {total}
                </span>
                <span className="text-sm text-gray-600">
                    {Math.round(progress)}%
                </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;