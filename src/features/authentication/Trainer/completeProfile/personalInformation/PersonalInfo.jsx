import Spinner from "../../../../../ui/Spinner"
import PersonalInfoForm from "./PersonalInfoForm"
import { useGetPersonalInfo } from "./useGetPersonalInfo"

function PersonalInfo() {
    const { getPersonalInfo, isLoadingGettingInfo } = useGetPersonalInfo()
    if (isLoadingGettingInfo) return <Spinner />
    return <PersonalInfoForm getPersonalInfo={getPersonalInfo} />
}
export default PersonalInfo
