import PackageIcon from "../../../../../Icons/PackageIcon";
// import CircularProgress from "../../../../ui/CircularProgress";
// import SubscribedTrainees from "../../../../Trainer/trainees/subscribedTraineesTable/SubscribedTrainees";
import DashboardInfoCardLayout from "../../DashboardInfoCardLayout";
import AssessmentsOverviewTable from "./AssessmentsOverviewTable";

function AssessmentsChart({ traineesAssessments }) {
    return (
        <DashboardInfoCardLayout title="assessments overview" url="/trainer/trainees" icon={<PackageIcon />}>
            {/* <CircularProgress plan="diet plan" percentage="54" icon={<AppleIcon />} size="size-56" variations="assessmentsChart" />
                <CircularProgress plan="workout plan" percentage="74" icon={<DumbbellIcon />} size="size-56" variations="assessmentsChart" /> */}
            <AssessmentsOverviewTable traineesAssessments={traineesAssessments} />
        </DashboardInfoCardLayout>
    );
}

export default AssessmentsChart
