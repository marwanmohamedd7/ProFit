import BreadCrumbs from "../ui/BreadCrumbs";
import Title from "../ui/Title";
import CompoundTabs from "../ui/CompoundTabs";
import ProfitFoods from "../features/nutrition/ProfitFoods/ProfitFoods";

function Nutrition() {
  return <div className="space-y-4">
    <div>
      <BreadCrumbs />
      <Title />
    </div>
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
  </div>
}

export default Nutrition;
