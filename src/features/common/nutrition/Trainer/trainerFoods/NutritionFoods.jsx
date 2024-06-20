import { HiPlusSm } from "react-icons/hi";
import { useGetTrainerFoods } from "./useGetTrainerFoods";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import CreateFood from "../../foods/CreateFood";
import Spinner from "../../../../../ui/Spinner";
import NutritionTable from "../../foods/NutritionTable";
import NutritionOperations from "../../NutritionOperations";
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm";
import { useSearch } from "../../../../../hooks/useSearch";

function NutritionFoods({ section = "food", onCloseModal }) {
    const { trainerFoods, allTrainerFoods, count, isLoading } = useGetTrainerFoods();

    // Use the useSearch hook to filter foods based on the search keyword
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allTrainerFoods, ["foodname", "category", "servingUnit", "baseMacro", "per", ["macros", "calories"], ["macros", "carbs"], ["macros", "fats"], ["macros", "proteins"]]);
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : trainerFoods;
    return (
        <div className="space-y-4">
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
                setSearchKeyword={setSearchKeyword}
                search="Search Food Name..."
            >
                {
                    section === "food" &&
                    <Modal>
                        <Modal.Open opens={`create-new-food`}>
                            <Button type="primary">
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
            {
                isLoading ?
                    <Spinner />
                    :
                    <NutritionTable foods={dataReady} count={dataCount} section={section} onCloseModal={onCloseModal} />
            }
        </div>
    )
}

export default NutritionFoods;
