import { MdOutlineEdit } from "react-icons/md";
import { useGetQualification } from "./useGetQualification";
import { useAddQualification } from "./useAddQualification";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import QualificationAndAchievementPhoto from "./QualificationAndAchievementPhoto";
import { useRef } from "react";

function QualificationAndAchievement() {
    const imgRef = useRef(null);
    const { addQualification, isLoading: isAddingQualification } = useAddQualification();
    const { getQualifications, isLoading: isGettingQualification } = useGetQualification();
    const isLoading = isAddingQualification || isGettingQualification;

    function handleImage(e) {
        e.preventDefault();
        const formData = new FormData();

        // get the image from user and imgs from database and merge them into one array
        const qualificationImgs = getQualifications?.length ? [...getQualifications, { photo: e.target.files[0] }] : [{ photo: e.target.files[0] }]

        // Assuming there could be multiple items in the array, iterate through each
        qualificationImgs.forEach((item) => {
            // Append the file associated with each photo property to formData
            // Here, it's crucial that `item.photo` contains a file object
            if (item.photo instanceof File) {
                formData.append(`photo`, item.photo);
            }
        });
        addQualification(formData, {
            onSuccess: () => imgRef.current.value = "",
        })
    }

    return (
        <div className="flex flex-wrap items-center gap-3">
            {getQualifications?.map((img) => <QualificationAndAchievementPhoto key={img._id} img={img} />)}
            <div className="relative">
                <label
                    htmlFor={"image"}
                    className="cursor-pointer absolute right-[-7.5%] top-[-7.5%] text-blue-50 p-1 rounded-full bg-blue-700"
                >
                    <MdOutlineEdit />
                </label>
                <div
                    className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border h-28 w-28 capitalize`}
                >
                    {isLoading ?
                        <SpinnerMini />
                        :
                        <>
                            <span>upload</span>
                            <span>(certifcate) photo</span>
                        </>
                    }
                </div>
                <input
                    id="image"
                    type="file"
                    ref={imgRef}
                    accept="image/*"
                    className="hidden"
                    disabled={isLoading}
                    onChange={handleImage}
                />
            </div>
        </div>
    )
}

export default QualificationAndAchievement
