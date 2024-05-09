import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import NutritionAdmin from "../features/common/nutrition/Admin/NutritionAdmin";

export function Nutrition() {
  return (
    <>
      <div className="pb-2">
        <BreadCrumbs />
        <Title />
      </div>
      <NutritionAdmin />
    </>
  )
}

