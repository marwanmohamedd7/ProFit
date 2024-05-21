import { useNavigate } from "react-router-dom";
import { HiMiniChevronLeft } from "react-icons/hi2";

function BackBtn({ path }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate({
            pathname: path,
            search: '',
        })}
            className="text-blue-700 bg-blue-50 cursor-pointer p-0.5 rounded-md font-semibold text-xl">
            <HiMiniChevronLeft />
        </button>
    )
}

export default BackBtn
