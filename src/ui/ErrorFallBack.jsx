import React from "react";

function ErrorFallBack({ error, resetErrorBoundary }) {
    // console.log(error.message);
    return (
        <div className="h-screen bg-gray-50 flex items-center justify-center p-12">
            <div className="bg-white border rounded-md w-1/2 p-12 flex flex-col justify-center items-center gap-4 text-center">
                <div className="w-96 h-96">
                    <img className="w-full h-full" src="/error.png" alt="error" />
                </div>
                <h1 className="text-3xl font-bold">Something went wrong 🧐</h1>
                <p className="font-sono text-gray-500">{error.message}</p>
                <button
                    className="px-9 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold"
                    onClick={resetErrorBoundary}
                >
                    Try again
                </button>
            </div>
        </div>
    );
}

export default ErrorFallBack;
