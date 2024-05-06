import { HiPlusSm } from "react-icons/hi";
import { useGetAppFoods } from "../../foods/useGetAppFoods";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import CreateFood from "../../foods/CreateFood";
import Spinner from "../../../../../ui/Spinner";
import NutritionTable from "../../foods/NutritionTable";
import NutritionOperations from "../../NutritionOperations";
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm";

function NutritionAppFood({ section = "food", onCloseModal }) {
    const { appFoods = [], count, isLoading } = useGetAppFoods();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <div>
            <NutritionOperations
                filterForm={<NutritionFoodFilterForm />}
                search="Search Food Name...">
                {
                    section === "food" &&
                    <Modal>
                        <Modal.Open opens={`create-new-food`}>
                            <Button>
                                <p className="capitalize flex justify-center items-center gap-1">
                                    <span>create new food</span>
                                    <span className="text-lg"><HiPlusSm /></span>
                                </p>
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens={`create-new-food`}>
                            <CreateFood />
                        </Modal.Window>
                    </Modal>
                }
            </NutritionOperations>
            <NutritionTable foods={appFoods} count={count} section={section} onCloseModal={onCloseModal} />
        </div>
    )
}

export default NutritionAppFood
