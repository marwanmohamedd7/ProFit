import { HiPencil } from "react-icons/hi2";
import Button from "../../../../ui/Button";
import DietTableRowMacros from "../../../common/nutrition/Trainer/trainerDiets/DietTableRowMacros";
import Table from "../../../../ui/Table";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../utils/helpers";
import { IoEyeOutline } from "react-icons/io5"

function TraineeDietPlansTableRow({ diet }) {
    const navigate = useNavigate();
    const { trainee: _id, planName, planmacros, status, createdAt } = diet;
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border">
                <td className="p-4 whitespace-nowrap text-left">{planName}</td>

                <td className="p-4 whitespace-nowrap text-left">{formatDate(createdAt)}</td>
                <td className="p-4 whitespace-nowrap text-left">
                    <DietTableRowMacros
                        fats={planmacros.fats}
                        carbs={planmacros.carbs}
                        calories={planmacros.calories}
                        proteins={planmacros.proteins}
                    />
                </td>

                <td className="p-4 whitespace-nowrap text-sm text-left font-medium">
                    <div className='flex items-center gap-1'>
                        {
                            status === "Current" ?
                                <Button onClick={() => navigate(`/trainer/trainees/trainee/diets/${_id}`)} type="icon-update">
                                    <HiPencil />
                                </Button>
                                :
                                <Button disabled={true} type="icon-update">
                                    <IoEyeOutline />
                                </Button>
                        }
                        {/* <Modal>
                            <Modal.Open opens="delete-diet-template">
                                <Button type="icon-delete"
                                >
                                    <HiTrash />
                                </Button>
                            </Modal.Open>
                            <Modal.Window opens="delete-diet-template">
                                <ConfirmDelete isLoading={"isDeleting"} onConfirm={() => onDelete("_id")} resourceName="diet plan" />
                            </Modal.Window>
                        </Modal> */}
                    </div>
                </td>
            </tr>
        </Table.Row>
    )
}

export default TraineeDietPlansTableRow
