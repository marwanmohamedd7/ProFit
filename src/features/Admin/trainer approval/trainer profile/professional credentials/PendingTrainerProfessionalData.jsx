
import PendingTrainerClientsTransformation from "./PendingTrainerClientsTransformation";
import PendingTrainerProfessionalCredentials from "./PendingTrainerProfessionalCredentials";
import PendingTrainerQualifications from "./PendingTrainerQualifications";
import PendingTrainerSocialMedia from "./PendingTrainerSocialMedia";

function PendingTrainerProfessionalData() {
    return (
        <div className="container max-w-7xl mx-autosm:p-6 space-y-4">
            {/* Professional Credentials */}
            <PendingTrainerProfessionalCredentials />

            {/* Social Media and Contact Links */}
            <PendingTrainerSocialMedia />

            {/* Qualifications and Achievements */}
            <PendingTrainerQualifications />

            {/* Clients Transformation Photos */}
            <PendingTrainerClientsTransformation />
        </div>
    )
}

export default PendingTrainerProfessionalData
