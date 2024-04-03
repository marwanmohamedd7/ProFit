import Title from "../ui/Title"
import BreadCrumbs from "../ui/BreadCrumbs"
import PackagesTrainer from "../features/Trainer/packages/PackagesTrainer"

function Packages() {
    return (
        <div className="divide-y">
            <div className="pb-4">
                <BreadCrumbs />
                <Title />
            </div>
            <div className="py-4">
                <PackagesTrainer />
            </div>
        </div>
    )
}

export default Packages
