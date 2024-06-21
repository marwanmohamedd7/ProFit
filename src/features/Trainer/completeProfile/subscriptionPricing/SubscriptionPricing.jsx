import { useNavigate } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2"
import AddPackage from "../../packages/AddPackage"
import Modal from "../../../../ui/Modal"
import Button from "../../../../ui/Button"
import Spinner from "../../../../ui/Spinner"
import SpinnerMini from "../../../../ui/SpinnerMini"
import ProfilePackagesTable from "../../packages/ProfilePackagesTable"
import { useGetPackages } from "../../packages/useGetPackages"
import styles from "../../../../styles/styles"
import { useDarkMode } from "../../../../context/DarkModeProvider"
import TableOperationsContainer from "../../../../ui/TableOperationsContainer"

function SubscriptionPricing() {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const { packages, count, isLoading } = useGetPackages();
    if (isLoading) return <Spinner />
    return (
        <div className="container flex flex-col gap-6">
            <h1 className={`${isDarkMode ? colors.text_white : colors.text_gray_900} font-bold text-xl capitalize`}>Add Your Training Packages</h1>
            <TableOperationsContainer>
                <div className="space-y-4">
                    <Modal>
                        <div className="px-4 text-right">
                            <Modal.Open opens="add-new-package">
                                <Button>
                                    <p className="flex justify-center  font-bold tracking-wide items-center gap-2">
                                        <span>add new package</span>
                                        <span className="">&#43;</span>
                                    </p>
                                </Button>
                            </Modal.Open>
                        </div>
                        <Modal.Window opens="add-new-package">
                            <AddPackage />
                        </Modal.Window>
                    </Modal>
                    <ProfilePackagesTable packages={packages} count={count} />
                </div>
            </TableOperationsContainer>
            <div className="flex justify-between items-center">
                <Button type="secondary" onClick={(e) => {
                    e.preventDefault()
                    navigate("/complete-profile/professional-credentials", { replace: true })
                }} disabled={isLoading}>back</Button>
                <Button customeStyle={`${!packages.length && "grayscale opacity-50"}`} onClick={(e) => {
                    e.preventDefault()
                    navigate("/complete-profile/submission-and-review", { replace: true })
                }} disabled={isLoading || !packages.length}>
                    {isLoading ? <SpinnerMini dark={false} /> :
                        <p className={`flex justify-center font-bold tracking-wide items-center gap-2`}>
                            <span>next page</span>
                            <span className="text-xl"><HiArrowLongRight /></span>
                        </p>
                    }</Button>
            </div>
        </div>
    )
}

export default SubscriptionPricing
