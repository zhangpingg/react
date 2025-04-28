import React, { useState } from 'react';
//import { Search, ArrowLeft } from 'lucide-react';
//import { motion } from 'framer-motion';

const MobileSearchComponent = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleSearchClick = () => {
        setIsSearchActive(true);
    };

    const handleBackClick = () => {
        setIsSearchActive(false);
        setSearchValue('');
    };

    const handleSearchChange = (e) => {
        setSearchValue(e?.target?.value ?? '');
    };

    return (
        <div className="relative w-full max-w-md mx-auto p-4">
            {!isSearchActive ? (
                <div
                    className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-2"
                    onClick={handleSearchClick}
                >
                    <div className="flex items-center">
                        11
                        <span className="text-gray-500">搜索</span>
                    </div>
                </div>
            ) : (
                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
                    <button onClick={handleBackClick} className="mr-2">
                        <ArrowLeft className="text-gray-600" size={20} />
                    </button>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="请输入搜索内容"
                        className="flex-1 outline-none text-gray-800"
                        autoFocus
                    />
                    {searchValue && (
                        <button onClick={() => setSearchValue('')} className="ml-2">
                            11
                        </button>
                    )}
                </div>
            )}

            <footer className="mt-8 text-center text-sm text-gray-500">
                <div>
                    created by{' '}
                    <a href="https://space.coze.cn" className="text-blue-500 hover:underline">
                        coze space
                    </a>
                </div>
                <div>页面内容均由 AI 生成，仅供参考</div>
            </footer>
        </div>
    );
};

export default MobileSearchComponent;
