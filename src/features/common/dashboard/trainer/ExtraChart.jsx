import { CiShare1 } from "react-icons/ci";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Button from "../../../../ui/Button";
import CoinIcon from "../../../../Icons/CoinIcon";

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

function ExtraChart() {
    const navigate = useNavigate();
    const dataReady = data.map(({ date, subscribers }) => ({ date: format(parseISO(date), 'MMMM d'), subscribers }))
    return (
        <div className="rounded-md p-4 capitalize border space-y-6 shadow-sm bg-white">
            <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap">
                <h2 className="flex items-center gap-2 text-blue-900 font-bold">
                    <span><CoinIcon /></span>
                    <span>subscriptions overview</span>
                </h2>
                <Button onClick={() => navigate("/trainer/subscriptions")} type="viewLink">
                    <p className="flex items-center justify-center gap-1">
                        <span>View Details</span>
                        <span><CiShare1 /></span>
                    </p>
                </Button>
            </div>
            <div className="flex justify-between gap-4 w-full">
                <div className="rounded-md" style={{ width: '100%' }}>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dataReady}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar
                                dataKey="subscribers"
                                stroke="#1D4ED8"
                                fill="#1D4ED8"
                                strokeWidth={2}
                                type="monotone"
                                cursor="pointer"
                            // barSize={50}
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md text-sm space-y-1">
                                                <p className="font-bold text-gray-800">date: {payload[0].payload.date}</p>
                                                <p className="text-gray-600">total sales: {payload[0].payload.subscribers} EGP</p>
                                            </div>
                                        )
                                    }
                                    return null;
                                }} />
                            <XAxis
                                dataKey="date"
                                tick={{ fill: "#012357" }}
                                tickLine={{ stroke: "#012357" }}
                                fontSize={14}
                                tickMargin={10}
                                tickSize={4}
                            />
                            <YAxis
                                unit=" EP"
                                tick={{ fill: "#012357" }}
                                tickLine={{ stroke: "#012357" }}
                                fontSize={14}
                                tickMargin={5}
                                tickSize={4}
                                tickCount={6}
                            />
                            {/* <Legend /> */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default ExtraChart
