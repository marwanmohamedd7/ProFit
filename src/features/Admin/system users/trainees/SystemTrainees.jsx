import TraineesTable from "./SystemTraineesTable";
import SearchInput from "../../../../ui/SearchInput";
import FilterButtons from "../../../../ui/FilterButtons";

function SystemTrainees({ users, count, setSearchKeyword }) {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2 lg:gap-0 justify-between px-4">
                <SearchInput
                    placeholder="Search Trainee Name..."
                    setSearchKeyword={setSearchKeyword}
                />
                <FilterButtons
                    fiterBtns={{
                        fiterFeild: "users",
                        options: [
                            { label: "All", value: "All" },
                            { label: "Subscriber", value: "Subscriber" },
                            { label: "Non Subscriber", value: "Non-Subscriber" },
                            { label: "Banned", value: "Banned" },
                            { label: "Blocked", value: "Blocked" },
                        ]
                    }}
                />
            </div>
            <TraineesTable users={users} count={count} />
        </div>
    )
}

export default SystemTrainees
