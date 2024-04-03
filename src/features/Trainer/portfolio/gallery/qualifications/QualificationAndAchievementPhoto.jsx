import { HiTrash } from "react-icons/hi2"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import { useDeleteQualification } from "./useDeleteQualification"

function QualificationAndAchievementPhoto({ img }) {
    const { deleteQualification, isLoading: isDeletingQualification } = useDeleteQualification()
    function handleDeleteImage() {
        if (!img?._id) return;
        deleteQualification(img._id)
    } 
    return (
        <div className="relative">
            <div onClick={handleDeleteImage}
                className="cursor-pointer absolute right-[-7.5%] top-[-7.5%] text-blue-50 p-1 rounded-full bg-red-700"
            >
                {isDeletingQualification ? <SpinnerMini /> : <HiTrash />}
            </div>
            <img src={img.photo.replace("http://localhost:4000/uploads/", "")} alt="achievement" className="w-28 h-28 rounded-md" />
        </div>
    )
}

export default QualificationAndAchievementPhoto
