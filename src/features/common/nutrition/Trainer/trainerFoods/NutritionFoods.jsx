import { HiPlusSm } from "react-icons/hi";
import { useGetTrainerFoods } from "./useGetTrainerFoods";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import CreateFood from "../../foods/CreateFood";
import Spinner from "../../../../../ui/Spinner";
import NutritionTable from "../../foods/NutritionTable";
import NutritionOperations from "../../NutritionOperations";
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm";

function NutritionFoods({ section = "food", onCloseModal }) {
    const { trainerFoods = [], count, isLoading } = useGetTrainerFoods();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <div>
            <NutritionOperations
                filterTabs={{
                    filterField: "food",
                    options: [
                        { label: "all foods", value: "allFoods" },
                        { label: "my private foods", value: "trainerFoods" },
                        { label: "proFIT foods", value: "profitFoods" },
                    ]
                }}
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
            <NutritionTable foods={trainerFoods} count={count} section={section} onCloseModal={onCloseModal} />
        </div>
    )
}

export default NutritionFoods
