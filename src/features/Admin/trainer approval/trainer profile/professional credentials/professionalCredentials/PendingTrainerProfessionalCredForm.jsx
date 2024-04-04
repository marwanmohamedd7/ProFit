import SpinnerMini from "../../../../../../ui/SpinnerMini";
import PendingTrainerSocialMedia from "./PendingTrainerSocialMedia";
import PendingTrainerProfessionalCredentials from "./PendingTrainerProfessionalCredentials";

function PendingTrainerProfessionalCredForm({ getPendingTrainerProfessionalCred = {}, isLoading }) {
    const { _id, socialMedia, ...values } = getPendingTrainerProfessionalCred || {};
    return (
        <div className="space-y-4">
            <section className="space-y-4 bg-white p-4 rounded-md border">
                <h2 className="text-xl text-blue-900 font-bold">Professional Credentials</h2>
                {
                    isLoading ?
                        <div className="flex justify-center items-center h-[10dvh]"><SpinnerMini /></div>
                        :
                        <PendingTrainerProfessionalCredentials values={values} />
                }
            </section>

            <section className="space-y-4 bg-white p-4 rounded-md border">
                <h2 className="text-xl text-blue-900 font-bold">Social Media and Contact Links</h2>
                {isLoading ?
                    <div className="flex justify-center items-center h-[15dvh]"><SpinnerMini /></div>
                    :
                    // Social Media and Links
                    < PendingTrainerSocialMedia socialMedia={socialMedia} />
                }
            </section>
        </div>
    )
}

export default PendingTrainerProfessionalCredForm
