import { formatCurrency } from "../../../../utils/helpers"
import Stat from "../Stat"
import Stats from "../Stats"
import DashboardInfo from "../DashboardInfo"
import AssessmentsChart from "./assessmentChart/AssessmentsChart"
import StarIcon from "../../../../Icons/StarIcon"
import CoinIcon from "../../../../Icons/CoinIcon"
import AppleIcon from "../../../../Icons/AppleIcon"
import DashboardBarChart from "../DashboardBarChart"
import DashboardPieChart from "../DashboardPieChart"
import DashboardAreaChart from "../DashboardAreaChart"
import PackageIcon from "../../../../Icons/PackageIcon"
import DashboardDountChart from "../DashboardDountChart"
import DumbbellIcon from "../../../../Icons/DumbbellIcon"
import UsersMoreIcon from "../../../../Icons/UsersMoreIcon"

const pieChartData = {
    totalValues: 100,
    data: [
        { label: 'Gold', value: 40, active: 20, expired: 10, cancelled: 30, color: '#0088FE' },
        { label: 'Silver', value: 30, active: 20, expired: 10, cancelled: 30, color: '#00C49F' },
        { label: 'Bronze', value: 30, active: 20, expired: 10, cancelled: 30, color: '#FFBB28' },
        { label: 'Champion', value: 20, active: 20, expired: 10, cancelled: 30, color: '#FF8042' },
    ]
}
const dountChartData = {
    totalValues: 116,
    data: [
        { label: "Active", value: 21, color: '#00C49F' },
        { label: "Expired", value: 13, color: '#0088FE' },
        { label: "Cancelled", value: 16, color: '#FFBB28' },
        { label: "Refunded", value: 66, color: '#FF8042' }
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
function DashboardTrainerLayout() {
    return (
        <div className="space-y-4">
            <DashboardInfo />
            <Stats>
                <Stat icon={<CoinIcon />} color="bg-blue-100 text-blue-600" title="Total Earnings" value={`${formatCurrency(2900)}`} />
                <Stat icon={<DumbbellIcon />} color="bg-red-100 text-red-600" title="Total Workout Plans" value="15" />
                <Stat icon={<AppleIcon fill={true} />} color="bg-green-100 text-green-600" title="Total Diet Plans" value="35" />
                <Stat icon={<StarIcon />} color="bg-amber-100" title="Profile Rating" value="4.3" />
            </Stats>
            <div className="grid grid-cols-2 gap-4">
                <AssessmentsChart />
                <DashboardPieChart
                    pieChartData={pieChartData}
                    pieChartDetails={
                        {
                            title: "Packages Overview",
                            icon: <PackageIcon />,
                            url: "/trainer/packages",
                            headers: ["name", "Subscribers", "status"]
                        }
                    }
                />
                <DashboardDountChart
                    dountChartData={dountChartData}
                    dountChartDetails={
                        {
                            title: "Trainees",
                            icon: <UsersMoreIcon />,
                            url: "/trainer/trainees",
                            headers: ["status", "Count", "Percentage"]
                        }
                    }
                />
                <DashboardBarChart />
                <DashboardAreaChart areaChartData={areaChartData} areaChartDetails={
                    {
                        title: "Subscriptions Overview",
                        icon: <CoinIcon />,
                        url: "/trainer/subscriptions",
                    }
                } />
            </div>

        </div>
    )
}

export default DashboardTrainerLayout
