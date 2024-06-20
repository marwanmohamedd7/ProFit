import { useSorting } from "../../../../hooks/useSorting";
import Empty from "../../../../ui/Empty";
import Table from "../../../../ui/Table";
import Pagination from "../../../../ui/Pagination";
import NutritionTableRow from "./NutritionTableRow";
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader";

const columns = [
    { key: "foodname", label: "Food Details" },
    { key: "per", label: "Amount/Serving" },
    { key: ["macros", "proteins"], label: "Protein" },
    { key: ["macros", "fats"], label: "Fats" },
    { key: ["macros", "carbs"], label: "Carbs" },
    { key: ["macros", "calories"], label: "Calories" },
    { key: "category", label: "Category" },
];

function NutritionTable({ foods, count, section, onCloseModal }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(foods);
    if (!count || !foods.length) return <Empty resource="foods" />;
    return (
        <Table>
            <Table.Header border={false}>
                {columns.map(({ key, label }) => (
                    <th className="px-4 py-2" key={label}>
                        <SortTableColumnsHeader
                            sortingKey={key}
                            columnName={label}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                        />
                    </th>
                ))}
                <th className="px-4 py-2">{section === "food" ? "Actions" : "Add food"}</th>
            </Table.Header>
            <Table.Body
                data={sortedData}
                render={(food) => (
                    <NutritionTableRow food={food} key={food._id} section={section} onCloseModal={onCloseModal} />
                )}
            />
            <Table.Footer border={false}>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    );
}

export default NutritionTable;
