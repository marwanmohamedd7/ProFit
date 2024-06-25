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
    const dataReady = data.map(({ date, subscribers }) => ({ date: format(parseISO(date), 'MMMM d'), subscribers }));

    const colors = {
        light: {
            stroke: "#1D4ED8",
            fill: "#1D4ED8",
            grid: "#E5E7EB",
            tooltipBg: "#FFFFFF",
            tooltipBorder: "#E5E7EB",
            tooltipText: "#374151",
            xAxisTick: "#374151",
            yAxisTick: "#374151"
        },
        dark: {
            stroke: "#93C5FD",
            fill: "#2563EB",
            grid: "#4B5563",
            tooltipBg: "#1F2937",
            tooltipBorder: "#374151",
            tooltipText: "#F9FAFB",
            xAxisTick: "#F9FAFB",
            yAxisTick: "#F9FAFB"
        }
    };

    const currentColors = isDarkMode ? colors.dark : colors.light;

    return (
        <DashboardInfoCardLayout title={`subscriptions overview`} url={`/trainer/subscriptions`} icon={<CoinIcon />}>
            <div className="flex justify-between gap-4 w-full">
                <div className="rounded-md" style={{ width: '100%' }}>
                    <ResponsiveContainer width="100%" height={470}>
                        <BarChart data={dataReady}>
                            <CartesianGrid strokeDasharray="4" stroke={currentColors.grid} />
                            <Bar
                                dataKey="subscribers"
                                type="monotone"
                                stroke={currentColors.stroke}
                                fill={currentColors.fill}
                                strokeWidth={2}
                                cursor="pointer"
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="p-3 border shadow-sm rounded-md text-sm space-y-1"
                                                style={{
                                                    backgroundColor: currentColors.tooltipBg,
                                                    borderColor: currentColors.tooltipBorder
                                                }}>
                                                <p className="font-bold" style={{ color: currentColors.tooltipText }}>
                                                    Date: {payload[0].payload.date}
                                                </p>
                                                <p style={{ color: currentColors.tooltipText }}>
                                                    Total subscribers: {payload[0].payload.subscribers}
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <XAxis
                                dataKey="date"
                                tick={{ fill: currentColors.xAxisTick }}
                                tickLine={{ stroke: currentColors.xAxisTick }}
                                fontSize={14}
                                tickMargin={10}
                                tickSize={4}
                            />
                            <YAxis
                                tick={{ fill: currentColors.yAxisTick }}
                                tickLine={{ stroke: currentColors.yAxisTick }}
                                fontSize={14}
                                tickMargin={5}
                                tickSize={4}
                                tickCount={6}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </DashboardInfoCardLayout>
    );
}

export default DashboardBarChart;
