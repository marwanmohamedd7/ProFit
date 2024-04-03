import FilterButtons from "../../../../ui/FilterButtons";
import SearchInput from "../../../../ui/SearchInput";
import TraineesTable from "./TraineesTable";

function Trainees() {
    return (
        <>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between mb-2">
                <SearchInput placeholder="Search Trainee Name..." />
                <FilterButtons name="trainees" />
            </div>
            <TraineesTable />
        </>
    )
}

export default Trainees
