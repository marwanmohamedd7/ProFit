import Stats from "../Stats"
import PacakgesChart from "./PacakgesChart"
import DashboardInfo from "../DashboardInfo"
import AssessmentsChart from "./AssessmentsChart"
import SubscriptionsChart from "./SubscriptionsChart"
import TotalTraineesChart from "./TotalTraineesChart"
import ExtraChart from "./ExtraChart"
function DashboardTrainerLayout() {
    return (
        <div className="space-y-4">
            <DashboardInfo />
            <Stats />
            <div className="grid grid-cols-2 gap-4">
                <TotalTraineesChart />
                <AssessmentsChart />
                <ExtraChart />
                <PacakgesChart />
                <SubscriptionsChart />
            </div>
        </div>
    )
}

export default DashboardTrainerLayout
