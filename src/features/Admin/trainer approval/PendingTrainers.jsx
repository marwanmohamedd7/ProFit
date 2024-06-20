import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import PendingTrainerCard from "./PendingTrainerCard";
import { useGetPendingTrainers } from "./useGetPendingTrainers";

function PendingTrainers() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { pendingTrainers = [], isLoading } = useGetPendingTrainers()
    if (isLoading) return <div className="h-[45dvh]"><Spinner /></div>
    if (!pendingTrainers.length) return <Empty resource={"trainers"} />
    return (
        <div className="container mx-auto p-4 rounded-md">
            <h1 className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_700} font-semibold mb-4 text-sm capitalize`}>Trainers profile ({pendingTrainers.length})</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {pendingTrainers.map((trainer) => <PendingTrainerCard key={trainer._id} trainer={trainer} />)}
            </div>
        </div>
    )
}

export default PendingTrainers
