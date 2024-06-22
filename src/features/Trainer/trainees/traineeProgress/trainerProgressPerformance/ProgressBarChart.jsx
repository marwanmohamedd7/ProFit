import { format, parseISO } from "date-fns";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from "../../../../../styles/styles";

function ProgressBarChart({ barChartData }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    if (!barChartData || !barChartData.length) return <h1 className={`${isDarkMode ? colors.text_white : colors.text_gray_900} text-center p-10 text-lg h-[15rem] w-full capitalize`}>You don't have any progress</h1>
    const dataReady = barChartData.map(({ createdAt, value }, index) => ({ date: format(parseISO(createdAt), 'MMMM d'), subscribers: value }))
    return (
        <div className="w-[40rem] h-[25rem]">
            <div className="rounded-md" style={{ width: '100%' }}>
                <ResponsiveContainer width="100%" height={400}>
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
                                            <p className="text-gray-600">total sales: {payload[0].payload.subscribers}</p>
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
                            unit=""
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
    )
}

export default ProgressBarChart
