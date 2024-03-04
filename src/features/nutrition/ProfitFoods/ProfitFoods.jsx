import FilterForm from "../../../ui/FilterForm"
import Modal from "../../../ui/Modal"
import SearchInput from "../../../ui/SearchInput"
import NutritionTable from "../ProFitFoods/NutritionTable"
import CreateFood from "./CreateFood"

function ProfitFoods() {
    return (
        <>
            <FilterForm filterAttr={
                [
                    {
                        label: 'Base Macro',
                        options: ["Select Food Base Macro"]
                    },
                    {
                        label: "Diet Type",
                        options: ["select Food Diet Type"]
                    },
                    {
                        label: "Religion Restriction",
                        options: ["Select Food Religion Restriction"]
                    },
                    {
                        label: "Category",
                        options: ["Select Food Category"]
                    },
                    {
                        label: "Disease",
                        options: ["Select Food Disease"]
                    },
                    {
                        label: "Meal Type",
                        options: ["Select Food Meal Type"]
                    },
                ]
            } />
            <div className="flex flex-wrap gap-2 md:gap-0 justify-between mb-2">
                <SearchInput placeholder="Search Food Name..." />
                <Modal>
                    <Modal.Open opens="create-new-food">
                        Create New Food +
                    </Modal.Open>
                    <Modal.Window opens="create-new-food">
                        <CreateFood />
                    </Modal.Window>
                </Modal>
            </div>
            <NutritionTable />
        </>
    )
}


export default ProfitFoods
