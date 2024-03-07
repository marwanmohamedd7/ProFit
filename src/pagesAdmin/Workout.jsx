import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import CompoundTabs from "../ui/CompoundTabs";
import Exercises from "../features/workout/Admin/exercises/Exercises";

function Workout() {
  return <div className="space-y-4">
    <div>
      <BreadCrumbs />
      <Title />
    </div>
    <CompoundTabs defaultTab="exercises">
      <CompoundTabs.Tabs>
        <CompoundTabs.Open opens="exercises">exercises</CompoundTabs.Open>
        <CompoundTabs.Open opens="sections">sections</CompoundTabs.Open>
        <CompoundTabs.Open opens="workout_template">workout template</CompoundTabs.Open>
      </CompoundTabs.Tabs>
      <CompoundTabs.Window opens="exercises">
        <Exercises />
      </CompoundTabs.Window>
    </CompoundTabs>
  </div>;
}

export default Workout;
