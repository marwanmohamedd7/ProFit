import BreadCrumbs from "../ui/BreadCrumbs";
import Title from "../ui/Title";
import NutritionAdmin from "../features/common/nutrition/Admin/NutritionAdmin";

export function Nutrition() {
  return <div className="space-y-4">
    <div>
      <BreadCrumbs />
      <Title />
    </div>
    <NutritionAdmin />
  </div>
}

