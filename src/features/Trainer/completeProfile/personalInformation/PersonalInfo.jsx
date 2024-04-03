import Spinner from "../../../../ui/Spinner"
import PersonalInformation from "./PersonalInformation"
import { useGetPersonalInfo } from "./useGetPersonalInfo"

function PersonalInfo() {
    const { getPersonalInfo, isLoadingGettingInfo } = useGetPersonalInfo()
    if (isLoadingGettingInfo) return <Spinner />
    return <PersonalInformation getPersonalInfo={getPersonalInfo} />
}
export default PersonalInfo
