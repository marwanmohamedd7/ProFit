import Title from "../ui/Title"
import BreadCrumbs from "../ui/BreadCrumbs"
import PackagesTrainer from "../features/Trainer/packages/PackagesTrainer"
import { useDarkMode } from "../context/DarkModeProvider";

function Packages() {
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`divide-y ${isDarkMode && "divide-gray-700"}`}>
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
