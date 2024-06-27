import { HiPlusSm } from "react-icons/hi"
import Button from "../../../../../ui/Button"
import { useNavigate } from "react-router-dom"
import DietsFreePlanTable from "./DietsFreePlanTable"
import { useDietProvider } from "../../../../../context/DietProvider"
import { useGetFreeDietPlans } from "./useGetFreeDietPlans"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import styles from "../../../../../styles/styles"
import { useDarkMode } from "../../../../../context/DarkModeProvider"
import SearchInput from "../../../../../ui/SearchInput"
import { useSearch } from "../../../../../hooks/useSearch"
import TableOperationsContainer from "../../../../../ui/TableOperationsContainer"

function DietsFreePlan() {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const { dispatch } = useDietProvider();
    const { getDietFreePlans, allDietFreePlans, isLoading, count } = useGetFreeDietPlans();
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allDietFreePlans, ["planName", "plantype", "daysCount"]);
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : getDietFreePlans;
    return (
        <TableOperationsContainer>
            {isLoading ? <div className="flex items-center justify-center h-[40dvh]"><SpinnerMini size="text-xl" /></div> :
                <>
                    <div className={`space-y-4 px-4 pb-4 ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>
                        <div className="flex flex-col gap-0.5">
                            <h2 className="font-bold text-xl capitalize">free plans</h2>
                            <p className={`text-sm capitalize ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>Boost Marketing and Engage more Trainees</p>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <SearchInput
                                placeholder="Search Free Diet Plan..."
                                setSearchKeyword={setSearchKeyword}
                            />
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
                    </div>
                    <DietsFreePlanTable diets={dataReady} count={dataCount} />
                </>
            }
        </TableOperationsContainer>

    )
}

export default DietsFreePlan

