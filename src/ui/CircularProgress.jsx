// Circular Progress Component
function CircularProgress({ variations, allDays, days, percentage, icon, plan, size = "size-20" }) {
    let offset;
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    if (variations === "percentage") {
        // Calculate the circumference of the circle
        if (isNaN(percentage)) percentage = 0;
        // Calculate how much of the circle should not be dashed (the part that shows progress)
        offset = ((100 - percentage) / 100) * circumference;
    } else if (variations === "daysCount") offset = (allDays / 100) * circumference;
    // else if()

    return (
        <div className={`relative ${size}`}>
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
                        className="stroke-current text-blue-700 transition-all duration-700"
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset < 0 ? 0 : offset} // Set the dynamic offset here
                    />
                    {/* <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="75"></circle> */}
                </g>
            </svg>
            {/* Percentage Text */}
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-lg font-bold text-blue-700 ">
                {
                    variations === "percentage" && (
                        <p className="flex justify-center items-center gap-1">
                            <span>{percentage}</span>
                            <span>%</span>
                        </p>
                    )
                }
                {
                    variations === "daysCount" && (
                        <p>{days}</p>
                    )
                }
                {
                    variations === "assessmentsChart" && (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <p className="text-2xl">{icon}</p>
                            <p className="flex justify-center items-center gap-1 text-4xl">
                                <span>{percentage}</span>
                                <span>%</span>
                            </p>
                            <p className="text-gray-500 font-medium text-base">{plan}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CircularProgress
