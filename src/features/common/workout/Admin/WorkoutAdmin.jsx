import CompoundTabs from "../../../../ui/CompoundTabs"
import Exercises from "./exercises/Exercises"

function WorkoutAdmin() {
    return (
        <>
            <CompoundTabs defaultTab="exercises">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="exercises">exercises</CompoundTabs.Open>
                    <CompoundTabs.Open opens="sections">sections</CompoundTabs.Open>
                    <CompoundTabs.Open opens="workout_template">workout template</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="exercises">
                    <Exercises />
                </CompoundTabs.Window>
            </CompoundTabs>   
        </>
    )
}

export default WorkoutAdmin
