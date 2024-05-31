import { CiShare1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Cell, Label, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Table from "../../../ui/Table";
import Button from "../../../ui/Button";

function DashboardDountChart({ dountChartData, dountChartDetails }) {
    const { totalValues, data } = dountChartData;
    const { title, icon, url, headers } = dountChartDetails;
    const navigate = useNavigate();
    return (
        <div className="rounded-md p-4 capitalize border space-y-4 shadow-sm bg-white">
            <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap">
                <h2 className="flex items-center gap-2 text-blue-900 font-bold">
                    <span>{icon}</span>
                    <span>Overall {title}</span>
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
                                innerRadius={85}
                                outerRadius={110}
                                cx="50%"
                                cy="50%"
                                paddingAngle={2}
                            >
                                {data.map(entry => (
                                    <Cell fill={entry.color} stroke={entry.color} cursor="pointer" key={entry.label} />
                                ))}
                                <Label
                                    value={totalValues.toString()}
                                    position="center"
                                    className="chart-label"
                                    fontSize="24px"
                                    fontWeight="normal"
                                    content={
                                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="20px">
                                            <tspan fill="#6B7280" fontSize="17px" x="50%" dy="-1em">Total {title}</tspan>
                                            <tspan fill="#1b1a1a" fontWeight="bold" x="50%" dy="1.8em">{totalValues}</tspan>
                                        </text>
                                    }
                                />
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
                            {headers.map(item => <th key={item} className="p-3">{item}</th>)}
                            <th className="p-3"></th>
                        </Table.Header>
                        <Table.Body data={data} render={(item) =>
                            <Table.Row>
                                <td className="p-3">{item.label}</td>
                                <td className="p-3">{item.value}</td>
                                <td className="p-3">{((item.value / totalValues) * 100).toFixed(1)}%</td>
                                <td className="p-3">
                                    <span className="block w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></span>
                                </td>
                            </Table.Row>
                        } />
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default DashboardDountChart;
