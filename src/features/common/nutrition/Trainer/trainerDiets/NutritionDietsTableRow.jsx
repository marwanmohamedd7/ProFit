import { useNavigate, useSearchParams } from "react-router-dom"
import { HiPencil, HiTrash } from "react-icons/hi2"
import Modal from "../../../../../ui/Modal"
import Table from "../../../../../ui/Table"
import Button from "../../../../../ui/Button"
import ConfirmDelete from "../../../../../ui/ConfirmDelete"
import { useDeleteDietTemplate } from "./useDeleteDietTemplate"
import DietTableRowMacros from "./DietTableRowMacros"
import { GoArrowRight } from "react-icons/go"
import { useDietProvider } from "../../../../../context/DietProvider"
import toast from "react-hot-toast"
import { useDarkMode } from "../../../../../context/DarkModeProvider"
import styles from "../../../../../styles/styles"

function NutritionDietsTableRow({ diet, dietType, onCloseModal }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { dispatch } = useDietProvider();
    const { deleteDietTemplate, isDeleting } = useDeleteDietTemplate();
    const { _id, planName, plantype, planmacros, description, daysCount, days } = diet;
    function onDelete(id) {
        if (!id) return;
        deleteDietTemplate(id);
    }

    function handleLoadDiet() {
        dispatch({ type: "diet/loadDietPlan", payload: { days, description, daysCount, planName, planmacros, plantype: "Customized plan" } });
        searchParams.set("day", 1);
        setSearchParams(searchParams);
        toast.success("Added diet item!");
        onCloseModal();
    }

    return (
        <Table.Row>
            <td className="p-4 whitespace-nowrap text-left">
                <p className="flex flex-col gap-1">
                    <span className="font-bold text-lg">{planName}</span>
                    <span className={`font-normal text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{plantype}</span>
                </p>
            </td>
            <td className="p-4">{daysCount}</td>
            <td className="p-4 whitespace-nowrap text-left">
                <DietTableRowMacros
                    fats={planmacros.fats}
                    carbs={planmacros.carbs}
                    calories={planmacros.calories}
                    proteins={planmacros.proteins}
                />
            </td>
            {
                dietType !== "customized plan" ?
                    <td className="p-4 whitespace-nowrap text-sm font-medium">
                        <div className='flex items-center justify-end gap-1'>
                            <Button onClick={() => navigate(`diets/${_id}`)} type="icon-update">
                                <HiPencil />
                            </Button>

                            <Modal>
                                <Modal.Open opens="delete-diet-template">
                                    <Button type="icon-delete"
                                    >
                                        <HiTrash />
                                    </Button>
                                </Modal.Open>
                                <Modal.Window opens="delete-diet-template">
                                    <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="diet" />
                                </Modal.Window>
                            </Modal>
                        </div>
                    </td>
                    :
                    <td className="p-2.5 whitespace-nowrap text-sm font-medium">
                        <div className='flex items-center  justify-end gap-1'>
                            <Button onClick={handleLoadDiet} type="secondary" customeStyle="py-2">
                                <p className="flex items-center justify-center gap-2 capitalize">
                                    <span>select</span>
                                    <span><GoArrowRight /></span>
                                </p>
                            </Button>
                        </div>
                    </td>
            }
        </Table.Row>
    )
}

export default NutritionDietsTableRow
