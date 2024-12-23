import { LuUsers2 } from "react-icons/lu";
import { CiApple, CiGrid41 } from "react-icons/ci";
import CompoundTabs from "../../../../ui/CompoundTabs"
import NutritionFood from "./trainerFoods/NutritionFoods";
import NutritionMeals from "./trainerMeals/NutritionMeals";
import NutritionDiets from "./trainerDiets/NutritionDiets";
import TableOperationsContainer from "../../../../ui/TableOperationsContainer";

function NutritionTrainer() {

    return (
        <>
            <CompoundTabs tabsFeild="nutrition" defaultTab="foods">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="foods">
                        <p className="flex justify-center items-center gap-1">
                            <span className="text-lg"><CiApple /></span>
                            <span>Foods</span>
                        </p>
                    </CompoundTabs.Open>
                    <CompoundTabs.Open opens="meals_templates">
                        <p className="flex justify-center items-center gap-1">
                            <span className="text-lg"><CiGrid41 /></span>
                            <span>Meals Templates</span>
                        </p>
                    </CompoundTabs.Open>
                    <CompoundTabs.Open opens="diet_templates">
                        <p className="flex justify-center items-center gap-1">
                            <span className="text-lg"><CiGrid41 /></span>
                            <span>Diet Templates</span>
                        </p>
                    </CompoundTabs.Open>
                    <CompoundTabs.Open opens="client_diet">
                        <p className="flex justify-center items-center gap-1">
                            <span className="text-lg"><LuUsers2 /></span>
                            <span>Client’s Diet</span>
                        </p>
                    </CompoundTabs.Open>
                </CompoundTabs.Tabs>

                <div className="my-4">
                    <TableOperationsContainer>
                        <CompoundTabs.Window opens="foods">
                            <NutritionFood />
                        </CompoundTabs.Window>
                        <CompoundTabs.Window opens="meals_templates">
                            <NutritionMeals />
                        </CompoundTabs.Window>
                        <CompoundTabs.Window opens="diet_templates">
                            <NutritionDiets dietType="my plan" />
                        </CompoundTabs.Window>
                    </TableOperationsContainer>
                </div>
            </CompoundTabs>
        </>
    )
}

export default NutritionTrainer
