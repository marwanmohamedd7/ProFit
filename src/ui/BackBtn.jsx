import { useNavigate } from "react-router-dom";
import { HiMiniChevronLeft } from "react-icons/hi2";

function BackBtn({ path }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(path)}
            className="text-blue-700 bg-blue-100 cursor-pointer p-0.5 rounded-md font-semibold text-xl">
            <HiMiniChevronLeft />
        </button>
    )
}

export default BackBtn
