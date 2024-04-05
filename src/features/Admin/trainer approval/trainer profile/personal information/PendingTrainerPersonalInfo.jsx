import SpinnerMini from "../../../../../ui/SpinnerMini"
import PendingTrainerPersonalInfoForm from "./PendingTrainerPersonalInfoForm"
import { useGetTrainerPersonalInfo } from "./useGetTrainerPersonalInfo"

function PendingTrainerPersonalInfo() {
    const { getPendingTrainerInfo, isLoading } = useGetTrainerPersonalInfo()
    return (
        <section className="space-y-4 bg-white p-4 sm:p-5 rounded-md border">
            <h2 className="text-xl text-blue-900 font-bold">Personal Information</h2>
            {
                isLoading ?
                    <div className="bg-gray-50 h-[40dvh] text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                        <div className="font-bold text-blue-900 my-4"><SpinnerMini /></div>
                    </div>
                    :
                    <PendingTrainerPersonalInfoForm getPendingTrainerInfo={getPendingTrainerInfo} />
            }
        </section>
    )
}

export default PendingTrainerPersonalInfo
