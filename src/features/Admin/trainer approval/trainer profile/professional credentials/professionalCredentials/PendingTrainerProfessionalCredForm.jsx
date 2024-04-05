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
                        <div className="bg-gray-50 h-[10dvh] text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                            <div className="font-bold text-xl text-blue-900 my-4"><SpinnerMini /></div>
                        </div>
                        :
                        <PendingTrainerProfessionalCredentials values={values} />
                }
            </section>

            <section className="space-y-4 bg-white p-4 rounded-md border">
                <h2 className="text-xl text-blue-900 font-bold">Social Media and Contact Links</h2>
                {
                    isLoading ?
                        <div className="bg-gray-50 h-[20dvh] text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                            <div className="font-bold text-xl text-blue-900 my-4"><SpinnerMini /></div>
                        </div>
                        :
                        // Social Media and Links
                        < PendingTrainerSocialMedia socialMedia={socialMedia} />
                }
            </section>
        </div>
    )
}

export default PendingTrainerProfessionalCredForm
