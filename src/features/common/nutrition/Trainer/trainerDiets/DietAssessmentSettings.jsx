import Spinner from "../../../../../ui/Spinner";
import DietAssessmentSettingsForm from "./DietAssessmentSettingsForm";
import { useGetDietAssessmentSettingsForm } from "./useGetDietAssessmentSettingsForm";

function DietAssessmentSettings() {
    const { getDietAssessmentSettingsForm, isLoading } = useGetDietAssessmentSettingsForm();
    if (isLoading) return <div className="w-[45rem] h-[30rem]"><Spinner /></div>
    return <DietAssessmentSettingsForm getDietAssessmentSettingsForm={getDietAssessmentSettingsForm} />
}

export default DietAssessmentSettings
