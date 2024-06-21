import Empty from "../../../../../../ui/Empty";
import SpinnerMini from "../../../../../../ui/SpinnerMini";
import PendingTrainerClientTransformationCard from "./PendingTrainerClientTransformationCard";
import { useGetPendingTrainerClientsTransformation } from "./useGetPendingTrainerClientsTransformation";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";

function PendingTrainerClientsTransformation() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { getPendingTrainerClientsTransformation: transformations, isLoading } = useGetPendingTrainerClientsTransformation();

    return (
        <section className={`space-y-4 p-4 rounded-md border ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_white}`}>
            <h2 className={`text-xl font-bold ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>Clients Transformation</h2>
            {
                !transformations.length || isLoading ?
                    isLoading ?
                        <div className={`h-[15dvh] text-center rounded-md flex justify-center items-center`}>
                            <SpinnerMini />
                        </div>
                        : <Empty resource={"transformations"} />
                    :
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {transformations.map((transformation) => <PendingTrainerClientTransformationCard transformation={transformation} key={transformation._id} />)}
                    </div>
            }
        </section>
    )
}

export default PendingTrainerClientsTransformation;
