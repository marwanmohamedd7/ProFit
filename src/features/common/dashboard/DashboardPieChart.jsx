import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button";
import { CiShare1 } from "react-icons/ci";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Table from "../../../ui/Table";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}%`}
        </text>
    );
};

function DashboardPieChart({ pieChartData, pieChartDetails }) {
    const navigate = useNavigate();
    const { totalValues, data } = pieChartData;
    const { title, icon, url, headers } = pieChartDetails;
    return (
        <div className="rounded-md p-4 capitalize border space-y-4 shadow-sm bg-white">
            <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap">
                <h2 className="flex items-center gap-2 text-blue-900 font-bold">
                    <span>{icon}</span>
                    <span>{title}</span>
                </h2>
                <Button onClick={() => navigate(url)} type="viewLink">
                    <p className="flex items-center justify-center gap-1">
                        <span>View Details</span>
                        <span><CiShare1 /></span>
                    </p>
                </Button>
            </div>
            <div className="flex justify-between gap-4">
                <div className="rounded-md" style={{ width: '50%' }}>
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
                                fill="#8884d8"
                            >
                                {data.map(entry => (
                                    <Cell fill={entry.color} stroke={entry.color} cursor="pointer" key={entry.label} />
                                ))}
                            </Pie>
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md text-sm space-y-1">
                                                <p className="font-bold text-gray-800">{headers[0]}: {payload[0].payload.payload.label}</p>
                                                <p className="text-gray-600">{headers[1]}: {payload[0].payload.payload.value}</p>
                                                <p className="text-gray-500">{headers[2]}: {(payload[0].payload.payload.value / totalValues * 100).toFixed(1)}%</p>
                                            </div>
                                        )
                                    }
                                    return null;
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-blue-900" style={{ width: '50%' }}>
                    <Table>
                        <Table.Header>
                            <tr className="capitalize text-left">
                                {headers.map(item => <th key={item} className="p-3">{item}</th>)}
                                <th className="p-3"></th>
                            </tr>
                        </Table.Header>
                        <Table.Body data={data} render={(item) =>
                            <tr className="text-sm text-left border bg-white" key={item.label}>
                                <td className="p-3">{item.label}</td>
                                <td className="p-3">{item.value}</td>
                                <td className="p-3">{((item.value / totalValues) * 100).toFixed(1)}%</td>
                                <td className="p-3">
                                    <span className="block w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></span>
                                </td>
                            </tr>
                        } />
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default DashboardPieChart
