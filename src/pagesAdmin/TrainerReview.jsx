import BreadCrumbs from "../ui/BreadCrumbs";
import CompoundTabs from "../ui/CompoundTabs";
import PendingTrainerBriefDataCard from "../features/trainerApproval/PendingTrainerBriefDataCard";
import PendingTrainerPackages from "../features/trainerApproval/subscriptionPricing/PendingTrainerPackages";
import PendingTrainerPersonalData from "../features/trainerApproval/personalInformation/PendingTrainerPersonalData";
import PendingTrainerProfessionalData from "../features/trainerApproval/professionalCredentials/PendingTrainerProfessionalData";

function TrainerReview() {
  return (
    <div className="space-y-2">
      <BreadCrumbs />
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
    </div>
  )
}

export default TrainerReview;