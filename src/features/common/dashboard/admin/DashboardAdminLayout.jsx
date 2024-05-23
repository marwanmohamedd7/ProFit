import { formatCurrency } from "../../../../utils/helpers"
import Stat from "../Stat"
import Stats from "../Stats"
import DashboardInfo from "../DashboardInfo"
import CoinIcon from "../../../../Icons/CoinIcon"
import UsersIcon from "../../../../Icons/UsersIcon"
import AppleIcon from "../../../../Icons/AppleIcon"
import DashboardPieChart from "../DashboardPieChart"
import DashboardAreaChart from "../DashboardAreaChart"
import DashboardDountChart from "../DashboardDountChart"
import DumbbellIcon from "../../../../Icons/DumbbellIcon"
import UsersMoreIcon from "../../../../Icons/UsersMoreIcon"

const pieChartData = {
    totalValues: 96,
    data: [
        { label: 'trainers', value: 41, color: '#0088FE' },
        { label: 'trainees', value: 55, color: '#00C49F' },
    ]
}
const dountChartData = {
    totalValues: 55,
    data: [
        { label: "banned", value: 5, color: '#ADEF3B' },
        { label: "blocked", value: 6, color: '#FF8042' },
        { label: "subscriber", value: 19, color: '#FFBB28' },
        { label: "non-subscriber", value: 25, color: '#2196F3' },
    ]
};
const dountChartData1 = {
    totalValues: 41,
    data: [
        { label: "Accepted", "value": 21, "color": "#F44336" },
        { label: "Rejected", "value": 7, "color": "#2196F3" },
        { label: "Pending", "value": 6, "color": "#FF8042" },
        { label: "blocked", "value": 2, "color": "#FFBB28" },
        { label: "incomplete", "value": 5, "color": "#ADEF3B" },
    ]
};
const areaChartData = [
    { date: '2024-05-01', value: 4000 },
    { date: '2024-05-02', value: 3000 },
    { date: '2024-05-04', value: 2780 },
    { date: '2024-05-06', value: 2390 },
    { date: '2024-05-07', value: 3490 },
    { date: '2024-05-08', value: 3200 },
    { date: '2024-05-10', value: 3300 },
    { date: '2024-05-11', value: 3400 },
    { date: '2024-05-12', value: 3200 },
    { date: '2024-05-13', value: 3100 },
    { date: '2024-05-15', value: 3650 },
    { date: '2024-05-16', value: 3450 },
    { date: '2024-05-18', value: 3750 },
    { date: '2024-05-19', value: 3850 },
    { date: '2024-05-20', value: 3950 },
    { date: '2024-05-22', value: 4150 },
    { date: '2024-05-24', value: 4350 },
    { date: '2024-05-25', value: 4450 },
    { date: '2024-05-28', value: 4750 },
    { date: '2024-05-30', value: 4950 },
    { date: '2024-05-31', value: 5050 },
];
function DashboardAdminLayout() {
    return (
        <div className="space-y-4">
            <DashboardInfo />
            <Stats>
                <Stat icon={<CoinIcon />} color="bg-blue-100 text-blue-600" title="Total Earnings" value={`${formatCurrency(2900)}`} />
                <Stat icon={<DumbbellIcon />} color="bg-red-100 text-red-600" title="Total proFIT excerises" value="15" />
                <Stat icon={<AppleIcon fill={true} />} color="bg-green-100 text-green-600" title="Total proFIT foods" value="35" />
                <Stat icon={<UsersMoreIcon />} color="bg-indigo-100 text-indigo-600" title="total pending trainers" value="43" />
            </Stats>
            <div className="grid grid-cols-2 gap-4">
                <DashboardDountChart
                    dountChartData={dountChartData1}
                    dountChartDetails={
                        {
                            title: "Trainers",
                            icon: <UsersMoreIcon />,
                            url: "/admin/system-users?systemUsers=trainers",
                            headers: ["status", "Count", "Percentage"]
                        }
                    } />
                <DashboardDountChart
                    dountChartData={dountChartData}
                    dountChartDetails={
                        {
                            title: "Trainees",
                            icon: <UsersMoreIcon />,
                            url: "/admin/system-users?systemUsers=trainee",
                            headers: ["status", "Count", "Percentage"]
                        }
                    } />
                <DashboardPieChart
                    pieChartData={pieChartData}
                    pieChartDetails={
                        {
                            title: "system users Overview",
                            icon: <UsersIcon />,
                            url: "/admin/system-users",
                            headers: ["Role", "count", "Percentage"]
                        }
                    } />
                <DashboardAreaChart areaChartData={areaChartData} areaChartDetails={
                    {
                        title: "financial Overview",
                        icon: <CoinIcon />,
                        url: "/admin/Financial",
                    }
                } />
            </div>
        </div>
    )
}

export default DashboardAdminLayout
