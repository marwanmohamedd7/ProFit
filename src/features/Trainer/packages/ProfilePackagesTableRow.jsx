import { HiPencil, HiTrash } from "react-icons/hi2"
import { useDeletePackage } from "./useDeletePackage"
import AddPackage from "./AddPackage"
import Modal from "../../../ui/Modal"
import Table from "../../../ui/Table"
import Button from "../../../ui/Button"
import ActiveButton from "../../../ui/ActiveButton"
import ConfirmDelete from "../../../ui/ConfirmDelete"

function ProfilePackagesTableRow({ packagee }) {
    const { deletePackage, isDeleting } = useDeletePackage()
    function onDelete(id) {
        if (!id) return
        deletePackage(id)
    }

    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 capitalize">
                <td className="px-6 py-2 whitespace-nowrap">{packagee.packageName}</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.packageType}</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.price} EGP</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.duration} Months</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.subscribersLimit}</td>
                <td className="px-6 py-2 whitespace-nowrap">{<ActiveButton isActive={packagee.active} disabled={true} />}</td>
                <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                    <div className='flex items-center justify-start gap-2'>
                        <Modal>
                            <Modal.Open opens="update-package">
                                <Button type="icon-update">
                                    <HiPencil />
                                </Button>
                            </Modal.Open>
                            <Modal.Window opens="update-package" >
                                <AddPackage packageToUpdate={packagee} />
                            </Modal.Window>
                        </Modal>

                        <Modal>
                            <Modal.Open opens="delete-food">
                                <Button type="icon-delete"
                                >
                                    <HiTrash />
                                </Button>
                            </Modal.Open>
                            <Modal.Window opens="delete-food">
                                <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(packagee._id)} resourceName="package" />
                            </Modal.Window>
                        </Modal>   
                    </div>
                </td>
            </tr>
        </Table.Row >
    )
}

export default ProfilePackagesTableRow
