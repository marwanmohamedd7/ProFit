// import Title from "../ui/Title";
// import BreadCrumbs from "../ui/BreadCrumbs";
// import WorkoutAdmin from "../features/common/workout/Admin/WorkoutAdmin";
// import { useCurrentUser } from "../context/UserProvider";

import FutureFeatures from "../ui/FutureFeatures";

function Workout() {
  // const { userRole } = useCurrentUser();
  return <div className="space-y-4">
    <FutureFeatures />
    {/* <div>
      <BreadCrumbs />
      <Title />
    </div>
    {userRole === "trainer" ? "" : <WorkoutAdmin />} */}
  </div>;
}

export default Workout;
