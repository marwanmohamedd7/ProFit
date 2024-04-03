import BreadCrumbs from "../ui/BreadCrumbs";
import Title from "../ui/Title";
import NutritionAdmin from "../features/common/nutrition/Admin/NutritionAdmin";

function Nutrition() {
  return <div className="space-y-4">
    <div>
      <BreadCrumbs />
      <Title />
    </div>
    <NutritionAdmin />
  </div>
}

export default Nutrition;
