import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Table from "../../../ui/Table";
import DashboardInfoCardLayout from "./DashboardInfoCardLayout";
import { useDarkMode } from "../../../context/DarkModeProvider";
import { useCallback } from "react";

function DashboardPieChart({ pieChartData, pieChartDetails, role, dimenstion }) {
    const { isDarkMode } = useDarkMode();
    const { total, details } = pieChartData;
    const { title, icon, url, headers, colors: chartColors } = pieChartDetails;
    const data = details.map((item, index) => (role === "admin" ? { label: item.users.replaceAll("-", " "), value: item.value, ...chartColors[index] } : { ...item, ...chartColors[index] }))

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = useCallback(
        ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {(percent * 100) ? `${(percent * 100).toFixed(1)}%` : ``}
                </text>
            );
        }, [RADIAN]
    )

    const colors = {
        light: {
            tooltipBg: "bg-white",
            tooltipBorder: "border-gray-200",
            tooltipDateText: "text-gray-800",
            tooltipValueText: "text-gray-600",
            tooltipPercentText: "text-gray-500"
        },
        dark: {
            tooltipBg: "bg-gray-800",
            tooltipBorder: "border-gray-700",
            tooltipDateText: "text-gray-100",
            tooltipValueText: "text-gray-200",
            tooltipPercentText: "text-gray-300"
        }
    };

    const currentColors = isDarkMode ? colors.dark : colors.light;

    return (
        <DashboardInfoCardLayout title={title} url={url} icon={icon}>
            <div className={`flex ${!dimenstion && "flex-col"} justify-between items-center gap-2`}>
                <div className="rounded-md" style={{ width: dimenstion || '100%' }}>
                    <ResponsiveContainer width="100%" height={240}>
                        <PieChart>
                            <Pie
                                data={data}
                                nameKey="label"
                                dataKey="value"
                                outerRadius={110}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                            >
                                {data.map(entry => (
                                    <Cell fill={isDarkMode ? entry.darkColor : entry.color} stroke={isDarkMode ? entry.darkColor : entry.color} cursor="pointer" key={entry.label} />
                                ))}
                            </Pie>
                            {
                                role !== "admin" &&
                                <Legend
                                    verticalAlign="middle"
                                    iconType="circle"
                                    layout="vertical"
                                    align="right"
                                    iconSize="15"
                                    width="30%"
                                    margin={20}
                                />
                            }
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className={`p-3 border shadow-sm rounded-md text-sm space-y-1 ${currentColors.tooltipBg} ${currentColors.tooltipBorder}`}>
                                                <p className={`font-bold ${currentColors.tooltipDateText}`}>{headers[headers.includes("name") ? headers.indexOf("name") : headers.indexOf("role")]}: {payload[0].payload.payload.label}</p>
                                                <p className={`${currentColors.tooltipValueText}`}>{headers[headers.includes("subscribers") ? headers.indexOf("subscribers") : headers.indexOf("count")]}: {payload[0].payload.payload.value}</p>
                                                <p className={`${currentColors.tooltipPercentText}`}>{headers[headers.indexOf("percentage")]}: {(payload[0].payload.payload.value / total * 100).toFixed(1)}%</p>
                                            </div>
                                        )
                                    }
                                    return null;
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-blue-900" style={{ width: dimenstion || '100%' }}>
                    <Table>
                        <Table.Header border={true}>
                            {headers.map(item => <th key={item} className="p-3">{item}</th>)}
                            <th className="p-3"></th>
                        </Table.Header>
                        <Table.Body data={data} render={(item) =>
                            <Table.Row key={item.label} border={true}>
                                {
                                    Object.entries(item)
                                        .filter(([key]) => !key.includes('color') && !key.includes('darkColor'))
                                        .map(([key, value]) => (
                                            <td key={key} className="p-3">{value}</td>
                                        ))
                                }
                                <td className="p-3">{(item.value / total * 100).toFixed(1)}%</td>
                                <td className="p-3">
                                    <span className="block w-4 h-4 rounded-full" style={{ backgroundColor: isDarkMode ? item.darkColor : item.color }}></span>
                                </td>
                            </Table.Row>
                        } />
                    </Table>
                </div>
            </div>
        </DashboardInfoCardLayout>
    );
}

export default DashboardPieChart;

