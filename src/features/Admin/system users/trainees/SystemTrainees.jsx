import TraineesTable from "./SystemTraineesTable";
import SearchInput from "../../../../ui/SearchInput";
import FilterButtons from "../../../../ui/FilterButtons";

function SystemTrainees({ users, count }) {
    return (
        <>
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between mb-2">
                <SearchInput placeholder="Search Trainee Name..." />
                <FilterButtons
                    fiterFeilds={[
                        { label: "Active", value: "active" },
                        { label: "Blocked", value: "blocked" },
                    ]}
                />
            </div>
            <TraineesTable users={users} count={count} />
        </>
    )
}

export default SystemTrainees
