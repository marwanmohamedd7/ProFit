import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import WorkoutAdmin from "../features/common/workout/Admin/WorkoutAdmin";

function Workout() {
  return <div className="space-y-4">
    <div>
      <BreadCrumbs />
      <Title />
    </div>
    <WorkoutAdmin />
  </div>;
}

export default Workout;
