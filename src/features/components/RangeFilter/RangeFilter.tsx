import { useState } from 'react';

import styles from './RangeFilter.module.scss';

interface RangeFilterProps {
    title: string;
    icon: string;
    min?: number;
    max?: number;
    defaultOpen?: boolean;
    onRangeChange?: (min?: number, max?: number) => void;
    disabled?: boolean;
    unit?: string;
}

export default function RangeFilter({ 
    title, 
    icon, 
    min,
    max,
    defaultOpen = true,
    onRangeChange,
    disabled = false,
    unit = ''
}: RangeFilterProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [minValue, setMinValue] = useState<string>(min?.toString() || '');
    const [maxValue, setMaxValue] = useState<string>(max?.toString() || '');

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMinValue(value);
        
        if (!onRangeChange || disabled) return;
        
        const minNum = value ? parseFloat(value) : undefined;
        const maxNum = maxValue ? parseFloat(maxValue) : undefined;
        onRangeChange(minNum, maxNum);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxValue(value);
        
        if (!onRangeChange || disabled) return;
        
        const minNum = minValue ? parseFloat(minValue) : undefined;
        const maxNum = value ? parseFloat(value) : undefined;
        onRangeChange(minNum, maxNum);
    };

    const hasActiveFilter = minValue !== '' || maxValue !== '';

    return (
        <div className={`${styles.filterSection} ${disabled ? styles.disabled : ''}`}>
            <button 
                className={styles.filterTitle}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
            >
                <span className={styles.titleContent}>
                    <span className={styles.filterIcon}>{icon}</span>
                    {title}
                    {hasActiveFilter && (
                        <span className={styles.selectedCount}>•</span>
                    )}
                </span>
                <svg 
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                >
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            {isOpen && (
                <div className={styles.rangeContainer}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Min</label>
                        <div className={styles.inputWrapper}>
                            <input 
                                type="number"
                                className={styles.rangeInput}
                                value={minValue}
                                onChange={handleMinChange}
                                disabled={disabled}
                                placeholder="0"
                                step="0.1"
                            />
                            {unit && <span className={styles.unit}>{unit}</span>}
                        </div>
                    </div>
                    <div className={styles.separator}>-</div>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Max</label>
                        <div className={styles.inputWrapper}>
                            <input 
                                type="number"
                                className={styles.rangeInput}
                                value={maxValue}
                                onChange={handleMaxChange}
                                disabled={disabled}
                                placeholder="∞"
                                step="0.1"
                            />
                            {unit && <span className={styles.unit}>{unit}</span>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
