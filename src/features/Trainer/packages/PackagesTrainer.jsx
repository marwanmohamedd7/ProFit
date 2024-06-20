import { useGetPackages } from "./useGetPackages"
import ProfilePackagesTable from "./ProfilePackagesTable"
import AddPackage from "./AddPackage"
import Spinner from "../../../ui/Spinner"
import SearchInput from "../../../ui/SearchInput"
import Modal from "../../../ui/Modal"
import Button from "../../../ui/Button"
import { useSearch } from "../../../hooks/useSearch"
import TableOperationsContainer from "../../../ui/TableOperationsContainer"

function PackagesTrainer() {
    const { packages, allPackages, count, isLoading } = useGetPackages()
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allPackages, ["packageName", "packageType", "subscribersLimit", "duration", "price"]);
    if (isLoading) return <div className="h-[50dvh]"><Spinner /></div>
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : packages;
    return (
        <TableOperationsContainer>
            <div className="space-y-4">
                <div className="flex justify-between items-center px-4">
                    <SearchInput placeholder="search package..." setSearchKeyword={setSearchKeyword}/>
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
                <ProfilePackagesTable packages={dataReady} count={dataCount} isLoading={isLoading} />
            </div>
        </TableOperationsContainer>
    )
}

export default PackagesTrainer
