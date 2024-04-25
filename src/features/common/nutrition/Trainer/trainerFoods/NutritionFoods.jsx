import { useSearchParams } from "react-router-dom"
import NutritionTable from "../../foods/NutritionTable";
import { useGetTrainerFoods } from "../../foods/useGetTrainerFoods";
import { useGetAppFoods } from "../../foods/useGetAppFoods";
import Spinner from "../../../../../ui/Spinner";
import CreateFood from "../../foods/CreateFood";
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm";
import NutritionOperations from "../../NutritionOperations";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import { HiPlusSm } from "react-icons/hi";

function NutritionFoods({ section = "food", onCloseModal }) {
    const [searchParams] = useSearchParams();
    const { appFoods = [], isLoading: loadAppFoods } = useGetAppFoods();
    const { trainerFoods = [], isLoading: loadTrainerFoods } = useGetTrainerFoods();
    const isLoading = loadAppFoods || loadTrainerFoods;
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    const filterValue = searchParams.get('food') || 'all';
    let filteredFoods;
    if (filterValue === 'all') filteredFoods = [...appFoods, ...trainerFoods];
    if (filterValue === 'private-foods') filteredFoods = trainerFoods;
    if (filterValue === 'proFit-foods') filteredFoods = appFoods;
    return (
        <div>
            <NutritionOperations
                filterTabs={{
                    filterField: "food",
                    options: [
                        { label: "all foods", value: "all" },
                        { label: "my private foods", value: "private-foods" },
                        { label: "proFIT foods", value: "proFit-foods" },
                    ]
                }}
                filterForm={<NutritionFoodFilterForm />}
                search="Search Food Name...">
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
            </NutritionOperations>
            <NutritionTable foods={filteredFoods} section={section} onCloseModal={onCloseModal} />
        </div>
    )
}

export default NutritionFoods
