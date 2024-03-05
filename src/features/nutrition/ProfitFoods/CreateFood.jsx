import Button from "../../../ui/Button"
import Input from "../../../ui/Input";
import InputDropdown from "../../../ui/InputDropdown";
import FloatingLabelInput from "../../../ui/InputFloatingLabel"

function CreateFood({ onCloseModal }) {
    const formAttributes_1 = [
        {
            label: "Diet Type",
            type: "select",
            options: ["Select Food Diet Type", "..."], // Add the rest of the diet types
        },
        {
            label: "Religion Restriction",
            type: "select",
            options: ["Select Food Religion Restriction", "..."], // Add the rest of the religion restrictions
        },
        // ... other form fields as needed
    ];
    const formAttributes_2 = [
        {
            label: "Category",
            options: ["Select Food Category", "..."], // Add the rest of the categories
        },
        {
            label: "Disease",
            options: ["Select Food Disease", "..."], // Add the rest of the diseases
        },
        {
            label: "Meal Type",
            options: ["Select Food Meal Type", "..."], // Add the rest of the meal types
        },
        // ... other form fields as needed
    ];
    const formAttributes_3 = [
        {
            label: "Serving Unit",
            options: ["Select Serving Unit", "..."], // Add the rest of the serving units
        },
        {
            label: "Quantity",
            options: ["Enter Food Quantity"],
        },
        {
            label: "Base Macro",
            options: ["Enter Food Base Macro", "..."], // Add the rest of the base macros
        },
        // ... other form fields as needed
    ];
    const formAttributes_4 = [
        {
            label: "Proteins",
            type: "number",
            options: ["Enter Food Proteins"],
        },
        {
            label: "Fats",
            type: "number",
            options: ["Enter Food Fats"],
        },
        {
            label: "Carbs",
            type: "number",
            options: ["Enter Food Carbs"],
        },
    ];
    return (
        // <form className="grid grid-rows-[1fr_auto_auto_auto_auto_auto] divide-y" onSubmit={(e) => e.preventDefault()}>
        <form className="flex flex-col capitalize divide-y" onSubmit={(e) => e.preventDefault()}>
            <div className="py-4 space-y-2">
                <img className="w-24 h-auto rounded-md" src="/uifaces-popular-image (1).jpg" alt="" />
                <div className="flex justify-center gap-2">
                    <Input item={{ label: "Food Name", placeholder: "Enter Food Name" }} />
                    {formAttributes_1.map((item, index) => <InputDropdown key={index} item={item} />)}
                    <Input item={{ label: "Description", placeholder: "Enter Food Description" }} />
                </div>
            </div>

            <div className="capitalize py-4">
                <div className="flex justify-center gap-4">
                    {formAttributes_2.map((item, index) => <InputDropdown key={index} item={item} />)}
                </div>
            </div>
            <div className="capitalize py-3">
                <div className="flex justify-center gap-4">
                    {formAttributes_3.map((item, index) => <InputDropdown key={index} item={item} />)}
                </div>
            </div>
            <div className="capitalize py-4">
                <div className="flex justify-center gap-4">
                    {formAttributes_4.map((item, index) => <InputDropdown key={index} item={item} />)}
                    <Input item={{ label: "Calories", placeholder: "Enter Food Description" }} />
                </div>
            </div>

            <div className="flex justify-start space-x-4 pt-6">
                <Button type="primary" >
                    <span>Add new food</span>
                </Button>
                <Button onclick={onCloseModal} type="reset">
                    <span>cancel</span>
                </Button>
            </div>

        </form>

    )
}
export default CreateFood
