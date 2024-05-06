import FilterButtons from "../../../../ui/FilterButtons";
import SearchInput from "../../../../ui/SearchInput";
import TrainersTable from "./TrainersTable";

function Trainers({ users, count }) {
    return (
        <>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between mb-2">
                <SearchInput placeholder="Search Trainer Name..." />
                <FilterButtons name="trainers" />
            </div>
            <TrainersTable users={users} count={count} />
        </>
    )
}

export default Trainers
