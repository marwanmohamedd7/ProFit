import { CiShare1 } from "react-icons/ci";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Button from "../../../ui/Button"

function DashboardAreaChart({ areaChartData, areaChartDetails }) {
    const navigate = useNavigate();
    const { title, icon, url } = areaChartDetails;
    const dataReady = areaChartData.map(({ date, value }) => ({ date: format(parseISO(date), 'MMMM d'), value }))
    return (
        <div className="col-span-2 rounded-md p-4 capitalize border space-y-4 shadow-sm bg-white">
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
            <div className="flex justify-between gap-4 w-full">
                <div className="rounded-md" style={{ width: '100%' }}>
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={dataReady}>
                            <CartesianGrid strokeDasharray="4" />
                            <Area
                                dataKey="value"
                                type="monotone"
                                stroke="#1D4ED8"
                                fill="#1D4ED8"
                                strokeWidth={2}
                                cursor="pointer"
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md text-sm space-y-1">
                                                <p className="font-bold text-gray-800">date: {payload[0].payload.date}</p>
                                                <p className="text-gray-600">total sales: {payload[0].payload.value} EGP</p>
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
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default DashboardAreaChart