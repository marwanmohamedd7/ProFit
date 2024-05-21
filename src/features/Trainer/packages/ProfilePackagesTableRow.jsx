import { useEffect, useState } from "react"
import { HiPencil, HiTrash } from "react-icons/hi2"
import { useDeletePackage } from "./useDeletePackage"
import { useUpdatePackage } from "./useUpdatePackage"
import AddPackage from "./AddPackage"
import Modal from "../../../ui/Modal"
import Table from "../../../ui/Table"
import Button from "../../../ui/Button"
import ActiveButton from "../../../ui/ActiveButton"
import ConfirmDelete from "../../../ui/ConfirmDelete"

function ProfilePackagesTableRow({ packagee, activePackages }) {
    const { _id, packageName, packageType, price, duration, subscribersLimit, active } = packagee
    const { deletePackage, isDeleting } = useDeletePackage()
    const { updatePackage, isUpdating } = useUpdatePackage()
    const [isActive, setIsActive] = useState(active ?? true)
    function onDelete(id) {
        if (!id) return
        deletePackage(id)
    }
    useEffect(function () {
        if (active === isActive) return
        updatePackage({ id: _id, updatedPackageData: { active: isActive } })
    }, [activePackages, isActive, active, _id, setIsActive, updatePackage])
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border capitalize">
                <td className="p-4 whitespace-nowrap">{packageName}</td>
                <td className="p-4 whitespace-nowrap">{packageType}</td>
                <td className="p-4 whitespace-nowrap">{price} EGP</td>
                <td className="p-4 whitespace-nowrap">{duration} Months</td>
                <td className="p-4 whitespace-nowrap">{subscribersLimit}</td>
                <td className="p-4 whitespace-nowrap">{<ActiveButton isActive={isActive} setIsActive={setIsActive} disabled={(activePackages >= 3 && !active) ?? isUpdating} />}</td>
                <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
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
                                <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="package" />
                            </Modal.Window>
                        </Modal>
                    </div>
                </td>
            </tr>
        </Table.Row >
    )
}

export default ProfilePackagesTableRow
