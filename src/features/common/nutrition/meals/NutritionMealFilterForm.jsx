import InputDropdown from "../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"

// const filterAttr = [

//     {
//         label: "Meal Type",
//         options: ["Breackfast", "Lunch", "Snack", "Dinner"]
//         // options: ["Select Food Meal Type"]
//     },
//     {
//         label: 'Base Macro',
//         options: [
//             "mainProtein",
//             "mainCarbs",
//             "mainFats",
//             "subProtein",
//             "subCarbs",
//             "subFats",
//         ]
//         // options: ["Select Food Base Macro"]
//     },
// ]

function NutritionMealFilterForm() {
    return (
        <div className="gap-2 grid grid-cols-2 grow">
            {/* {filterAttr.map((item, index) => <InputDropdown key={index} item={item} />)} */}
            <div className="flex items-center justify-center grow">
                <InputDropdown item={
                    {
                        label: "Meal Type",
                        options: ["Breackfast", "Lunch", "Snack", "Dinner"]
                    }
                } />
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center grow w-1/2">
                    <InputDropdown item={
                        {
                            label: 'Base Macro',
                            options: [
                                "mainProtein",
                                "mainCarbs",
                                "mainFats",
                                "subProtein",
                                "subCarbs",
                                "subFats",
                            ]
                        }
                    } />
                </div>
                <InputFloatingLabel item={{ label: "From", id: "from", type: "number" }}
                // disabled={disabled}
                // register={{ ...register("yearsOfExperience", { required: "Experience field cannot be empty." }) }}
                // error={errors?.yearsOfExperience?.message} 
                />
                <InputFloatingLabel item={{ label: "To", id: "to", type: "number" }}
                // disabled={disabled}
                // register={{ ...register("yearsOfExperience", { required: "Experience field cannot be empty." }) }}
                // error={errors?.yearsOfExperience?.message} 
                />
            </div>
        </div>
    )
}

export default NutritionMealFilterForm
