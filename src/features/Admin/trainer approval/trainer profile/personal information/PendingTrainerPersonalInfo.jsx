import Spinner from "../../../../../ui/Spinner"
import PendingTrainerPersonalInfoForm from "./PendingTrainerPersonalInfoForm"
import { useGetTrainerPersonalInfo } from "./useGetTrainerPersonalInfo"

function PendingTrainerPersonalInfo() {
    const { getPendingTrainerInfo, isLoading } = useGetTrainerPersonalInfo()
    // return <PendingTrainerPersonalInfoForm getPendingTrainerInfo={getPendingTrainerInfo} />
    return (
        <section className="space-y-4 bg-white p-4 sm:p-5 rounded-md border">
            <h2 className="text-xl text-blue-900 font-bold">Personal Information</h2>
            {
                isLoading ?
                    <div className="bg-gray-100 h-[30dvh] text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                        <p className="font-bold text-xl text-blue-900 my-4"><Spinner /></p>
                    </div>
                    :
                    <PendingTrainerPersonalInfoForm getPendingTrainerInfo={getPendingTrainerInfo} />
            }
        </section>
    )
}

export default PendingTrainerPersonalInfo
