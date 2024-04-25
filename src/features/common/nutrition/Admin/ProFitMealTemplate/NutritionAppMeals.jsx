import { HiPlusSm } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import NutritionOperations from "../../NutritionOperations"
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"
import CreateFood from "../../foods/CreateFood"
// import Button from "../../../../../ui/Button"
import NutritionMealsTable from "../../meals/NutritionMealsTable"

function NutritionAppMeals() {
    // const navigate = useNavigate()
    return (
        <>
            <NutritionOperations
                filterTabs={{
                    filterField: "meal",
                    options: [
                        { label: "all meals", value: "all" },
                        { label: "my private meals templates", value: "private-meals-templates" },
                        { label: "proFIT meals templates", value: "proFit-meals-templates" },
                    ]
                }}
                filterForm={<NutritionFoodFilterForm />}
                modalForm={< CreateFood />}
                modalName="meal"
                search="Search Meal Name...">
                {/* <Button onClick={() => navigate("meals")}>
                    <p className="capitalize flex justify-center items-center gap-1">
                        <span>create new meal</span>
                        <span className="text-lg"><HiPlusSm /></span>
                    </p>
                </Button> */}
            </NutritionOperations>
            <NutritionMealsTable />
        </>
    )
}

export default NutritionAppMeals
