import Spinner from "../../../ui/Spinner";
import CompoundTabs from "../../../ui/CompoundTabs"
import SystemTrainees from "./trainees/SystemTrainees";
import SystemTrainers from "./trainers/SystemTrainers";
import { useGetSystemUsers } from "./useGetSystemUsers";
import TableOperationsContainer from "../../../ui/TableOperationsContainer";
import { useSearch } from "../../../hooks/useSearch";

function SystemUsers() {
    const { getSystemUsers, allSystemUsers, isLoading, count } = useGetSystemUsers();
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allSystemUsers, ["firstName", "lastName", "phoneNumber", "email", "status"]);
    if (isLoading) return <div className="flex items-center justify-center h-[55dvh]"><Spinner /></div>
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : getSystemUsers;
    return (
        <CompoundTabs tabsFeild="systemUsers" defaultTab="trainers">
            <CompoundTabs.Tabs>
                <CompoundTabs.Open opens="trainers">trainers</CompoundTabs.Open>
                <CompoundTabs.Open opens="trainee">trainees</CompoundTabs.Open>
            </CompoundTabs.Tabs>
            <TableOperationsContainer>
                <CompoundTabs.Window opens="trainers">
                    <SystemTrainers users={dataReady} count={dataCount} setSearchKeyword={setSearchKeyword} />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="trainee">
                    <SystemTrainees users={dataReady} count={dataCount} setSearchKeyword={setSearchKeyword} />
                </CompoundTabs.Window>
            </TableOperationsContainer >
        </CompoundTabs>
    )
}

export default SystemUsers
