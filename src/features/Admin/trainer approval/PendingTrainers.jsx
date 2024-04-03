import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import PendingTrainerCard from "./PendingTrainerCard";
import useGetPendingTrainers from "./useGetPendingTrainers";

function PendingTrainers() {
    const { pendingTrainers = [], isLoading } = useGetPendingTrainers()
    if (isLoading) return <Spinner />
    if (!pendingTrainers.length) return <Empty resource={"trainers"}/>
    return (
        <div className="container mx-auto p-4 rounded-md">
            <h1 className='text-blue-900 font-semibold mb-4 capitalize'>Trainers profile ({pendingTrainers.length})</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {pendingTrainers.map((trainer) => <PendingTrainerCard key={trainer._id} trainer={trainer} />)}
            </div>
        </div>
    )
}

export default PendingTrainers
