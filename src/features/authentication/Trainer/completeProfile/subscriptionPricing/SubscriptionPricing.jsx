import Modal from "../../../../../ui/Modal"
import Button from "../../../../../ui/Button"
import ProfilePackagesTable from "./ProfilePackagesTable"
import AddPackage from "./AddPackage"
import Spinner from "../../../../../ui/Spinner"
import { useGetPackages } from "./useGetPackages"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import { useNavigate } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2"


function SubscriptionPricing() {
    const navigate = useNavigate()
    const { packages = [], isLoading } = useGetPackages()
    if (isLoading) return <Spinner />
    return (
        <>
            <div className="container flex flex-col gap-10">
                <h1 className="text-blue-900 font-bold text-lg capitalize">Add Your Training Packages</h1>
                <div className="space-y-4">
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
                    <ProfilePackagesTable packages={packages} />
                </div>
                <div className="flex justify-between items-center">
                    <Button type="secondary" onClick={(e) => {
                        e.preventDefault()
                        navigate("/complete-profile/professional-credentials")
                    }} disabled={isLoading}>back</Button>
                    <Button onClick={(e) => {
                        e.preventDefault()
                        navigate("/complete-profile/submission-and-review")
                    }} disabled={isLoading}>
                        {isLoading ? <SpinnerMini /> :
                            <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                                <span>next page</span>
                                <span className="text-xl"><HiArrowLongRight /></span>
                            </p>
                        }</Button>
                </div>
            </div>
        </>

    )
}

export default SubscriptionPricing
