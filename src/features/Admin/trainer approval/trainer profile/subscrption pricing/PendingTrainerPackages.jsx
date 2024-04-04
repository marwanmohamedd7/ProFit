import Empty from "../../../../../ui/Empty";
import Spinner from "../../../../../ui/Spinner";
import PendingTrainerPackagesTable from "./PendingTrainerPackagesTable"
import { useGetPendingTrainerPackages } from "./useGetPendingTrainerPackages";

function PendingTrainerPackages() {
    const { getPendingTrainerPackages: packages = [], isLoading } = useGetPendingTrainerPackages();
    return (
        <div className="container p-4 sm:p-5 flex flex-col justify-start gap-4 rounded-md bg-white border">
            <h1 className="text-blue-900 font-bold text-xl capitalize">training packages</h1>
            {
                !packages.length || isLoading ?
                    <>
                        {
                            isLoading ?
                                <div className="bg-gray-100 text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                                    <p className="font-bold text-xl text-blue-900 my-4"><Spinner /></p>
                                </div>
                                : <Empty resource={"packages"} />
                        }
                    </>
                    :
                    <PendingTrainerPackagesTable packages={packages} />
            }
        </div>
    )
}

export default PendingTrainerPackages
