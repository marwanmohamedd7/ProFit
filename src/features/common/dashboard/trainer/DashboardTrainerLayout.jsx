import { formatCurrency } from "../../../../utils/helpers"
import Stat from "../Stat"
import Stats from "../Stats"
import DashboardInfo from "../DashboardInfo"
import AssessmentsChart from "./assessmentChart/AssessmentsChart"
import StarIcon from "../../../../Icons/StarIcon"
import CoinIcon from "../../../../Icons/CoinIcon"
import AppleIcon from "../../../../Icons/AppleIcon"
// import DashboardBarChart from "../DashboardBarChart"
import DashboardPieChart from "../DashboardPieChart"
import DashboardAreaChart from "../DashboardAreaChart"
import PackageIcon from "../../../../Icons/PackageIcon"
import DashboardDountChart from "../DashboardDountChart"
import DumbbellIcon from "../../../../Icons/DumbbellIcon"
import UsersMoreIcon from "../../../../Icons/UsersMoreIcon"
import { useDarkMode } from "../../../../context/DarkModeProvider"
import { useGetTrainerDashboardPerformanceMetrics } from "./useGetTrainerDashboardPerformanceMetrics"
import Spinner from "../../../../ui/Spinner"
import { useGetDashboardTraineesAssessments } from "./assessmentChart/useGetDashboardTraineesAssessments"
import { useGetTrainerDashboardData } from "./useGetTrainerDashboardData"

// const pieChartData = {
//     totalValues: 100,
//     data: [
//         { label: 'Gold', value: 37, active: 22, expired: 10, cancelled: 5, color: '#0088FE', darkColor: '#005BB5' },
//         { label: 'Silver', value: 22, active: 12, expired: 7, cancelled: 3, color: '#00C49F', darkColor: '#00796B' },
//         { label: 'Bronze', value: 28, active: 23, expired: 4, cancelled: 1, color: '#FFBB28', darkColor: '#FFA500' },
//         { label: 'Champion', value: 13, active: 10, expired: 1, cancelled: 2, color: '#FF8042', darkColor: '#FF4500' },
//     ]
// };

// const dountChartData = {
//     totalValues: 116,
//     data: [
//         { label: "Active", value: 21, color: '#6A5ACD', darkColor: '#483D8B' }, // SlateBlue, DarkSlateBlue
//         { label: "Expired", value: 13, color: '#7B68EE', darkColor: '#6A5ACD' }, // MediumSlateBlue, SlateBlue
//         { label: "Cancelled", value: 16, color: '#48D1CC', darkColor: '#20B2AA' }, // MediumTurquoise, LightSeaGreen
//         { label: "Refunded", value: 66, color: '#FF6347', darkColor: '#CD5C5C' }  // Tomato, IndianRed
//     ]
// };

// const dountChartData1 = {
//     totalValues: 116,
//     data: [
//         { label: "Active", value: 21, color: '#FFD700', darkColor: '#B8860B' }, // Gold, DarkGoldenRod
//         { label: "Expired", value: 13, color: '#4682B4', darkColor: '#5F9EA0' }, // SteelBlue, CadetBlue
//         { label: "Cancelled", value: 16, color: '#32CD32', darkColor: '#228B22' }, // LimeGreen, ForestGreen
//         // { label: "Refunded", value: 66, color: '#FF1493', darkColor: '#C71585' }  // DeepPink, MediumVioletRed
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

function DashboardTrainerLayout() {
    const { isDarkMode } = useDarkMode();
    const { getDashboardTraineesAssessments, isLoading: isGettingTraineesAssessments } = useGetDashboardTraineesAssessments();
    const { getTrainerDashboardPerformanceMetrics, isLoading: isGettingPerformanceMetrics } = useGetTrainerDashboardPerformanceMetrics();
    const { getTrainerDashboardData, isLoading: isGettingData } = useGetTrainerDashboardData();
    if (isGettingPerformanceMetrics || isGettingTraineesAssessments || isGettingData) return <div className="mt-80 flex justify-center items-center"><Spinner /></div>
    const { totalNutritionPlans, totalWorkoutPlans, totalPaidAmount, averageRating } = getTrainerDashboardPerformanceMetrics ?? {}
    const { packages, subscriptions, subscriptionsByStartDate, trainees } = getTrainerDashboardData
    return (
        <div className="space-y-4">
            <DashboardInfo />
            <Stats>
                <Stat icon={<CoinIcon />} color={isDarkMode ? `text-blue-500 bg-blue-900 bg-opacity-50` : `bg-blue-100 text-blue-600`} title="Total Earnings" value={`${formatCurrency(totalPaidAmount)}`} />
                <Stat icon={<DumbbellIcon />} color={isDarkMode ? `text-red-500 bg-red-900 bg-opacity-50` : `bg-red-100 text-red-600`} title="Total Workout Plans" value={totalWorkoutPlans} />
                <Stat icon={<AppleIcon fill={true} />} color={isDarkMode ? `text-green-500 bg-green-900 bg-opacity-50` : `bg-green-100 text-green-600`} title="Total Diet Plans" value={totalNutritionPlans} />
                <Stat icon={<StarIcon />} color={isDarkMode ? `text-amber-500 bg-amber-900 bg-opacity-50` : `bg-amber-100 text-amber-600`} title="Profile Rating" value={averageRating} />
            </Stats>
            <div className="grid grid-cols-2 gap-4">
                <AssessmentsChart traineesAssessments={getDashboardTraineesAssessments} />
                <DashboardPieChart
                    pieChartData={packages}
                    pieChartDetails={
                        {
                            title: "Packages Overview",
                            icon: <PackageIcon />,
                            url: "/trainer/packages",
                            headers: ["name", "subscribers", "active", "expired", "cancelled", "percentage"],
                            colors: [
                                {color: '#0088FE', darkColor: '#005BB5'},
                                {color: '#00C49F', darkColor: '#00796B'},
                                {color: '#FFBB28', darkColor: '#FFA500'},
                                {color: '#FF8042', darkColor: '#FF4500'},
                            ]
                        }
                    }
                />
                <DashboardDountChart
                    dountChartData={trainees}
                    dountChartDetails={
                        {
                            title: "Overall Trainees",
                            icon: <UsersMoreIcon />,
                            url: "/trainer/trainees",
                            headers: ["status", "Count", "Percentage"],
                            colors: [
                                // { color: '#7B68EE', darkColor: '#6A5ACD' },
                                { color: '#6A5ACD', darkColor: '#483D8B' },
                                { color: '#48D1CC', darkColor: '#20B2AA' },
                                { color: '#FF6347', darkColor: '#CD5C5C' },
                            ]
                        }
                    }
                />
                <DashboardDountChart
                    dountChartData={subscriptions}
                    dountChartDetails={
                        {
                            title: "Overall subscriptions",
                            icon: <UsersMoreIcon />,
                            url: "/trainer/trainees",
                            headers: ["status", "Count", "Percentage"],
                            colors: [
                                { color: '#FFD700', darkColor: '#B8860B' },
                                { color: '#4682B4', darkColor: '#5F9EA0' },
                                { color: '#32CD32', darkColor: '#228B22' },
                                { color: '#FF1493', darkColor: '#C71585' },
                            ]
                        }
                    }
                />
                {/* <DashboardBarChart /> */}
                <DashboardAreaChart areaChartData={subscriptionsByStartDate} areaChartDetails={
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
