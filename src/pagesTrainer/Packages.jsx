import PackagesTrainer from "../features/packages/PackagesTrainer"
import BreadCrumbs from "../ui/BreadCrumbs"
import Title from "../ui/Title"

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
