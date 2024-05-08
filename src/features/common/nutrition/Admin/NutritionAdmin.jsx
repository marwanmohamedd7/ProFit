import { CiApple, CiGrid41 } from "react-icons/ci"
import CompoundTabs from "../../../../ui/CompoundTabs"
import NutritionAppFood from "./ProFitFoods/NutritionAppFood"
import NutritionAppMeals from "./ProFitMealTemplate/NutritionAppMeals"

function NutritionAdmin() {
    return (
        <>
            <CompoundTabs tabsFeild="nutrition" defaultTab="foods">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="foods">
                        <p className="flex justify-center items-center gap-1">
                            <span className="text-lg"><CiApple /></span>
                            <span>ProFIT Foods</span>
                        </p>
                    </CompoundTabs.Open>
                    {/* <CompoundTabs.Open opens="attributes">
                        <p className="flex justify-center items-center gap-1">
                            <span className="text-lg"><CiGrid41 /></span>
                            <span>ProFIT Foods Attributes</span>
                        </p>
                    </CompoundTabs.Open> */}
                    <CompoundTabs.Open opens="meals_templates">
                        <p className="flex justify-center items-center gap-1">
                            <span className="text-lg"><CiGrid41 /></span>
                            <span>ProFIT Meals Template</span>
                        </p>
                    </CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="foods">
                    <NutritionAppFood />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="meals_templates">
                    <NutritionAppMeals />
                </CompoundTabs.Window>
            </CompoundTabs>
        </>
    )
}

export default NutritionAdmin
