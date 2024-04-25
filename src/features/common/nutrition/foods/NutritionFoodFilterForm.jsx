import InputDropdown from "../../../../ui/InputDropdown"

const filterAttr = [
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
        // options: ["Select Food Base Macro"]
    },
    {
        label: "Diet Type",
        options: [
            "Vegetarian",
            "Vegan",
            "Ketogenic",
            "Paleo",
            "Mediterranean",
            "Standard",
            "Other",
        ]
        // options: ["select Food Diet Type"]
    },
    {
        label: "Meal Type",
        options: ["Breackfast", "Lunch", "Snack", "Dinner"]
        // options: ["Select Food Meal Type"]
    },
    {
        label: "Category",
        options: [
            "Desserts",
            "Vegetables",
            "Fruits",
            "Bakeries",
            "Spices",
            "Seafood",
            "Juices",
            "Meat",
            "Oils",
            "Nuts",
            "Chicken",
            "Supplements",
            "Egg",
            "Milk Product",
            "Sauces",
        ]
        // options: ["Select Food Category"]
    },
]

function NutritionFoodFilterForm() {
    return (
        <div className="flex justify-center gap-2">
            {filterAttr.map((item, index) => <InputDropdown key={index} item={item} />)}
        </div>
    )
}

export default NutritionFoodFilterForm
