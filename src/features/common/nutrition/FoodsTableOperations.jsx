import Button from "../../../ui/Button"
import FilterForm from "../../../ui/FilterForm"
import Modal from "../../../ui/Modal"
import SearchInput from "../../../ui/SearchInput"
import CreateFood from "./CreateFood"

const filterAttr = [
    {
        label: 'Base Macro',
        options: []
        // options: ["Select Food Base Macro"]
    },
    {
        label: "Diet Type",
        options: []
        // options: ["select Food Diet Type"]
    },
    {
        label: "Religion Restriction",
        options: []
        // options: ["Select Food Religion Restriction"]
    },
    {
        label: "Category",
        options: []
        // options: ["Select Food Category"]
    },
    {
        label: "Disease",
        options: []
        // options: ["Select Food Disease"]
    },
    {
        label: "Meal Type",
        options: []
        // options: ["Select Food Meal Type"]
    },
]

function FoodsTableOperations() {
    return (
        <div className="mt-4">
            <FilterForm filterAttr={filterAttr} />
            <div className="flex flex-wrap gap-2 md:gap-0 justify-between my-4">
                <SearchInput placeholder="Search Food Name..." />
                <Modal>
                    <Modal.Open opens="create-new-food">
                        <Button>Create New Food +</Button>
                    </Modal.Open>
                    <Modal.Window opens="create-new-food">
                        <CreateFood />
                    </Modal.Window>
                </Modal>
            </div>
        </div>
    )
}


export default FoodsTableOperations
