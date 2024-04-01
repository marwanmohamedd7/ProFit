import Button from "../../../../../ui/Button"
import Empty from "../../../../../ui/Empty"
import Modal from "../../../../../ui/Modal"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import AddTransformation from "./AddTransformation"
import TransformationCard from "./TransformationCard"
import { useGetTransformations } from "./useGetTransformations"

function Transformation() {
    const { transformations = [], isLoading } = useGetTransformations()
    return (
        <>
            {
                !transformations.length || isLoading ?
                    <div className="w-1/2">
                        {
                            isLoading ?
                                <div className="bg-gray-100 text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                                    <p className="font-bold text-xl text-blue-900 my-4"><SpinnerMini /></p>
                                </div>
                                : <Empty resource={"transformations"} />
                        }
                    </div>
                    :
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {transformations.map((transformation, index) => <TransformationCard transformation={transformation} key={index} />)}
                    </div>
            }
            <Modal>
                <Modal.Window opens="add-new-transformation">
                    <AddTransformation />
                </Modal.Window>
                <Modal.Open opens="add-new-transformation">
                    <Button
                        disabled={isLoading}
                        onClick={(e) => e.preventDefault()} type="secondary">
                        <p className="flex justify-center items-center gap-2 capitalize">
                            <span>add new tranformation</span>
                            <span className="text-lg">&#43;</span>
                        </p>
                    </Button>
                </Modal.Open>
            </Modal>
        </>
    )
}

export default Transformation
