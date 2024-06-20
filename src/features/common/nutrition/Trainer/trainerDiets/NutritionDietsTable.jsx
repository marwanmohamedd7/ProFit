import { PAGE_SIZE_MEALS } from "../../../../../utils/constants"
import Table from "../../../../../ui/Table"
import Pagination from "../../../../../ui/Pagination"
import NutritionDietsTableRow from "./NutritionDietsTableRow"
import Empty from "../../../../../ui/Empty"
import { useSorting } from "../../../../../hooks/useSorting"
import SortTableColumnsHeader from "../../../../../ui/SortTableColumnsHeader"

const columns = [
    { key: "planName", label: "diet template name" },
    { key: "daysCount", label: "days count" },
    { key: ["planmacros", "calories"], label: "program macros" },
];

function NutritionDietsTable({ diets, count, dietType, onCloseModal }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(diets);
    if (!count || !diets.length) return <Empty resource="diet templates" />
    return (
        <Table>
            <Table.Header border={false}>
                {columns.map(({ key, label }) => (
                    <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left whitespace-nowrap" key={label}>
                        <SortTableColumnsHeader
                            sortingKey={key}
                            columnName={label}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                        />
                    </th>
                ))}
                <th className={`lg:w-[10%] w-[10%] py-2 ${dietType === "customized plan" ? "pl-8 text-left" : "px-8 text-right"} whitespace-nowrap`}>Actions</th>
            </Table.Header>
            <Table.Body data={sortedData} render={(diet, index) => <NutritionDietsTableRow diet={diet} key={index} dietType={dietType} onCloseModal={onCloseModal} />} />
            <Table.Footer border={false}>
                <Pagination count={count} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table>
    )
}

export default NutritionDietsTable
