import { useParams } from "react-router-dom"
import SubmissionAndReview from "./submissionAndReview/SubmissionAndReview"
import SubscriptionPricing from "./subscriptionPricing/SubscriptionPricing"
import CompleteProfileProcedures from "./CompleteProfileProcedures"
import PersonalInfo from "./personalInformation/PersonalInfo"
import ProfessionalCred from "./professionalCredentials/ProfessionalCred"


function CompleteProfileMain() {
    const { page } = useParams();
    return (
        <main>
            <div className="grid grid-cols-[auto_1fr] h-dvh">
                {page === "personal-information" &&
                    <>
                        <CompleteProfileProcedures page={0} />
                        <div className="container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll">
                            <PersonalInfo />
                        </div>
                    </>
                }
                {page === "professional-credentials" &&
                    <>
                        <CompleteProfileProcedures page={1} />
                        <div className="container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll">
                            <ProfessionalCred />
                        </div>
                    </>
                }
                {page === "subscription-pricing" &&
                    <>
                        <CompleteProfileProcedures page={2} />
                        <div className="container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll">
                            <SubscriptionPricing />
                        </div>
                    </>
                }
                {page === "submission-and-review" &&
                    <>
                        <CompleteProfileProcedures page={3} />
                        <div className="container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll">
                            <SubmissionAndReview />
                        </div>
                    </>
                }
            </div>
        </main>
    )
}

export default CompleteProfileMain
