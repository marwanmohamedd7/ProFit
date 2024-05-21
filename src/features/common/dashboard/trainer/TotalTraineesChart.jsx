import { CiShare1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Cell, Label, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Table from "../../../../ui/Table";
import Button from "../../../../ui/Button";
import UsersMoreIcon from "../../../../Icons/UsersMoreIcon";

const pieChartData = {
    totalTrainees: 116,
    details: [
        { status: "Active", value: 21, color: '#00C49F' },
        { status: "Expired", value: 13, color: '#0088FE' },
        { status: "Cancelled", value: 16, color: '#FFBB28' },
        { status: "Refunded", value: 66, color: '#FF8042' }
    ]
};

function TotalTraineesChart() {
    const navigate = useNavigate();
    return (
        <div className="rounded-md p-4 capitalize border space-y-6 shadow-sm bg-white">
            <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap">
                <h2 className="flex items-center gap-2 text-blue-900 font-bold">
                    <span><UsersMoreIcon /></span>
                    <span>Overall Trainees</span>
                </h2>
                <Button onClick={() => navigate("/trainer/trainees")} type="viewLink">
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
                                data={pieChartData.details}
                                nameKey="status"
                                dataKey="value"
                                innerRadius={85}
                                outerRadius={110}
                                cx="50%"
                                cy="50%"
                                paddingAngle={2}
                            >
                                {pieChartData.details.map(entry => (
                                    <Cell fill={entry.color} stroke={entry.color} cursor="pointer" key={entry.status} />
                                ))}
                                <Label
                                    value={pieChartData.totalTrainees.toString()}
                                    position="center"
                                    className="chart-label"
                                    fontSize="24px"
                                    fontWeight="normal"
                                    content={
                                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="20px">
                                            <tspan fill="#6B7280" fontSize="17px" x="50%" dy="-1em">Total Trainees</tspan>
                                            <tspan fill="#1b1a1a" fontWeight="bold" x="50%" dy="1.8em">{pieChartData.totalTrainees}</tspan>
                                        </text>
                                    }
                                />
                            </Pie>
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md text-sm space-y-1">
                                                <p className="font-bold text-gray-800">status: {payload[0].payload.payload.status}</p>
                                                <p className="text-gray-600">Value: {payload[0].payload.payload.value}</p>
                                                <p className="text-gray-500">Percentage: {(payload[0].payload.payload.value / pieChartData.totalTrainees * 100).toFixed(2)}%</p>
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
                                <th className="p-3">status</th>
                                <th className="p-3">Value</th>
                                <th className="p-3">percentage</th>
                                <th className="p-3"></th>
                            </tr>
                        </Table.Header>
                        <Table.Body data={pieChartData.details} render={(detail) =>
                            <tr className="text-sm text-left border bg-white" key={detail.status}>
                                <td className="p-3">{detail.status}</td>
                                <td className="p-3">{detail.value}</td>
                                <td className="p-3">{((detail.value / pieChartData.totalTrainees) * 100).toFixed(1)}%</td>
                                <td className="p-3">
                                    <span className="block w-4 h-4 rounded-full" style={{ backgroundColor: detail.color }}></span>
                                </td>
                            </tr>
                        } />
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default TotalTraineesChart;
