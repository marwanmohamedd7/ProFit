import TrainersTable from "./SystemTrainersTable";
import SearchInput from "../../../../ui/SearchInput";
import FilterButtons from "../../../../ui/FilterButtons";

function SystemTrainers({ users, count, setSearchKeyword }) {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between px-4">
                <SearchInput
                    placeholder="Search Trainer Name..."
                    setSearchKeyword={setSearchKeyword}
                />
                <FilterButtons
                    fiterBtns={{
                        fiterFeild: "users",
                        options: [
                            { label: "All", value: "All" },
                            { label: "Accepted", value: "Accepted" },
                            { label: "Incomplete", value: "Incomplete" },
                            { label: "Pending", value: "Pending" },
                            { label: "Rejected", value: "Rejected" },
                            { label: "Blocked", value: "Blocked" },
                        ]
                    }}
                />
            </div>
            <TrainersTable users={users} count={count} />
        </div>
    )
}

export default SystemTrainers
