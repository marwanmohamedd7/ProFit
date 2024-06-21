import React from "react";
import { IoRefreshOutline } from "react-icons/io5";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function ErrorFallBack({ error, resetErrorBoundary }) {
    // console.log(error.message);
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`h-screen ${isDarkMode ? colors.bg_slate_900 : colors.bg_gray_50} flex items-center justify-center p-12`}>
            <div className={`${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_gray_50} border rounded-md w-3/4 p-12 flex flex-col justify-center items-center gap-4 text-center`}>
                <div className="w-96 h-96">
                    <img className="w-full h-full" src="/error.png" alt="error" />
                </div>
                <h1 className={`text-3xl font-bold ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>Something went wrong 🧐</h1>
                <p className={`font-sono ${isDarkMode ? colors.text_gray_200 : colors.text_gray_700}`}>{error.message}</p>
                <button
                    className={`${isDarkMode ? colors.bg_blue_900 : colors.bg_blue_700} text-white px-6 py-2 rounded-lg text-lg font-bold tracking-wide flex justify-center items-center gap-2`}
                    onClick={resetErrorBoundary}
                >
                    <span>Try again</span>
                    <span className="text-xl font-bold"><IoRefreshOutline /></span>
                </button>
            </div>
        </div>
    );
}

export default ErrorFallBack;
