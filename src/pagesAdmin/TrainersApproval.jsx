import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import PendingTrainers from "../features/Admin/trainer approval/PendingTrainers";
import { useDarkMode } from "../context/DarkModeProvider";

function TrainersApproval() {
  const { isDarkMode } = useDarkMode();
  return <div className={`space-y-4 divide-y ${isDarkMode && "divide-gray-700"}`}>
    <div>
      <BreadCrumbs />
      <Title />
    </div>
    <div>
      <PendingTrainers />
    </div>
  </div>;
}

export default TrainersApproval;
