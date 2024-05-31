import { CiShare1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../ui/Button";
import PackageIcon from "../../../../../Icons/PackageIcon";
// import CircularProgress from "../../../../ui/CircularProgress";
import AppleIcon from "../../../../../Icons/AppleIcon";
import DumbbellIcon from "../../../../../Icons/DumbbellIcon";
// import SubscribedTrainees from "../../../../Trainer/trainees/subscribedTraineesTable/SubscribedTrainees";
import AssessmentsOverviewTable from "./AssessmentsOverviewTable";

function AssessmentsChart() {
    const navigate = useNavigate()
    return (
        <div className="rounded-md p-4 capitalize border space-y-4 shadow-sm bg-white">
            <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap whitespace-nowrap">
                <h2 className="flex items-center gap-2 text-blue-900 font-bold">
                    <span><PackageIcon /></span>
                    <span>assessments overview</span>
                </h2>
                <Button onClick={() => navigate("/trainer/trainees")} type="viewLink">
                    <p className="flex items-center justify-center gap-1">
                        <span>View Details</span>
                        <span><CiShare1 /></span>
                    </p>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-4 border bg-gray-50 rounded-md text-blue-900 font-bold">
                    <p className="flex justify-center items-center gap-2 capitalize">
                        <span><AppleIcon /></span>
                        <span>total diet assessment</span>
                    </p>
                    <p className="text-3xl">5</p>
                </div>
                <div className="flex justify-between items-center p-4 border bg-gray-50 rounded-md text-blue-900 font-bold">
                    <p className="flex justify-center items-center gap-2 capitalize">
                        <span><DumbbellIcon /></span>
                        <span>total workout assessment</span>
                    </p>
                    <p className="text-3xl">5</p>
                </div>
                {/* <div className="col-span-2">
                    <SubscribedTrainees />
                </div> */}
            </div>
            {/* <CircularProgress plan="diet plan" percentage="54" icon={<AppleIcon />} size="size-56" variations="assessmentsChart" />
                <CircularProgress plan="workout plan" percentage="74" icon={<DumbbellIcon />} size="size-56" variations="assessmentsChart" /> */}
            <AssessmentsOverviewTable />
        </div>
    );
}

export default AssessmentsChart
