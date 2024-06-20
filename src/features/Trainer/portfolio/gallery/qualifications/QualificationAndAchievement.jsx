import { MdOutlineEdit } from "react-icons/md";
import { useGetQualification } from "./useGetQualification";
import { useAddQualification } from "./useAddQualification";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import QualificationAndAchievementPhoto from "./QualificationAndAchievementPhoto";
import { useRef } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function QualificationAndAchievement() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const imgRef = useRef(null);
    const { addQualification, isLoading: isAddingQualification } = useAddQualification();
    const { getQualifications, isLoading: isGettingQualification } = useGetQualification();
    const isLoading = isAddingQualification || isGettingQualification;

    function handleImage(e) {
        e.preventDefault();
        const formData = new FormData();

        // get the image from user and imgs from database and merge them into one array
        const qualificationImgs = getQualifications?.length ? [...getQualifications, { photo: e.target.files[0] }] : [{ photo: e.target.files[0] }];

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
        });
    }

    return (
        <div className="flex flex-wrap items-center gap-4">
            {getQualifications?.map((img) => <QualificationAndAchievementPhoto key={img._id} img={img} />)}
            <div className="relative">
                <label
                    htmlFor={"image"}
                    className={`cursor-pointer absolute right-[-10%] top-[-10%] p-1.5 rounded-full ${isDarkMode ? `text-blue-400 hover:bg-blue-800 bg-blue-900` :`text-blue-50 hover:bg-blue-600 bg-blue-700`}`}
                >
                    <MdOutlineEdit />
                </label>
                <div
                    className={`rounded-md text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border h-28 w-28 capitalize ${isDarkMode ? `${colors.text_gray_400} ${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.text_gray_500} ${colors.bg_gray_100} ${colors.border_gray_200}`}`}
                >
                    {isLoading ?
                        <SpinnerMini />
                        :
                        <p className="text-sm flex flex-col justify-center items-center">
                            <span className="text-3xl py-1"><HiMiniPlus /></span>
                            <span>Add New</span>
                            <span>certification</span>
                        </p>
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
    );
}

export default QualificationAndAchievement;