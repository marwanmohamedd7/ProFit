import { format, parseISO } from "date-fns";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CoinIcon from "../../../Icons/CoinIcon";
import DashboardInfoCardLayout from "./DashboardInfoCardLayout";
import { useDarkMode } from "../../../context/DarkModeProvider";

const data = [
    { date: '2024-05-01', subscribers: 4000 },
    { date: '2024-05-02', subscribers: 3000 },
    { date: '2024-05-03', subscribers: 2000 },
    { date: '2024-05-04', subscribers: 2780 },
    { date: '2024-05-05', subscribers: 1890 },
    { date: '2024-05-06', subscribers: 2390 },
    { date: '2024-05-07', subscribers: 3490 },
    { date: '2024-05-08', subscribers: 3200 },
    { date: '2024-05-09', subscribers: 2900 },
    { date: '2024-05-10', subscribers: 3300 },
    { date: '2024-05-11', subscribers: 3400 },
    { date: '2024-05-12', subscribers: 3200 },
    { date: '2024-05-13', subscribers: 3100 },
    { date: '2024-05-14', subscribers: 3500 },
    { date: '2024-05-15', subscribers: 3650 },
    { date: '2024-05-16', subscribers: 3450 },
    { date: '2024-05-17', subscribers: 3550 },
    { date: '2024-05-18', subscribers: 3750 },
    { date: '2024-05-19', subscribers: 3850 },
    { date: '2024-05-20', subscribers: 3950 },
];

function DashboardBarChart() {
    const { isDarkMode } = useDarkMode();
    const dataReady = data.map(({ date, subscribers }) => ({ date: format(parseISO(date), 'MMMM d'), subscribers }))
    return (
        <DashboardInfoCardLayout title={`subscriptions overview`} url={`/trainer/subscriptions`} icon={<CoinIcon />}>
            <div className="flex justify-between gap-4 w-full">
                <div className="rounded-md" style={{ width: '100%' }}>
                    <ResponsiveContainer width="100%" height={470}>
                        <BarChart data={dataReady}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar
                                dataKey="subscribers"
                                stroke="#1D4ED8"
                                fill="#1D4ED8"
                                strokeWidth={2}
                                type="monotone"
                                cursor="pointer"
                            // barSize={50}
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md text-sm space-y-1">
                                                <p className="font-bold text-gray-800">date: {payload[0].payload.date}</p>
                                                <p className="text-gray-600">total sales: {payload[0].payload.subscribers} EGP</p>
                                            </div>
                                        )
                                    }
                                    return null;
                                }} />
                            <XAxis
                                dataKey="date"
                                tick={{ fill: isDarkMode ? `#F9FAFB` : `#374151` }}
                                tickLine={{ stroke: isDarkMode ? `#F9FAFB` : `#374151` }}
                                fontSize={14}
                                tickMargin={10}
                                tickSize={4}
                            />
                            <YAxis
                                unit=" EP"
                                tick={{ fill: isDarkMode ? `#F9FAFB` : `#374151` }}
                                tickLine={{ stroke: isDarkMode ? `#F9FAFB` : `#374151` }}
                                fontSize={14}
                                tickMargin={5}
                                tickSize={4}
                                tickCount={6}
                            />
                            {/* <Legend /> */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </DashboardInfoCardLayout>
    );
}

export default DashboardBarChart