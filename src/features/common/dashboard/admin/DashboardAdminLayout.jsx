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
import { useDarkMode } from "../../../../context/DarkModeProvider"
import { useGetAdminDashboardData } from "./useGetAdminDashboardData"
import { useGetAdminDashboardPerformanceMetrics } from "./useGetAdminDashboardPerformanceMetrics"
import Spinner from "../../../../ui/Spinner"

// const pieChartData = {
//     totalValues: 96,
//     data: [
//         {
//             label: 'trainers',
//             value: 41,
//             color: '#2196F3',        // Light mode color
//             darkColor: '#0D47A1'     // Dark mode color
//         },
//         {
//             label: 'trainees',
//             value: 55,
//             color: '#4CAF50',        // Light mode color
//             darkColor: '#1B5E20'     // Dark mode color
//         }
//     ]
// }

// const dountChartData = {
//     totalValues: 55,
//     data: [
//         { label: "banned", value: 5, color: '#ADEF3B', darkColor: '#87B52E' },
//         { label: "blocked", value: 6, color: '#FF8042', darkColor: '#CC6536' },
//         { label: "subscriber", value: 19, color: '#FFBB28', darkColor: '#CC9620' },
//         { label: "non-subscriber", value: 25, color: '#2196F3', darkColor: '#1769AA' },
//     ]
// };

// const dountChartData1 = {
//     totalValues: 41,
//     data: [
//         { label: "Accepted", value: 21, color: '#F44336', darkColor: '#B71C1C' },
//         { label: "Rejected", value: 7, color: '#4CAF50', darkColor: '#388E3C' },
//         { label: "Pending", value: 6, color: '#FF5722', darkColor: '#E64A19' },
//         { label: "blocked", value: 2, color: '#FFC107', darkColor: '#FFA000' },
//         { label: "incomplete", value: 5, color: '#9C27B0', darkColor: '#7B1FA2' },
//     ]
// };

// const areaChartData = [
//     { date: '2024-05-01', value: 4000 },
//     { date: '2024-05-02', value: 3000 },
//     { date: '2024-05-04', value: 2780 },
//     { date: '2024-05-06', value: 2390 },
//     { date: '2024-05-07', value: 3490 },
//     { date: '2024-05-08', value: 3200 },
//     { date: '2024-05-10', value: 3300 },
//     { date: '2024-05-11', value: 3400 },
//     { date: '2024-05-12', value: 3200 },
//     { date: '2024-05-13', value: 3100 },
//     { date: '2024-05-15', value: 3650 },
//     { date: '2024-05-16', value: 3450 },
//     { date: '2024-05-18', value: 3750 },
//     { date: '2024-05-19', value: 3850 },
//     { date: '2024-05-20', value: 3950 },
//     { date: '2024-05-22', value: 4150 },
//     { date: '2024-05-24', value: 4350 },
//     { date: '2024-05-25', value: 4450 },
//     { date: '2024-05-28', value: 4750 },
//     { date: '2024-05-30', value: 4950 },
//     { date: '2024-05-31', value: 5050 },
// ];

function DashboardAdminLayout() {
    const { isDarkMode } = useDarkMode();
    const { getAdminDashboardData, isLoading: isGettingData } = useGetAdminDashboardData();
    const { getAdminDashboardPerformanceMetrics, isLoading: isGettingPerformanceMetrics } = useGetAdminDashboardPerformanceMetrics();
    if (isGettingPerformanceMetrics || isGettingData) return <div className="mt-80 flex justify-center items-center"><Spinner /></div>
    const { overAllTrainers, overAllTrainees, systemUsers, subscriptionsByDate, subscriptions } = getAdminDashboardData
    const { totalFoods, totalExercises, totalPaidAmount, totalPendingTrainers } = getAdminDashboardPerformanceMetrics
    return (
        <div className="space-y-4">
            <DashboardInfo />
            <Stats>
                <Stat icon={<CoinIcon />} color={isDarkMode ? `text-blue-500 bg-blue-900 bg-opacity-50` : `bg-blue-100 text-blue-600`} title="Total Earnings" value={`${formatCurrency(totalPaidAmount)}`} />
                <Stat icon={<DumbbellIcon />} color={isDarkMode ? `text-red-500 bg-red-900 bg-opacity-50` : `bg-red-100 text-red-600`} title="Total proFIT excerises" value={totalExercises} />
                <Stat icon={<AppleIcon fill={true} />} color={isDarkMode ? `text-green-500 bg-green-900 bg-opacity-50` : `bg-green-100 text-green-600`} title="Total proFIT foods" value={totalFoods} />
                <Stat icon={<UsersMoreIcon />} color={isDarkMode ? `text-indigo-500 bg-indigo-900 bg-opacity-50` : `bg-indigo-100 text-indigo-600`} title="total pending trainers" value={totalPendingTrainers} />
            </Stats>
            <div className="grid grid-cols-2 gap-4">
                <DashboardPieChart
                    role="admin"
                    dimenstion="50%"
                    pieChartData={systemUsers}
                    pieChartDetails={
                        {
                            title: "system users Overview",
                            icon: <UsersIcon />,
                            url: "/admin/system-users",
                            headers: ["role", "count", "percentage"],
                            colors: [
                                { color: '#2196F3', darkColor: '#0D47A1' },
                                { color: '#4CAF50', darkColor: '#1B5E20' },
                            ]
                        }
                    } />
                <DashboardDountChart
                    dountChartData={overAllTrainers}
                    dountChartDetails={
                        {
                            title: "overall Trainers",
                            icon: <UsersMoreIcon />,
                            url: "/admin/system-users?systemUsers=trainers",
                            headers: ["status", "Count", "Percentage"],
                            colors: [
                                { color: '#F44336', darkColor: '#B71C1C' },
                                { color: '#4CAF50', darkColor: '#388E3C' },
                                { color: '#FF5722', darkColor: '#E64A19' },
                                { color: '#FFC107', darkColor: '#FFA000' },
                                { color: '#9C27B0', darkColor: '#7B1FA2' },
                            ]
                        }
                    } />
                <DashboardDountChart
                    dountChartData={overAllTrainees}
                    dountChartDetails={
                        {
                            title: "overall Trainees",
                            icon: <UsersMoreIcon />,
                            url: "/admin/system-users?systemUsers=trainee",
                            headers: ["status", "Count", "Percentage"],
                            colors: [
                                { color: '#ADEF3B', darkColor: '#87B52E' },
                                { color: '#FF8042', darkColor: '#CC6536' },
                                { color: '#FFBB28', darkColor: '#CC9620' },
                                { color: '#2196F3', darkColor: '#1769AA' },
                            ]
                        }
                    } />
                <DashboardDountChart
                    dountChartData={subscriptions}
                    dountChartDetails={{
                        title: "overall transactions",
                        icon: <UsersMoreIcon />,
                        url: "/admin/Financial",
                        headers: ["status", "Count", "Percentage"],
                        colors: [
                            { color: '#FF33A1', darkColor: '#C42875' },  // New Color 4
                            { color: '#33FF57', darkColor: '#28B545' }, // New Color 2
                            { color: '#3357FF', darkColor: '#2845B5' }, // New Color 3
                            { color: '#FF5733', darkColor: '#C4451D' }, // New Color 1
                        ]
                    }}
                />

                <DashboardAreaChart areaChartData={subscriptionsByDate} areaChartDetails={
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
