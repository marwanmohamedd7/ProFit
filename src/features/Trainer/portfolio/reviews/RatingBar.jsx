function RatingBar({ label, percentage }) {
    return (
        <div className="flex items-center justify-center gap-4 text-sm">
            <p className="text-blue-700 font-bold">{label}</p>
            <div className="flex items-center justify-center rounded">
                <div
                    className="flex w-52 h-1 bg-gray-200 rounded-full overflow-hidden "
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-600"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
            <p className="w-8 text-right text-blue-700 font-bold">{percentage}%</p>
        </div>
    );
}

export default RatingBar
