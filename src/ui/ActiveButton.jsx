// import React, { useState } from 'react';

import { useDarkMode } from "../context/DarkModeProvider";

const ActiveButton = ({ isActive, setIsActive, disabled = false }) => {
    const { isDarkMode } = useDarkMode();
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={() => setIsActive((value) => !value)}
            className={`${isActive ? 'bg-blue-700' : isDarkMode?`bg-gray-700`: 'bg-gray-200'
                } relative inline-flex items-center py-1 rounded-full w-11 transition-colors focus:outline-none`}
        >
            <span
                className={`${isActive ? 'translate-x-6' : 'translate-x-1'
                    } inline-block p-2 transform bg-white rounded-full transition-transform`}
            />
        </button>
    );
};

export default ActiveButton;
