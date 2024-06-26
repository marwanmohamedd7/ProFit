import { format, parseISO } from 'date-fns';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDarkMode } from '../../../../../context/DarkModeProvider';

function ProgressBiBarChart({ biBarChartData }) {
    const { isDarkMode } = useDarkMode();
    const colors = {
        light: {
            grid: "#E5E7EB",
            tooltipBg: "#FFFFFF",
            tooltipBorder: "#E5E7EB",
            tooltipText: "#374151",
            xAxisTick: "#374151",
            yAxisLeftTick: "#8884d8",
            yAxisRightTick: "#82ca9d",
            barLeft: "#8884d8", // Color for the left bar in light mode
            barRight: "#82ca9d" // Color for the right bar in light mode
        },
        dark: {
            grid: "#4B5563",
            tooltipBg: "#1F2937",
            tooltipBorder: "#374151",
            tooltipText: "#F9FAFB",
            xAxisTick: "#F9FAFB",
            yAxisLeftTick: "#93C5FD",
            yAxisRightTick: "#34D399",
            barLeft: "#93C5FD", // Color for the left bar in dark mode
            barRight: "#34D399" // Color for the right bar in dark mode
        }
    };

    const currentColors = isDarkMode ? colors.dark : colors.light;

    if (!biBarChartData || !biBarChartData.length)
        return <h1 className={`${isDarkMode ? "text-gray-50" : "text-gray-700"} text-center p-10 text-lg h-[15rem] w-full capitalize`}>You don't have any progress</h1>
   
    const dataReady = biBarChartData.map(({ createdAt, target, value }) => ({ date: format(parseISO(createdAt), 'MMMM d'), value, target }));

    return (
        <div className="w-[40rem] h-[25rem]">
            <div className="rounded-md" style={{ width: '100%' }}>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        width={500}
                        height={300}
                        data={dataReady}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke={currentColors.grid} />
                        <XAxis dataKey="date" tick={{ fill: currentColors.xAxisTick }} />
                        <YAxis yAxisId="left" orientation="left" tick={{ fill: currentColors.yAxisLeftTick }} />
                        <YAxis yAxisId="right" orientation="right" tick={{ fill: currentColors.yAxisRightTick }} />
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
                                                Target: {payload[0].payload.target}
                                            </p>
                                            <p style={{ color: currentColors.tooltipText }}>
                                                Value: {payload[1].payload.value}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Legend />
                        <Bar yAxisId="left" dataKey="target" fill={currentColors.barLeft} />
                        <Bar yAxisId="right" dataKey="value" fill={currentColors.barRight} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ProgressBiBarChart;
