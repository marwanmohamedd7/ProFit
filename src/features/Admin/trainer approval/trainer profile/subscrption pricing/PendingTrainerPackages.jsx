import Empty from "../../../../../ui/Empty";
import SpinnerMini from "../../../../../ui/SpinnerMini";
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
                                <div className="bg-gray-50 h-[10dvh] text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                                    <div className="font-bold text-blue-900 my-4"><SpinnerMini /></div>
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
