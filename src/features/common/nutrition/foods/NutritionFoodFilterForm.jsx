import { useSearchParams } from "react-router-dom";
import InputDropdown from "../../../../ui/InputDropdown";

const filterAttr = [
    {
        label: 'base Macro',
        options: [
            "mainProtein",
            "mainCarbs",
            "mainFats",
            "subProtein",
            "subCarbs",
            "subFats",
        ]
    },
    {
        label: "diet Type",
        options: [
            "Vegetarian",
            "Vegan",
            "Ketogenic",
            "Paleo",
            "Mediterranean",
            "Standard",
            "Other",
        ]
    },
    {
        label: "meal type",
        options: ["Breakfast", "Lunch", "Snack", "Dinner"]
    },
    {
        label: "category",
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
    },
];

function NutritionFoodFilterForm({ restTrigger }) {
    const [searchParams, setSearchParams] = useSearchParams();

    // Function to handle filter value changes
    function handleEvent(filterType, value) {
        const currentFilters = searchParams.get("filter") ? JSON.parse(searchParams.get("filter")) : {};

        // Update the filter type with the selected value
        if (value) {
            currentFilters[filterType] = value;
        } else {
            delete currentFilters[filterType];
        }

        // Check if currentFilters is empty
        if (Object.keys(currentFilters).length === 0) searchParams.delete("filter");
        else searchParams.set("filter", JSON.stringify(currentFilters)); // Set the updated filters in the URL parameters
        setSearchParams(searchParams);
    }

    return (
        <div className="flex justify-center gap-2">
            {filterAttr.map((item, index) => (
                <InputDropdown
                    key={index}
                    item={item}
                    handleEvent={(value) => handleEvent(item.label.replace(" ", ""), value)}
                />
            ))}
        </div>
    );
}

export default NutritionFoodFilterForm;
