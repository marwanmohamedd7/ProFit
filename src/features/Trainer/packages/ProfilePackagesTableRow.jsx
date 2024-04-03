import { HiPencil, HiTrash } from "react-icons/hi2"
import { useDeletePackage } from "./useDeletePackage"
import AddPackage from "./AddPackage"
import Modal from "../../../ui/Modal"
import Table from "../../../ui/Table"
import Button from "../../../ui/Button"
import SpinnerMini from "../../../ui/SpinnerMini"
import ActiveButton from "../../../ui/ActiveButton"

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

                        <Button type="icon-delete"
                            onClick={() => onDelete(packagee._id)}
                            disabled={isDeleting}
                        >
                            {isDeleting ? <SpinnerMini /> : <HiTrash />}
                        </Button>
                    </div>
                </td>
            </tr>
        </Table.Row >
    )
}

export default ProfilePackagesTableRow
