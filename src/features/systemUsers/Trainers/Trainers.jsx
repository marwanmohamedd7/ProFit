import FilterButtons from "../../../ui/FilterButtons";
import SearchInput from "../../../ui/SearchInput";
import TrainersTable from "./TrainersTable";

function Trainers() {
    return (
        <>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between mb-2">
                <SearchInput placeholder="Search Trainer Name..." />
                <FilterButtons name="trainers" />
            </div>
            <TrainersTable />
        </>
    )
}

export default Trainers
