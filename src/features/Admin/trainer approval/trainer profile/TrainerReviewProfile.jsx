import CompoundTabs from "../../../../ui/CompoundTabs"
import PendingTrainerInfoBar from "./PendingTrainerInfoBar"
import PendingTrainerPackages from "./subscrption pricing/PendingTrainerPackages"
import PendingTrainerPersonalInfo from "./personal information/PendingTrainerPersonalInfo"
import PendingTrainerProfessionalData from "./professional credentials/PendingTrainerProfessionalData"

function TrainerReviewProfile() {

    return (
        <>
            <PendingTrainerInfoBar />
            <CompoundTabs defaultTab="PersonalInformation">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="PersonalInformation">personal information</CompoundTabs.Open>
                    <CompoundTabs.Open opens="professional-credentials">professional credentials</CompoundTabs.Open>
                    <CompoundTabs.Open opens="subscription-pricing">subscription pricing</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="PersonalInformation">
                    <PendingTrainerPersonalInfo />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="professional-credentials">
                    <PendingTrainerProfessionalData />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="subscription-pricing">
                    <PendingTrainerPackages />
                </CompoundTabs.Window>
            </CompoundTabs>
        </>
    )
}

export default TrainerReviewProfile
