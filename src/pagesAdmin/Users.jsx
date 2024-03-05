import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import CompoundTabs from "../ui/CompoundTabs";
import Trainees from "../features/systemUsers/Trainees/Trainees";
import Trainers from "../features/systemUsers/Trainers/Trainers";


function Users() {
  return <div className="space-y-4">
    <div>
      <BreadCrumbs />
      <Title />
    </div>
    <CompoundTabs defaultTab="trainers">
      <CompoundTabs.Tabs>
        <CompoundTabs.Open opens="trainers">trainers</CompoundTabs.Open>
        <CompoundTabs.Open opens="trainees">trainees</CompoundTabs.Open>
      </CompoundTabs.Tabs>
      <CompoundTabs.Window opens="trainers">
        <Trainers />
      </CompoundTabs.Window>
      <CompoundTabs.Window opens="trainees">
        <Trainees />
      </CompoundTabs.Window>
    </CompoundTabs>
  </div>;
}

export default Users;
