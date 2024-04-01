import BreadCrumbs from "../ui/BreadCrumbs";
import Image from "../ui/Image";
import Title from "../ui/Title";

function DashboardTrainer() {
    return <div className="space-y-4">
        <div>
            <BreadCrumbs />
            <Title />
            <Image/>
        </div>
    </div>
}
export default DashboardTrainer;
