import { format, parseISO } from "date-fns";
import DashboardInfoCardLayout from "./DashboardInfoCardLayout";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useDarkMode } from "../../../context/DarkModeProvider";

function DashboardAreaChart({ areaChartData, areaChartDetails }) {
    const { isDarkMode } = useDarkMode();
    const { title, icon, url } = areaChartDetails;
    const dataReady = areaChartData.map(({ startDate, totalPaidAmount }) => ({ date: format(parseISO(startDate), 'MMMM d'), value: totalPaidAmount }));

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
        <DashboardInfoCardLayout isEmpty={dataReady.length} title={`${title}`} url={url} icon={icon} grid_cols="col-span-2">
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
                                                    Total sales: {payload[0].payload.value} EGP
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
                                unit=" EP"
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
        </DashboardInfoCardLayout>
    );
}

export default DashboardAreaChart;
