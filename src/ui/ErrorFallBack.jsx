import React from "react";
import { IoRefreshOutline } from "react-icons/io5";

function ErrorFallBack({ error, resetErrorBoundary }) {
    // console.log(error.message);
    return (
        <div className="h-screen bg-gray-50 flex items-center justify-center p-12">
            <div className="bg-white border rounded-md w-3/4 p-12 flex flex-col justify-center items-center gap-4 text-center">
                <div className="w-96 h-96">
                    <img className="w-full h-full" src="/error.png" alt="error" />
                </div>
                <h1 className="text-3xl font-bold text-blue-900">Something went wrong 🧐</h1>
                <p className="font-sono text-gray-700">{error.message}</p>
                <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-bold tracking-wide flex justify-center items-center gap-2"
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
