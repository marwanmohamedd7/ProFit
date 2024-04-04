import { useGetPackages } from "./useGetPackages"
import ProfilePackagesTable from "./ProfilePackagesTable"
import AddPackage from "./AddPackage"
import Spinner from "../../../ui/Spinner"
import SearchInput from "../../../ui/SearchInput"
import Modal from "../../../ui/Modal"
import Button from "../../../ui/Button"

function PackagesTrainer() {
    const { packages = [], isLoading } = useGetPackages()
    if (isLoading) return <div className="h-[40dvh]"><Spinner /></div>
    return (
        <>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <SearchInput placeholder="search..." />
                    <Modal>
                        <Modal.Open opens="add-new-package">
                            <Button>
                                <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                                    <span>add new package</span>
                                    <span className="">&#43;</span>
                                </p>
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="add-new-package">
                            <AddPackage />
                        </Modal.Window>
                    </Modal>
                </div>
                <ProfilePackagesTable packages={packages} />
            </div>
        </>
    )
}

export default PackagesTrainer
