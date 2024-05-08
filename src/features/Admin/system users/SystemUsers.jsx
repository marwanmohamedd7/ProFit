import CompoundTabs from "../../../ui/CompoundTabs"
import Spinner from "../../../ui/Spinner";
import Trainees from "./trainees/Trainees"
import Trainers from "./trainers/Trainers"
import { useGetSystemUsers } from "./useGetSystemUsers"

function SystemUsers() {
    const { getSystemUsers, isLoading, count } = useGetSystemUsers();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <div>
            <CompoundTabs tabsFeild="users" defaultTab="trainers">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="trainers">trainers</CompoundTabs.Open>
                    <CompoundTabs.Open opens="trainee">trainees</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="trainers">
                    <Trainers users={getSystemUsers} count={count} />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="trainee">
                    <Trainees users={getSystemUsers} count={count} />
                </CompoundTabs.Window>
            </CompoundTabs>
        </div>
    )
}

export default SystemUsers
