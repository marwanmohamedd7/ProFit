import Spinner from "../../../../../ui/Spinner"
import ProfessionalCredentialsForm from "./ProfessionalCredentialsForm"
import { useGetProfileCredentials } from "./useGetProfileCredentials"

function ProfessionalCredentials() {
    const { getProfessionalCred, isLoading: isLoadingGettingCred } = useGetProfileCredentials()
    if (isLoadingGettingCred) return <Spinner />
    return <ProfessionalCredentialsForm getProfessionalCred={getProfessionalCred} />
}

export default ProfessionalCredentials
