// import { CiSettings } from "react-icons/ci";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiMiniChevronLeft } from "react-icons/hi2"
import { useCreateDietTemplate } from "./useCreateDietTemplate"
import { useDietProvider } from "../../../../../context/DietProvider"
import toast from "react-hot-toast"
import Button from "../../../../../ui/Button"
import CreateDietTemplate from "./CreateDietTemplate"
import BreadCrumbs from "../../../../../ui/BreadCrumbs"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import { useUpdateDietTemplate } from "./useUpdateDietTemplate"

function DietTemplateOperations({ dietToUpdate = {} }) {
    const { _id } = dietToUpdate;
    const isExist = Boolean(_id);
    const navigate = useNavigate();
    const { dispatch, error, submittedData } = useDietProvider();
    const { createDietTemplate, isCreating } = useCreateDietTemplate();
    const { updateDietTemplate, isUpdating } = useUpdateDietTemplate();
    const isLoading = isCreating || isUpdating;
    const [submitCount, setSubmitCount] = useState(0); // Track the number of submit attempts
    const { handleSubmit, formState: { errors }, register, watch } = useForm({
        defaultValues: isExist ? dietToUpdate : {},
    });

    function onSubmit(data) {
        if (!data) return;
        const { planName, description } = data
        dispatch({ type: "diet/planInfo", payload: { planName, description } })
        dispatch({ type: "diet/submit" })
        setSubmitCount(prev => prev + 1); // Increment on each submit
    }
    // Effect to react to changes in error state or submit count
    useEffect(() => {
        if (error && submitCount > 0) toast.error(error);
        else if (submittedData) {
            const { error, ...dietData } = submittedData;
            if (!isExist) {
                createDietTemplate(dietData, {
                    onSuccess: () => {
                        dispatch({ type: "diet/endSession" });
                        navigate("/trainer/nutrition?nutrition=diet_templates");
                    }
                })
            } else {
                updateDietTemplate({ _id, dietData }, {
                    onSuccess: () => {
                        dispatch({ type: "diet/endSession" });
                        navigate("/trainer/nutrition?nutrition=diet_templates");
                    }
                })
            }
        }
    }, [_id, dispatch, error, isExist, submitCount, submittedData, navigate, createDietTemplate, updateDietTemplate]);  // Depend on error and submit count

    return (
        <>
            <BreadCrumbs />
            <div className="flex justify-between items-center gap-4 mb-4">
                <div className="flex items-center justify-center gap-4">
                    <button onClick={() => navigate("/trainer/nutrition?nutrition=diet_templates")}
                        className="text-blue-600 bg-blue-200 cursor-pointer p-0.5 rounded-md font-semibold text-lg"><HiMiniChevronLeft /></button>
                    <span className="font-bold text-blue-900 text-2xl capitalize">{"diet builder"}</span>
                </div>
                <Button onClick={handleSubmit(onSubmit)}>
                    <p className="capitalize">
                        {isLoading ? <SpinnerMini /> : isExist ? "update diet template" : "save diet template"}
                    </p>
                </Button>
            </div>
            <CreateDietTemplate register={register} watch={watch} errors={errors} />
        </>
    )
}

export default DietTemplateOperations
