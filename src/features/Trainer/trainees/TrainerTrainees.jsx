import CompoundTabs from "../../../ui/CompoundTabs"
import TrainerSubscribedTrainees from "./subscribedTraineesTable/SubscribedTrainees"
import TrainerSubscribedTraineesAssessments from "./subscribedTraineesAssessmentsTable/SubscribedTraineesAssessments"

function TrainerTrainees() {
    return (
        <CompoundTabs tabsFeild="trainerClients" defaultTab="clients">
            <CompoundTabs.Tabs>
                <CompoundTabs.Open opens="clients">clients</CompoundTabs.Open>
                <CompoundTabs.Open opens="assessments">assessments</CompoundTabs.Open>
            </CompoundTabs.Tabs>
            <div className="py-4">
                <CompoundTabs.Window opens="clients">
                    <TrainerSubscribedTrainees />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="assessments">
                    <TrainerSubscribedTraineesAssessments />
                </CompoundTabs.Window>
            </div>
        </CompoundTabs>
    )
}

export default TrainerTrainees
