import CompoundTabs from "../../../ui/CompoundTabs"
import Trainees from "./trainees/Trainees"
import Trainers from "./trainers/Trainers"

function SystemUsers() {
    return (
        <>
            <CompoundTabs tabsFeild="users" defaultTab="trainers">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="trainers">trainers</CompoundTabs.Open>
                    <CompoundTabs.Open opens="trainees">trainees</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="trainers">
                    <Trainers />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="trainees">
                    <Trainees />
                </CompoundTabs.Window>
            </CompoundTabs>
        </>
    )
}

export default SystemUsers
