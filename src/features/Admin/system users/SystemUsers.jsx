import Spinner from "../../../ui/Spinner";
import CompoundTabs from "../../../ui/CompoundTabs"
import SystemTrainees from "./trainees/SystemTrainees";
import SystemTrainers from "./trainers/SystemTrainers";
import { useGetSystemUsers } from "./useGetSystemUsers";

function SystemUsers() {
    const { getSystemUsers, isLoading, count } = useGetSystemUsers();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <>
            <CompoundTabs tabsFeild="systemUsers" defaultTab="trainers">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="trainers">trainers</CompoundTabs.Open>
                    <CompoundTabs.Open opens="trainee">trainees</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="trainers">
                    <SystemTrainers users={getSystemUsers} count={count} />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="trainee">
                    <SystemTrainees users={getSystemUsers} count={count} />
                </CompoundTabs.Window>
            </CompoundTabs>
        </>
    )
}

export default SystemUsers
