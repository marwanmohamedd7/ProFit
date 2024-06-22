import Table from "../../../../../ui/Table"
import { IoEyeOutline } from "react-icons/io5"
import ActiveButton from "../../../../../ui/ActiveButton"
import Button from "../../../../../ui/Button"
import Modal from "../../../../../ui/Modal"
import AddPackage from "../../../../Trainer/packages/AddPackage"

function PendingTrainerPackageRow({ packagee }) {
    return (
        <Table.Row>
            <td className="px-6 py-4 whitespace-nowrap">{packagee.packageName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{packagee.packageType}</td>
            <td className="px-6 py-4 whitespace-nowrap">{packagee.price} EGP</td>
            <td className="px-6 py-4 whitespace-nowrap">{packagee.duration} Months</td>
            <td className="px-6 py-4 whitespace-nowrap">{packagee.subscribersLimit}</td>
            <td className="px-6 py-4 whitespace-nowrap">{<ActiveButton isActive={packagee.active} disabled={true} />}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-md font-medium">
                <div className='flex items-center justify-start gap-2'>
                    <Modal>
                        <Modal.Open opens="add-new-package">
                            <Button type="icon-update">
                                <IoEyeOutline />
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="add-new-package">
                            <AddPackage packageToUpdate={packagee} overwrite={false} isLoading={true} />
                        </Modal.Window>
                    </Modal>
                </div>
            </td>
        </Table.Row>
    )
}

export default PendingTrainerPackageRow
