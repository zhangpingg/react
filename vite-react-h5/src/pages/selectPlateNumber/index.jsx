/*
 * @Author: zhangping
 * @Date: 2025-06-18
 * @Description: License Plate Input Page
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import { PROVINCES, LETTERS, NUMBERS, PLATE_RULES } from './const';

const Index = () => {
    const navigate = useNavigate();
    const [plate, setPlate] = useState(['', '', '', '', '', '', '', '']);
    const [activeIndex, setActiveIndex] = useState(0);
    const [keyboardMode, setKeyboardMode] = useState('letter');

    useEffect(() => {
        if (activeIndex >= 0 && activeIndex <= 7) {
            setKeyboardMode(PLATE_RULES[activeIndex]);
        }
    }, [activeIndex]);

    const handleInput = (char) => {
        if (activeIndex > 7) return;
        const newPlate = [...plate];
        newPlate[activeIndex] = char;
        setPlate(newPlate);
        if (activeIndex < 7 && char) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleDelete = () => {
        if (activeIndex < 0) return;
        const newPlate = [...plate];
        if (newPlate[activeIndex]) {
            newPlate[activeIndex] = '';
            setPlate(newPlate);
        } else if (activeIndex > 0) {
            newPlate[activeIndex - 1] = '';
            setPlate(newPlate);
            setActiveIndex(activeIndex - 1);
        }
    };

    const handlePlateClick = (index) => {
        setActiveIndex(index);
    };

    const handleConfirm = () => {
        const plateNumber = plate.join('');
        if (plateNumber.length < 7) {
            alert('请输入完整的车牌号');
            return;
        }
        // 可以在这里保存数据或返回上一页
        console.log('车牌号:', plateNumber);
        navigate(-1); // 返回上一页
    };

    const handleSwitchMode = () => {
        if (keyboardMode === 'province') {
            setKeyboardMode('letter');
        } else if (keyboardMode === 'letter') {
            setKeyboardMode('province');
        }
    };

    const isValidChar = (char) => {
        switch (keyboardMode) {
            case 'province':
                return PROVINCES.includes(char);
            case 'letter':
                return LETTERS.includes(char) || PROVINCES.includes(char);
            case 'mix':
                return LETTERS.includes(char) || NUMBERS.includes(char);
            default:
                return true;
        }
    };

    const renderKeyboard = () => {
        return (
            <>
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
                <div className={styles['plate-input-keyboard-row-special']}>
                    <button className={styles['plate-input-keyboard-key-switch-wide']} onClick={handleSwitchMode}>
                        省份
                    </button>
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
                    <button className={styles['plate-input-keyboard-key-delete-wide']} onClick={handleDelete}>
                        删除
                    </button>
                </div>
            </>
        );
    };

    const renderProvinceKeyboard = () => {
        return (
            <>
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
                <div className={styles['plate-input-keyboard-row-special']}>
                    <button className={styles['plate-input-keyboard-key-switch-wide']} onClick={handleSwitchMode}>
                        ABC
                    </button>
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
                    <button className={styles['plate-input-keyboard-key-delete-wide']} onClick={handleDelete}>
                        删除
                    </button>
                </div>
            </>
        );
    };

    return (
        <div className={styles['plate-input-page']}>
            <div className={styles['plate-input-navbar']}>
                <button className={styles['plate-input-navbar-back']} onClick={() => navigate(-1)}>
                    返回
                </button>
                <span className={styles['plate-input-navbar-title']}>车牌号录入</span>
                <button className={styles['plate-input-navbar-confirm']} onClick={handleConfirm}>
                    确定
                </button>
            </div>
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

            <div className={styles['plate-input-header']}>
                <p>请输入车牌号</p>
            </div>

            <div className={styles['plate-input-keyboard']}>
                {keyboardMode === 'province' ? renderProvinceKeyboard() : renderKeyboard()}
            </div>
        </div>
    );
};

export default Index;

