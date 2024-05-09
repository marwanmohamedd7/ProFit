import { HiPlusSm } from "react-icons/hi"
import Button from "../../../../../ui/Button"
import { useNavigate } from "react-router-dom"
import DietsFreePlanTable from "./DietsFreePlanTable"
import { useDietProvider } from "../../../../../context/DietProvider"
import { useGetFreeDietPlans } from "./useGetFreeDietPlans"
// import Spinner from "../../../../../ui/Spinner"
import SpinnerMini from "../../../../../ui/SpinnerMini"

function DietsFreePlan() {
    const navigate = useNavigate();
    const { dispatch } = useDietProvider();
    const { getDietFreePlans, isLoading, count } = useGetFreeDietPlans()
    // if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <>
            <div className="bg-white p-4 rounded-lg border w-full space-y-4">
                {isLoading ? <div className="flex items-center justify-center h-[40dvh] text-blue-900"><SpinnerMini size="text-2xl"/></div> :
                    <>
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-0.5">
                                <h2 className="font-bold text-blue-900 text-xl capitalize">free plans</h2>
                                <p className="text-blue-900 text-sm capitalize">Boost Marketing and Engage more Trainees</p>
                            </div>
                            <Button type="primary" onClick={() => {
                                navigate("diets")
                                dispatch({ type: "diet/startFreeDietPlan" })
                            }
                            }>
                                <p className="capitalize flex justify-center items-center gap-1">
                                    <span>create new free plan</span>
                                    <span className="text-lg"><HiPlusSm /></span>
                                </p>
                            </Button>
                        </div>
                        <DietsFreePlanTable diets={getDietFreePlans} count={count} />
                    </>
                }
            </div>
        </>

    )
}

export default DietsFreePlan

