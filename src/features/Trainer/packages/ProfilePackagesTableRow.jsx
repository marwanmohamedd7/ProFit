import { useEffect, useState, useCallback } from "react";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useUpdatePackage } from "./useUpdatePackage";
import { useDeletePackage } from "./useDeletePackage";
import AddPackage from "./AddPackage";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import Button from "../../../ui/Button";
import ActiveButton from "../../../ui/ActiveButton";
import ConfirmDelete from "../../../ui/ConfirmDelete";

function ProfilePackagesTableRow({ packageData, activePackages, isLoading }) {
    const { _id, packageName, packageType, price, duration, subscribersLimit, active } = packageData;
    const { deletePackage, isDeleting } = useDeletePackage();
    const { updatePackage, isUpdating } = useUpdatePackage();
    const [isActive, setIsActive] = useState(active ?? true);
    const onDelete = useCallback((id) => {
        if (!id) return;
        deletePackage(id);
    }, [deletePackage]);

    useEffect(() => setIsActive(active), [active])

    const isButtonDisabled = isLoading || isUpdating;

    return (
        <Table.Row>
            <td className="p-4 whitespace-nowrap">{packageName}</td>
            <td className="p-4 whitespace-nowrap">{packageType}</td>
            <td className="p-4 whitespace-nowrap">{price} EGP</td>
            <td className="p-4 whitespace-nowrap">{duration} Months</td>
            <td className="p-4 whitespace-nowrap">{subscribersLimit}</td>
            <td className="p-4 whitespace-nowrap">
                <ActiveButton
                    onClick={() => updatePackage({ id: _id, updatedPackageData: { active: !isActive } })}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    disabled={isButtonDisabled || (activePackages >= 4 && !active)}
                />
            </td>
            <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-start gap-2">
                    <Modal>
                        <Modal.Open opens="update-package">
                            <Button type="icon-update" disabled={isButtonDisabled}>
                                <HiPencil />
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="update-package">
                            <AddPackage packageToUpdate={packageData} isLoading={isButtonDisabled} />
                        </Modal.Window>
                    </Modal>

                    <Modal>
                        <Modal.Open opens="delete-package">
                            <Button type="icon-delete" disabled={isButtonDisabled}>
                                <HiTrash />
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="delete-package">
                            <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="package" />
                        </Modal.Window>
                    </Modal>
                </div>
            </td>
        </Table.Row>
    );
}

export default ProfilePackagesTableRow;
