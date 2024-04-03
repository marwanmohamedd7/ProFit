import CompoundTabs from "../../../../ui/CompoundTabs"
import PendingTrainerBriefDataCard from "./PendingTrainerBriefDataCard"
import PendingTrainerPersonalData from "./personal information/PendingTrainerPersonalData"
import PendingTrainerProfessionalData from "./professional credentials/PendingTrainerProfessionalData"
import PendingTrainerPackages from "./subscrption pricing/PendingTrainerPackages"

function TrainerReviewProfile() {
    return (
        <>
            <PendingTrainerBriefDataCard />
            <CompoundTabs defaultTab="PersonalInformation">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="PersonalInformation">personal information</CompoundTabs.Open>
                    <CompoundTabs.Open opens="professional-credentials">professional credentials</CompoundTabs.Open>
                    <CompoundTabs.Open opens="subscription-pricing">subscription pricing</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="PersonalInformation">
                    <PendingTrainerPersonalData />
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
