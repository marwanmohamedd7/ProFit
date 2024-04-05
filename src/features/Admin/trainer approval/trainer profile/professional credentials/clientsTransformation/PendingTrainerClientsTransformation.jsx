import Empty from "../../../../../../ui/Empty";
import SpinnerMini from "../../../../../../ui/SpinnerMini";
import PendingTrainerClientTransformationCard from "./PendingTrainerClientTransformationCard";
import { useGetPendingTrainerClientsTransformation } from "./useGetPendingTrainerClientsTransformation";

function PendingTrainerClientsTransformation() {
    const { getPendingTrainerClientsTransformation: transformations = [], isLoading } = useGetPendingTrainerClientsTransformation()
    return (
        <section className="space-y-4 bg-white p-4 rounded-md border">
            <h2 className="text-xl text-blue-900 font-bold">Clients Transformation</h2>
            {
                !transformations.length || isLoading ?
                    // <div className="lg:w-1/2 w-full">
                    //     {
                    isLoading ?
                        <div className="bg-gray-50 h-[10dvh] text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                            <div className="font-bold text-xl text-blue-900 my-4"><SpinnerMini /></div>
                        </div>
                        : <Empty resource={"transformations"} />
                    //     }
                    // </div>
                    :
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {transformations.map((transformation) => <PendingTrainerClientTransformationCard transformation={transformation} key={transformation._id} />)}
                    </div>
            }
        </section>
    )
}

export default PendingTrainerClientsTransformation
