import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import { format, parseISO } from "date-fns";

function ProgressAreaChart({ data, yAxisLabel }) {
    const { isDarkMode } = useDarkMode();
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

    const dataReady = data.map(({ createdAt, value }) => ({ date: format(parseISO(createdAt), 'MMMM d'), value }));
    return (
        <div className="flex justify-between gap-4 w-full">
            <div className="rounded-md" style={{ width: '100%' }}>
                <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={dataReady}>
                        <CartesianGrid strokeDasharray="4" stroke={currentColors.grid} />
                        <Area
                            dataKey="value"
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
                                                Value: {payload[0].payload.value} {yAxisLabel}
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
                            unit={yAxisLabel}
                            tick={{ fill: currentColors.yAxisTick }}
                            tickLine={{ stroke: currentColors.yAxisTick }}
                            fontSize={14}
                            tickMargin={5}
                            tickSize={4}
                            tickCount={6}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ProgressAreaChart
