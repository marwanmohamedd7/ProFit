import { HiPlusSm } from "react-icons/hi";
import { useSearchParams } from "react-router-dom"
import { useGetAppFoods } from "../../foods/useGetAppFoods";
import { useGetTrainerFoods } from "./useGetTrainerFoods";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import CreateFood from "../../foods/CreateFood";
import Spinner from "../../../../../ui/Spinner";
import NutritionTable from "../../foods/NutritionTable";
import NutritionOperations from "../../NutritionOperations";
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm";
import { useGetAllFoods } from "./useGetAllFoods";

function NutritionFoods({ section = "food", onCloseModal }) {
    let filteredFoods, count;
    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get('food') || 'all';
    const { allFoods = [], count: countAllFoods, isLoading: loadAllFoods } = useGetAllFoods();
    const { appFoods = [], count: countAppFoods, isLoading: loadAppFoods } = useGetAppFoods();
    const { trainerFoods = [], count: countTrainerFoods, isLoading: loadTrainerFoods } = useGetTrainerFoods();
    // const isLoading = loadAppFoods || loadTrainerFoods || loadAllFoods;
    // if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    if (filterValue === 'all' && loadAllFoods) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    else if (filterValue === 'all') {
        count = countAllFoods
        filteredFoods = allFoods
    }

    if (filterValue === 'proFit-foods' && loadAppFoods) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    else if (filterValue === 'proFit-foods') {
        count = countAppFoods
        filteredFoods = appFoods
    }
   
    if (filterValue === 'private-foods' && loadTrainerFoods) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    else if (filterValue === 'private-foods') {
        count = countTrainerFoods
        filteredFoods = trainerFoods
    }

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
            <NutritionTable foods={filteredFoods} count={count} section={section} onCloseModal={onCloseModal} />
        </div>
    )
}

export default NutritionFoods
