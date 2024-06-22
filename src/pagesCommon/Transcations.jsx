import { useDarkMode } from "../context/DarkModeProvider";
import { useCurrentUser } from "../context/UserProvider";
import AdminFinancial from "../features/common/financial/admin/AdminFinancial";
import TrainerTranscations from "../features/common/financial/trainer/TrainerTranscations";
import BreadCrumbs from "../ui/BreadCrumbs";
import Title from "../ui/Title";

function Transcations() {
    const { isDarkMode } = useDarkMode();
    const { userRole } = useCurrentUser();
    return (
        <div className={`divide-y ${isDarkMode && "divide-gray-700"}`}>
            <div className="pb-4">
                <BreadCrumbs />
                <Title />
            </div>
            <div className="py-4">
                {userRole === "trainer" ? <TrainerTranscations /> : <AdminFinancial />}
            </div>
        </div>
    )
}

export default Transcations
