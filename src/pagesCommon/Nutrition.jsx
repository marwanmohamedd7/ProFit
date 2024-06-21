import { useCurrentUser } from "../context/UserProvider";
import NutritionAdmin from "../features/common/nutrition/Admin/NutritionAdmin";
import NutritionTrainer from "../features/common/nutrition/Trainer/NutritionTrainer";
import BreadCrumbs from "../ui/BreadCrumbs";
import Title from "../ui/Title";

function Nutrition() {
    const { userRole } = useCurrentUser();
    return (
        <>
            <div className="pb-2">
                <BreadCrumbs />
                <Title />
            </div>
            {userRole === "trainer" ? <NutritionTrainer /> : <NutritionAdmin />}
        </>
    )
}

export default Nutrition
