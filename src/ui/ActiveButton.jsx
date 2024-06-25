// import React, { useState } from 'react';

import { useDarkMode } from "../context/DarkModeProvider";

const ActiveButton = ({ isActive, setIsActive, onClick, disabled = false }) => {
    
    const { isDarkMode } = useDarkMode();
    function handleToggle(e) {
        e.stopPropagation();
        setIsActive((value) => !value)
        onClick?.(); // call the onClick function if it exists
    }

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={handleToggle}
            className={`${isActive ? 'bg-blue-700' : isDarkMode ? `bg-gray-700` : 'bg-gray-200'
                } relative inline-flex items-center py-1 rounded-full w-11 transition-colors focus:outline-none disabled:cursor-not-allowed`}
        >
            <span
                className={`${isActive ? 'translate-x-6' : 'translate-x-1'
                    } inline-block p-2 transform bg-white rounded-full transition-transform disabled:cursor-not-allowed`}
            />
        </button>
    );
};

export default ActiveButton;
