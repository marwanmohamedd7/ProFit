import Table from "../../../../ui/Table";
import { CiShare1 } from "react-icons/ci";
import Button from "../../../../ui/Button";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import PackageIcon from "../../../../Icons/PackageIcon";
import { useNavigate } from "react-router-dom";

const data = {
    totalPackages: 100,
    packages: [
        { name: 'Gold', Subscribers: 40, color: '#0088FE' },
        { name: 'Silver', Subscribers: 30, color: '#00C49F' },
        { name: 'Bronze', Subscribers: 30, color: '#FFBB28' },
        { name: 'Champion', Subscribers: 20, color: '#FF8042' },
    ]
}

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

function PacakgesChart() {
    const navigate = useNavigate();
    return (
        <div className="rounded-md p-4 capitalize border space-y-6 shadow-sm bg-white">
            <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap">
                <h2 className="flex items-center gap-2 text-blue-900 font-bold">
                    <span><PackageIcon /></span>
                    <span>Packages Overview</span>
                </h2>
                <Button onClick={() => navigate("/trainer/packages")} type="viewLink">
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
                                data={data.packages}
                                nameKey="name"
                                dataKey="Subscribers"
                                outerRadius={110}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                fill="#8884d8"
                            >
                                {data.packages.map(entry => (
                                    <Cell fill={entry.color} stroke={entry.color} cursor="pointer" key={entry.name} />
                                ))}
                            </Pie>
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md text-sm space-y-1">
                                                <p className="font-bold text-gray-800">name: {payload[0].payload.payload.name}</p>
                                                <p className="text-gray-600">Subscribers: {payload[0].payload.payload.Subscribers}</p>
                                                <p className="text-gray-500">Percentage: {(payload[0].payload.payload.Subscribers / data.totalPackages * 100).toFixed(2)}%</p>
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
                                <th className="p-3">name</th>
                                <th className="p-3">Subscribers</th>
                                <th className="p-3">percentage</th>
                                <th className="p-3"></th>
                            </tr>
                        </Table.Header>
                        <Table.Body data={data.packages} render={(detail) =>
                            <tr className="text-sm text-left border bg-white" key={detail.name}>
                                <td className="p-3">{detail.name}</td>
                                <td className="p-3">{detail.Subscribers}</td>
                                <td className="p-3">{((detail.Subscribers / data.totalPackages) * 100).toFixed(1)}%</td>
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

export default PacakgesChart
