import { useCallback, useEffect, useState } from "react";
import DashboardFilter from "./DashboardFilter"
import { format } from "date-fns";

function DashboardInfo() {
    const [currentTime, setCurrentTime] = useState('');

    // Function to format the date
    const getFormattedTime = useCallback(() => {
        return format(new Date(), "EEEE, dd MMMM yyyy 'at' HH:mm:ss a");
    }, []);

    useEffect(() => {
        // Update the time initially and set up an interval to update it every minute
        const updateCurrentTime = () => setCurrentTime(getFormattedTime());
        updateCurrentTime();  // Update immediately on mount

        const intervalId = setInterval(updateCurrentTime, 1000); // Update every minute

        return () => clearInterval(intervalId); // Clear the interval on component unmount
    }, [getFormattedTime]);

    return (
        <>
            {/* <div className="rounded-md p-4 border text-blue-900 bg-gray-50">
                <h3 className="capitalize text-lg">hi, <strong>marwan mohamed</strong></h3>
                <p>{format(new Date().toISOString(), 'EEEE, dd MMMM yyyy \'at\' HH:mm a')}</p>
            </div> */}
            <div className="flex items-end justify-between flex-wrap md:flex-nowrap gap-2 rounded-md py-1 capitalize text-xl text-white">
                <div className="space-y">
                    <h3>hi, <strong>marwan mohamed</strong></h3>
                    <p className="text-base">{currentTime}</p>
                </div>
                <DashboardFilter />
            </div>
        </>
    )
}

export default DashboardInfo
