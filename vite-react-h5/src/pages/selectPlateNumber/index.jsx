/*
 * @Author: zhangping
 * @Date: 2025-06-18
 * @Description: License Plate Input Page - 车牌号输入页面
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import { PROVINCES, LETTERS, NUMBERS, PLATE_RULES } from './const';

/**
 * 车牌号输入主组件
 * 支持普通车牌和特殊车牌（海陆空、武警、临时等）的输入
 */
const Index = () => {
    const navigate = useNavigate();

    // plate: 存储8位车牌号的数组
    const [plate, setPlate] = useState(['', '', '', '', '', '', '', '']);

    // activeIndex: 当前激活的车牌位置索引（0-7）
    const [activeIndex, setActiveIndex] = useState(0);

    // keyboardMode: 当前键盘模式
    // - 'province': 省份模式，显示省份简称键盘
    // - 'letter': 字母模式，显示字母和数字键盘
    // - 'mix': 混合模式，显示字母和数字
    const [keyboardMode, setKeyboardMode] = useState('letter');

    // isManualMode: 是否为用户手动切换的模式，用于防止自动切换覆盖用户操作
    const [isManualMode, setIsManualMode] = useState(false);

    /**
     * 监听激活位置变化，根据当前位置更新键盘模式
     * 根据 PLATE_RULES 规则自动切换到合适的键盘模式
     * 但如果用户手动切换了模式，则不自动切换（除非用户点击了其他位置）
     */
    useEffect(() => {
        if (activeIndex >= 0 && activeIndex <= 7 && !isManualMode) {
            setKeyboardMode(PLATE_RULES[activeIndex]);
        }
    }, [activeIndex, isManualMode]);

    /**
     * 处理字符输入
     * @param {string} char - 要输入的字符
     * 将字符填入当前激活位置，并自动移动到下一个位置
     */
    const handleInput = (char) => {
        // 如果已经输入到最后一个位置，不再处理
        if (activeIndex > 7) return;

        // 复制当前车牌数组
        const newPlate = [...plate];

        // 将字符填入当前激活位置
        newPlate[activeIndex] = char;
        setPlate(newPlate);

        // 如果字符有效且未到最后一个位置，自动移动到下一个位置
        if (activeIndex < 7 && char) {
            setActiveIndex(activeIndex + 1);
        }
    };

    /**
     * 处理删除操作
     * 删除当前激活位置的字符，如果没有字符则删除前一个位置的字符
     */
    const handleDelete = () => {
        // 如果没有可删除的位置，直接返回
        if (activeIndex < 0) return;

        const newPlate = [...plate];

        // 如果当前激活位置有字符，清除该字符
        if (newPlate[activeIndex]) {
            newPlate[activeIndex] = '';
            setPlate(newPlate);
        }
        // 如果当前激活位置没有字符，且前面还有位置，则删除前一个位置的字符
        else if (activeIndex > 0) {
            newPlate[activeIndex - 1] = '';
            setPlate(newPlate);
            setActiveIndex(activeIndex - 1);
        }
    };

    /**
     * 处理车牌位点击
     * @param {number} index - 被点击的位置索引
     * 设置当前激活位置，允许用户修改该位置的字符
     * 点击车牌位时重置手动模式标志，允许自动切换回对应位置的模式
     */
    const handlePlateClick = (index) => {
        setActiveIndex(index);
        // 重置手动模式标志，允许自动切换
        setIsManualMode(false);
    };

    /**
     * 处理确认按钮点击
     * 验证车牌号完整性并执行确认操作
     */
    const handleConfirm = () => {
        // 将车牌数组拼接成字符串
        const plateNumber = plate.join('');

        // 验证车牌号是否完整（至少7位）
        if (plateNumber.length < 7) {
            alert('请输入完整的车牌号');
            return;
        }

        // 输出车牌号到控制台（实际项目中可保存或返回）
        console.log('车牌号:', plateNumber);

        // 返回上一页
        navigate(-1);
    };

    /**
     * 处理键盘模式切换
     * 在省份模式和字母模式之间切换
     * 设置手动模式标志，防止自动切换覆盖用户操作
     */
    const handleSwitchMode = () => {
        // 设置手动模式标志
        setIsManualMode(true);

        if (keyboardMode === 'province') {
            // 从省份模式切换到字母模式
            setKeyboardMode('letter');
        } else {
            // 从字母模式或混合模式切换到省份模式
            setKeyboardMode('province');
        }
    };

    /**
     * 验证字符在当前键盘模式下是否有效
     * @param {string} char - 要验证的字符
     * @returns {boolean} - 字符是否可用
     */
    const isValidChar = (char) => {
        switch (keyboardMode) {
            // 省份模式下，只能输入省份简称
            case 'province':
                return PROVINCES.includes(char);
            // 字母模式下，可以输入字母或省份简称（用于特殊车牌）
            case 'letter':
                return LETTERS.includes(char) || PROVINCES.includes(char);
            // 混合模式下，可以输入字母或数字
            case 'mix':
                return LETTERS.includes(char) || NUMBERS.includes(char);
            // 默认情况允许所有字符
            default:
                return true;
        }
    };

    /**
     * 渲染字母模式键盘
     * 包含数字行、QWERTY行、ASDF行和特殊行（省份切换、字母、删除）
     * @returns {React.ReactElement} - 字母模式键盘组件
     */
    const renderKeyboard = () => {
        return (
            <>
                {/* 数字行：0-9 */}
                <div className={styles['plate-input-keyboard-row']}>
                    {NUMBERS.map((num) => (
                        <button
                            key={num}
                            className={`${styles['plate-input-keyboard-key']} ${
                                !isValidChar(num) ? styles['plate-input-keyboard-key-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(num) && handleInput(num)}
                            disabled={!isValidChar(num)}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                {/* QWERTY行：Q W E R T Y U P */}
                <div className={styles['plate-input-keyboard-row-qwerty']}>
                    {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P'].map((char) => (
                        <button
                            key={char}
                            className={`${styles['plate-input-keyboard-key-qwerty']} ${
                                !isValidChar(char) ? styles['plate-input-keyboard-key-qwerty-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(char) && handleInput(char)}
                            disabled={!isValidChar(char)}
                        >
                            {char}
                        </button>
                    ))}
                </div>

                {/* ASDF行：A S D F G H J K L */}
                <div className={styles['plate-input-keyboard-row-asdf']}>
                    {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((char) => (
                        <button
                            key={char}
                            className={`${styles['plate-input-keyboard-key-asdf']} ${
                                !isValidChar(char) ? styles['plate-input-keyboard-key-asdf-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(char) && handleInput(char)}
                            disabled={!isValidChar(char)}
                        >
                            {char}
                        </button>
                    ))}
                </div>

                {/* 特殊行：省份切换、Z X C V B N M、删除 */}
                <div className={styles['plate-input-keyboard-row-special']}>
                    {/* 省份切换按钮，点击切换到省份模式 */}
                    <button className={styles['plate-input-keyboard-key-switch-wide']} onClick={handleSwitchMode}>
                        省份
                    </button>

                    {/* 字母 Z X C V B N M */}
                    {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((char) => (
                        <button
                            key={char}
                            className={`${styles['plate-input-keyboard-key-narrow']} ${
                                !isValidChar(char) ? styles['plate-input-keyboard-key-narrow-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(char) && handleInput(char)}
                            disabled={!isValidChar(char)}
                        >
                            {char}
                        </button>
                    ))}

                    {/* 删除按钮 */}
                    <button className={styles['plate-input-keyboard-key-delete-wide']} onClick={handleDelete}>
                        删除
                    </button>
                </div>
            </>
        );
    };

    /**
     * 渲染省份模式键盘
     * 包含4行省份简称和一个特殊行（ABC切换、特殊字符、删除）
     * @returns {React.ReactElement} - 省份模式键盘组件
     */
    const renderProvinceKeyboard = () => {
        return (
            <>
                {/* 第一行：京 津 沪 渝 冀 豫 云 辽 黑 湘 */}
                <div className={styles['plate-input-keyboard-row']}>
                    {['京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘'].map((char) => (
                        <button
                            key={char}
                            className={`${styles['plate-input-keyboard-key']} ${
                                !isValidChar(char) ? styles['plate-input-keyboard-key-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(char) && handleInput(char)}
                            disabled={!isValidChar(char)}
                        >
                            {char}
                        </button>
                    ))}
                </div>

                {/* 第二行：皖 鲁 新 苏 浙 赣 鄂 桂 甘 晋 */}
                <div className={styles['plate-input-keyboard-row']}>
                    {['皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋'].map((char) => (
                        <button
                            key={char}
                            className={`${styles['plate-input-keyboard-key']} ${
                                !isValidChar(char) ? styles['plate-input-keyboard-key-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(char) && handleInput(char)}
                            disabled={!isValidChar(char)}
                        >
                            {char}
                        </button>
                    ))}
                </div>

                {/* 第三行：蒙 陕 吉 闽 贵 粤 青 藏 川 宁 */}
                <div className={styles['plate-input-keyboard-row']}>
                    {['蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁'].map((char) => (
                        <button
                            key={char}
                            className={`${styles['plate-input-keyboard-key']} ${
                                !isValidChar(char) ? styles['plate-input-keyboard-key-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(char) && handleInput(char)}
                            disabled={!isValidChar(char)}
                        >
                            {char}
                        </button>
                    ))}
                </div>

                {/* 特殊行：ABC切换、琼 港 澳 台 使 领 警 学、删除 */}
                <div className={styles['plate-input-keyboard-row-special']}>
                    {/* ABC切换按钮，点击切换到字母模式 */}
                    <button className={styles['plate-input-keyboard-key-switch-wide']} onClick={handleSwitchMode}>
                        ABC
                    </button>

                    {/* 特殊字符：琼 港 澳 台 使 领 警 学（用于军牌、使馆等特殊车牌） */}
                    {['琼', '港', '澳', '台', '使', '领', '警', '学'].map((char) => (
                        <button
                            key={char}
                            className={`${styles['plate-input-keyboard-key-narrow']} ${
                                !isValidChar(char) ? styles['plate-input-keyboard-key-narrow-disabled'] : ''
                            }`}
                            onClick={() => isValidChar(char) && handleInput(char)}
                            disabled={!isValidChar(char)}
                        >
                            {char}
                        </button>
                    ))}

                    {/* 删除按钮 */}
                    <button className={styles['plate-input-keyboard-key-delete-wide']} onClick={handleDelete}>
                        删除
                    </button>
                </div>
            </>
        );
    };

    return (
        <div className={styles['plate-input-page']}>
            {/* 导航栏：返回按钮、标题、确定按钮 */}
            <div className={styles['plate-input-navbar']}>
                <button className={styles['plate-input-navbar-back']} onClick={() => navigate(-1)}>
                    返回
                </button>
                <span className={styles['plate-input-navbar-title']}>车牌号录入</span>
                <button className={styles['plate-input-navbar-confirm']} onClick={handleConfirm}>
                    确定
                </button>
            </div>

            {/* 车牌号展示区域：8个输入框 */}
            <div className={styles['plate-input-display']}>
                {plate.map((char, index) => (
                    <div
                        key={index}
                        className={`${styles['plate-input-item']} ${
                            activeIndex === index ? styles['plate-input-item-active'] : ''
                        } ${index === 7 && char ? styles['plate-input-item-special'] : ''}`}
                        onClick={() => handlePlateClick(index)}
                    >
                        {char}
                    </div>
                ))}
            </div>

            {/* 提示文字 */}
            <div className={styles['plate-input-header']}>
                <p>请输入车牌号</p>
            </div>

            {/* 虚拟键盘区域：根据模式显示不同的键盘 */}
            <div className={styles['plate-input-keyboard']}>
                {keyboardMode === 'province' ? renderProvinceKeyboard() : renderKeyboard()}
            </div>
        </div>
    );
};

export default Index;

