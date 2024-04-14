import NutritionTrainer from "../features/common/nutrition/Trainer/NutritionTrainer"
import BreadCrumbs from "../ui/BreadCrumbs"
import Title from "../ui/Title"

export function Nutrition() {
    return (
        <div className="divide-y">
            <div className="pb-4">
                <BreadCrumbs />
                <Title />
            </div>
            <div>
                <NutritionTrainer />
            </div>
        </div>
    )
}

