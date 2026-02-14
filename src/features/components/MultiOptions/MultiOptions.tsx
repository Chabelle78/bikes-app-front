import { useState } from 'react';

import styles from './MultiOptions.module.scss';

interface FilterSectionProps {
    title: string;
    icon: string;
    options: string[];
    defaultOpen?: boolean;
}

export default function MultiOptions({ title, icon, options, defaultOpen = true }: FilterSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={styles.filterSection}>
            <button 
                className={styles.filterTitle}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles.titleContent}>
                    <span className={styles.filterIcon}>{icon}</span>
                    {title}
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
                <div className={styles.optionsList}>
                    {options.map((option) => (
                        <label key={option} className={styles.optionItem}>
                            <input type="checkbox" className={styles.checkbox} />
                            <span className={styles.optionLabel}>{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

