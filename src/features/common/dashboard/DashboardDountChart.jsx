import { useDarkMode } from "../../../context/DarkModeProvider";
import Table from "../../../ui/Table";
import DashboardInfoCardLayout from "./DashboardInfoCardLayout";
import { Cell, Label, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function DashboardDountChart({ dountChartData, dountChartDetails }) {
    const { isDarkMode } = useDarkMode();
    const { total, details } = dountChartData;
    const { title, icon, url, headers, colors: chartColors } = dountChartDetails;
    const data = details.map(({ status, ...all }, index) => ({ label: status.replaceAll("-", " "), ...all, ...chartColors[index] }))
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
        <DashboardInfoCardLayout title={`${title}`} url={url} icon={icon}>
            <div className="flex justify-between items-center gap-4">
                <div className="rounded-md" style={{ width: '50%' }}>
                    <ResponsiveContainer width="100%" height={240}>
                        <PieChart>
                            <Pie
                                data={data}
                                nameKey="label"
                                dataKey="value"
                                innerRadius={85}
                                outerRadius={110}
                                cx="50%"
                                cy="50%"
                                paddingAngle={2}
                            >
                                {data.map(entry => (
                                    <Cell fill={isDarkMode ? entry.darkColor : entry.color} stroke={isDarkMode ? entry.darkColor : entry.color} cursor="pointer" key={entry.label} />
                                ))}
                                <Label
                                    value={total.toString()}
                                    position="center"
                                    className="chart-label"
                                    fontSize="24px"
                                    fontWeight="normal"
                                    content={
                                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="20px">
                                            <tspan fill={isDarkMode ? `#9CA3AF` : `#6B7280`} fontSize="17px" x="50%" dy="-1em">Total {title.split(" ")[1]}</tspan>
                                            <tspan fill={isDarkMode ? `#F9FAFB` : `#374151`} fontWeight="bold" x="50%" dy="1.8em">{total}</tspan>
                                        </text>
                                    }
                                />
                            </Pie>
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className={`p-3 border shadow-sm rounded-md text-sm space-y-1 ${currentColors.tooltipBg} ${currentColors.tooltipBorder}`}>
                                                <p className={`font-bold ${currentColors.tooltipDateText}`}>
                                                    {headers[0]}: {payload[0].payload.payload.label}
                                                </p>
                                                <p className={`${currentColors.tooltipValueText}`}>
                                                    {headers[1]}: {payload[0].payload.payload.value}
                                                </p>
                                                <p className={`${currentColors.tooltipPercentText}`}>
                                                    {headers[2]}: {(payload[0].payload.payload.value / total * 100).toFixed(1)}%
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-blue-900" style={{ width: '50%' }}>
                    <Table>
                        <Table.Header border={true}>
                            {headers.map(item => <th key={item} className="p-3">{item}</th>)}
                            <th className="p-3"></th>
                        </Table.Header>
                        <Table.Body data={data} render={(item) =>
                            <Table.Row key={item.label} border={true}>
                                <td className="p-3">{item.label}</td>
                                <td className="p-3">{item.value}</td>
                                <td className="p-3">{((item.value / total) * 100).toFixed(1)}%</td>
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

export default DashboardDountChart;
