import NutritionTrainer from "../features/common/nutrition/Trainer/NutritionTrainer"
import BreadCrumbs from "../ui/BreadCrumbs"
import Title from "../ui/Title"

export function Nutrition() {
    return (
        <>
            <div className="pb-2">
                <BreadCrumbs />
                <Title />
            </div>
            <NutritionTrainer />
        </>
    )
}

