import { useGetTransformations } from "./useGetTransformations";
import Empty from "../../../../../ui/Empty";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import AddTransformation from "./AddTransformation";
import TransformationCard from "./TransformationCard";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function Transformations() {
    const { transformations = [], isLoading } = useGetTransformations();
    const colors = styles();
    const { isDarkMode } = useDarkMode();

    return (
        <div className={`space-y-4 my-4 `}>
            {
                (transformations.length < 1) || isLoading ?
                    <div className="lg:w-1/2 w-full">
                        {
                            isLoading ?
                                <div className={`text-center p-1 rounded-md shadow-sm flex justify-center items-center ${isDarkMode ? colors.bg_slate_800 : colors.bg_gray_100}`}>
                                    <p className={`font-bold text-xl my-4 ${isDarkMode ? colors.text_white : colors.text_blue_900}`}><SpinnerMini /></p>
                                </div>
                                : <Empty resource={"transformations"} />
                        }
                    </div>
                    :
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {transformations.map((transformation) => <TransformationCard transformation={transformation} key={transformation._id} />)}
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
                            <span>add new transformation</span>
                            <span className="text-lg">&#43;</span>
                        </p>
                    </Button>
                </Modal.Open>
            </Modal>
        </div>
    );
}

export default Transformations;
