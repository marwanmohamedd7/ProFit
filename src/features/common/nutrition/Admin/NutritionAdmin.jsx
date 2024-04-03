import CompoundTabs from "../../../../ui/CompoundTabs"
import ProfitFoods from "./ProFitFoods/ProfitFoods"

function NutritionAdmin() {
    return (
        <>
            <CompoundTabs defaultTab="foods">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="foods">ProFIT Foods</CompoundTabs.Open>
                    <CompoundTabs.Open opens="attributes">ProFIT Foods Attributes</CompoundTabs.Open>
                    <CompoundTabs.Open opens="meal_template">ProFIT Meals Template</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="foods">
                    <ProfitFoods />
                </CompoundTabs.Window>
            </CompoundTabs>
        </>
    )
}

export default NutritionAdmin
