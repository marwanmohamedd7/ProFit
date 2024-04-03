import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import PendingTrainers from "../features/Admin/trainer approval/PendingTrainers";

function TrainersApproval() {
  return <div className="space-y-4">
    <div>
      <BreadCrumbs />
      <Title />
    </div>
    <hr />
    <PendingTrainers />
  </div>;
}

export default TrainersApproval;
