import PendingTrainerProfessionalCredForm from "./PendingTrainerProfessionalCredForm";
import { useGetPendingTrainerProfessionalCred } from "./useGetPendingTrainerProfessionalCred"

function PendingTrainerProfessionalCred() {
    const { getPendingTrainerProfessionalCred, isLoading } = useGetPendingTrainerProfessionalCred();
    return <PendingTrainerProfessionalCredForm getPendingTrainerProfessionalCred={getPendingTrainerProfessionalCred} isLoading={isLoading}/>
}

export default PendingTrainerProfessionalCred

