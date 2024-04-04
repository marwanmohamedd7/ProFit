import Empty from "../../../../../../ui/Empty";
import SpinnerMini from "../../../../../../ui/SpinnerMini";
import { useGetPendingTrainerQualifications } from "./useGetPendingTrainerQualifications"

function PendingTrainerQualifications() {
    const { getPendingTrainerQualifications: qualifications = [], isLoading } = useGetPendingTrainerQualifications();
    return (
        <section className="space-y-4 bg-white p-4 rounded-md border">
            <h2 className="text-xl text-blue-900 font-bold">Qualifications and Achievements*</h2>
            {
                !qualifications.length || isLoading ?
                    <div className="lg:w-1/2 w-full">
                        {
                            isLoading ?
                                <div className="bg-gray-100 text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                                    <p className="font-bold text-xl text-blue-900 my-4"><SpinnerMini /></p>
                                </div>
                                : <Empty resource={"certificates"} />
                        }
                    </div>
                    :
                    <div className="flex flex-wrap gap-1">
                        {qualifications.map((qual, index) => (
                            <img key={index} src={qual.image} alt={qual.description} className="w-28 h-28 rounded-md" />
                        ))}
                    </div>
            }

        </section >
    )
}

export default PendingTrainerQualifications
