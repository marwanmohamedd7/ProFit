import Spinner from "../../../../ui/Spinner"
import { useGetPersonalInfo } from "../../completeProfile/personalInformation/useGetPersonalInfo"
import { useGetProfileCredentials } from "../../completeProfile/professionalCredentials/useGetProfileCredentials"
import AboutMeForm from "./AboutMeForm"

function AboutMe() {
    const { getPersonalInfo, isLoadingGettingInfo } = useGetPersonalInfo()
    const { getProfessionalCred, isLoading: isLoadingGettingCred } = useGetProfileCredentials()
    if (isLoadingGettingInfo || isLoadingGettingCred) return <div className="mt-24 flex justify-center items-center"><Spinner /></div>
    return <AboutMeForm getPersonalInfo={getPersonalInfo} getProfessionalCred={getProfessionalCred} />
}

export default AboutMe
