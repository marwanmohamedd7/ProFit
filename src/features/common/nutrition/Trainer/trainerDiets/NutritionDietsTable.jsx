import { PAGE_SIZE_MEALS } from "../../../../../utils/constants"
import Table from "../../../../../ui/Table"
import Pagination from "../../../../../ui/Pagination"
import NutritionDietsTableRow from "./NutritionDietsTableRow"
import Empty from "../../../../../ui/Empty"

function NutritionDietsTable({ diets, count, dietType, onCloseModal }) {
    if (!count) return <Empty resource="diet templates" />
    return (
        <Table>
            <Table.Header>
                {
                    dietType !== "customized plan" ?
                        <>
                            <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left whitespace-nowrap">diet template name</th>
                            {/* <th className="lg:w-[20%] w-[50%] px-4 py-2 text-left">meals count</th> */}
                            <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left whitespace-nowrap">days count</th>
                            <th className="lg:w-[30%] w-[10%] px-4 py-2 text-left whitespace-nowrap">program macros</th>
                            <th className="lg:w-[10%] w-[10%] px-8 py-2 text-right whitespace-nowrap">Actions</th>
                        </>
                        :
                        <>
                            <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left whitespace-nowrap">diet template name</th>
                            {/* <th className="lg:w-[20%] w-[50%] px-4 py-2 text-left">meals count</th> */}
                            <th className="lg:w-[20%] w-[10%] px-4 py-2 text-left whitespace-nowrap">days count</th>
                            <th className="lg:w-[30%] w-[10%] px-4 py-2 text-left whitespace-nowrap">program macros</th>
                            <th className="lg:w-[10%] w-[10%] pl-8 py-2 text-left whitespace-nowrap">Actions</th>
                        </>
                }

            </Table.Header>
            <Table.Body data={diets} render={(diet, index) => <NutritionDietsTableRow diet={diet} key={index} dietType={dietType} onCloseModal={onCloseModal} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_MEALS} />
            </Table.Footer>
        </Table>
    )
}

export default NutritionDietsTable
