// Circular Progress Component
function CircularProgress({ percentage }) {
    // Calculate the circumference of the circle
    const radius = 16;
    const circumference = 2 * Math.PI * radius;

    // Calculate how much of the circle should not be dashed (the part that shows progress)
    const offset = ((100 - percentage) / 100) * circumference;
    return (
        <div className="relative size-20">
            <svg className="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 transition-all duration-700" strokeWidth="3"></circle>
                {/* <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle> */}
                {/* Progress Circle inside a group with rotation */}
                <g className="origin-center -rotate-90 transform">
                    <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-green-600 transition-all duration-700"
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset} // Set the dynamic offset here
                    />
                    {/* <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="75"></circle> */}
                </g>
            </svg>
            {/* Percentage Text */}
            {percentage != null && (
                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p className="text-center text-lg font-bold text-gray-50 flex justify-center items-center">
                        <span>{percentage}</span>
                        <span>%</span>
                    </p>
                    {/* <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">{percentage}%</span> */}
                </div>
            )}
        </div>
    );
}

export default CircularProgress
