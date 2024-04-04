import PendingTrainerProfessionalCred from "./professionalCredentials/PendingTrainerProfessionalCred";
import PendingTrainerQualifications from "./qualificationsAndAchievements/PendingTrainerQualifications";
import PendingTrainerClientsTransformation from "./clientsTransformation/PendingTrainerClientsTransformation";

function PendingTrainerProfessionalData() {
    return (
        <div className="container space-y-4">
            {/* Professional Credentials */}
            <PendingTrainerProfessionalCred />

            {/* Qualifications and Achievements */}
            <PendingTrainerQualifications />

            {/* Clients Transformation Photos */}
            <PendingTrainerClientsTransformation />
        </div>
    )
}

export default PendingTrainerProfessionalData
