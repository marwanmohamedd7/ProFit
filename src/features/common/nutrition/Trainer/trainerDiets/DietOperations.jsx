// import { CiSettings } from "react-icons/ci";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useCreateDietTemplate } from "./useCreateDietTemplate"
import { useUpdateDietTemplate } from "./useUpdateDietTemplate"
import { useDietProvider } from "../../../../../context/DietProvider"
import { usePageLocation } from "../../../../../hooks/usePageLocation"
import toast from "react-hot-toast"
import CreateDiet from "./CreateDiet"
import Modal from "../../../../../ui/Modal"
import NutritionDiets from "./NutritionDiets"
import Button from "../../../../../ui/Button"
import BackBtn from "../../../../../ui/BackBtn"
import BreadCrumbs from "../../../../../ui/BreadCrumbs"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import { useCreateCustomizedPlan } from "../../../../Trainer/trainees/traineeDietPlans/useCreateCustomizedPlan"

function DietOperations({ traineeData = {}, dietToUpdate = {}, dietType }) {
    const { id } = useParams()
    const { _id } = dietToUpdate;
    const isExist = Boolean(_id);
    const navigate = useNavigate();
    const { prevPath } = usePageLocation();
    const previousPath = prevPath.split("/").slice(0, -1).join("/")
    const [submitCount, setSubmitCount] = useState(0); // Track the number of submit attempts
    const { dispatch, error, submittedData } = useDietProvider();
    const { createDietTemplate, isCreating } = useCreateDietTemplate();
    const { updateDietTemplate, isUpdating } = useUpdateDietTemplate();
    const { createTraineeCustomizePlan, isCreating: isCreating1 } = useCreateCustomizedPlan();
    const isLoading = isCreating || isUpdating || isCreating1;
    const { handleSubmit, formState: { errors }, register, watch } = useForm({
        defaultValues: isExist ? dietToUpdate : {},
    });
    function onSubmit(data) {
        if (!data) return;
        const { planName, dietType, description } = data
        dispatch({ type: "diet/planInfo", payload: { planName, dietType, description } })
        dispatch({ type: "diet/submit" })
        setSubmitCount(prev => prev + 1); // Increment on each submit
    }
    // Effect to react to changes in error state or submit count
    useEffect(() => {
        if (error && submitCount > 0) toast.error(error);
        else if (submittedData) {
            const { error, ...dietData } = submittedData;
            if (isExist && dietType === "customized plan") {
                const { trainee: { _id } } = dietData;
                createTraineeCustomizePlan({ _id, dietData }, {
                    onSuccess: () => {
                        dispatch({ type: "diet/endSession" });
                        navigate(previousPath.split("/").slice(-1).join("") === "trainee" ? `${previousPath}/${dietToUpdate?.trainee?._id}` : previousPath);
                    }
                })
            }
            else if (!isExist) {
                createDietTemplate(dietData, {
                    onSuccess: () => {
                        dispatch({ type: "diet/endSession" });
                        navigate(isExist || id ? previousPath : prevPath);
                    }
                })
            } else {
                updateDietTemplate({ _id, dietData }, {
                    onSuccess: () => {
                        dispatch({ type: "diet/endSession" });
                        navigate(isExist || id ? previousPath : prevPath);
                    }
                })
            }
        }
    }, [_id, id, dietToUpdate?.trainee?._id, dispatch, error, isExist, submitCount, submittedData, prevPath, previousPath, dietType, navigate, createDietTemplate, updateDietTemplate, createTraineeCustomizePlan]);  // Depend on error and submit count
    let sectionName;
    if (dietType === "free plan") sectionName = "free diet builder"
    if (dietType === "my plan") sectionName = "diet template builder"
    if (dietType === "customized plan") sectionName = "customized diet builder"
    return (
        dietType !== "customized plan" ?
            <>
                <BreadCrumbs />
                <div className="flex justify-between items-center gap-4 mb-4">
                    <div className="flex items-center justify-center gap-3">
                        <BackBtn path={isExist || id ? previousPath : prevPath} />
                        <span className="font-bold text-blue-900 text-2xl capitalize">{sectionName}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button type="primary" onClick={handleSubmit(onSubmit)}>
                            <p className="capitalize">
                                {dietType === "my plan" && <span>{isLoading ? <SpinnerMini /> : isExist ? "update diet template" : "save diet template"}</span>}
                                {dietType === "free plan" && <span>{isLoading ? <SpinnerMini /> : isExist ? "update free diet plan" : "save free diet plan"}</span>}
                            </p>
                        </Button>
                        {
                            dietType === "customized plan" &&
                            <Modal>
                                <Modal.Open opens="load-diet-template">
                                    <Button type="secondary">Load Diet Template</Button>
                                </Modal.Open>
                                <Modal.Window opens="load-diet-template">
                                    <NutritionDiets dietType={dietType} />
                                </Modal.Window>
                            </Modal>
                        }
                    </div>
                </div>
                <CreateDiet register={register} watch={watch} errors={errors} dietType={dietType} />
            </>
            :
            <>
                <div className="space-y-4" >
                    <div className="flex items-center gap-3">
                        <BackBtn path={previousPath.split("/").slice(-1).join("") === "trainee" ? `${previousPath}/${dietToUpdate?.trainee?._id}` : previousPath} />
                        <span className="font-bold text-blue-900 text-2xl capitalize">{sectionName}</span>
                    </div>
                    <div className="bg-gray-50 rounded-md border p-4">
                        {/* <BreadCrumbs /> */}
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 h-14 w-14">
                                    <img className="h-14 w-14 rounded-lg" src={traineeData?.profilePhoto} alt={traineeData?.firstName} />
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <p className="flex items-center gap-1 capitalize text-blue-700">
                                        <span className="text-sm font-bold">{traineeData?.firstName}</span>
                                        <span className="text-sm font-bold">{traineeData?.lastName}</span>
                                    </p>
                                    <p className="text-xs flex flex-col text-blue-900">
                                        <span>{traineeData?.email}</span>
                                        <span className="underline">{traineeData?.phoneNumber}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button type="primary" onClick={handleSubmit(onSubmit)}>
                                    <p className="capitalize">
                                        {isLoading ? <SpinnerMini /> : dietToUpdate?.trainee?.dietAssessmentStatus === "Ready" ? "save customized diet plan" : "update customized diet plan"}
                                    </p>
                                </Button>
                                {
                                    dietType === "customized plan" &&
                                    <Modal>
                                        <Modal.Open opens="load-diet-template">
                                            <Button type="secondary">Load Diet Template</Button>
                                        </Modal.Open>
                                        <Modal.Window opens="load-diet-template">
                                            <NutritionDiets dietType={dietType} />
                                        </Modal.Window>
                                    </Modal>
                                }
                            </div>
                        </div>
                    </div>
                    <CreateDiet register={register} watch={watch} errors={errors} dietType={dietType} />
                </div>
            </>
    )
}

export default DietOperations


