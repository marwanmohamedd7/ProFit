import Button from "../../../ui/Button"
import FilterForm from "../../../ui/FilterForm"
import SearchInput from "../../../ui/SearchInput"
import WorkoutTable from "../WorkoutTable"

function Exercises() {
    return (
        <>
            <FilterForm filterAttr={
                [
                    {
                        label: 'exercise tool',
                        options: ["Select exercise tool"]
                    },
                    {
                        label: "target muscle",
                        options: ["select target muscle"]
                    },
                    {
                        label: "exercise location",
                        options: ["Select exercise location"]
                    },
                    {
                        label: "exercise type",
                        options: ["Select exercise type"]
                    },
                    {
                        label: "exercise level",
                        options: ["Select exercise level"]
                    },
                    {
                        label: "exercise category",
                        options: ["Select exercise category"]
                    },
                ]
            } />
            <div className="flex flex-wrap gap-2 md:gap-0 justify-between mb-2">
                <SearchInput placeholder="Search Exercise Name..." />
                <Button>Create New Exercise +</Button>
            </div>
            <WorkoutTable />
        </>
    )
}

export default Exercises
