import Spinner from "../../../../ui/Spinner"
import ProfessionalCredentials from "./ProfessionalCredentials"


import { useGetProfileCredentials } from "./useGetProfileCredentials"

function ProfessionalCred() {
    const { getProfessionalCred, isLoading: isLoadingGettingCred } = useGetProfileCredentials()
    if (isLoadingGettingCred) return <Spinner />
    return <ProfessionalCredentials getProfessionalCred={getProfessionalCred} />
}

export default ProfessionalCred
