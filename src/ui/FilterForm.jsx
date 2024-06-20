// import { CiFilter } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeProvider";
import Button from "./Button";
import styles from "../styles/styles";

function FilterForm({ children, isOpen, setIsOpen }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [searchParams, setSearchParams] = useSearchParams();
    function handleReset() {
        if (searchParams.get("filter")) searchParams.delete("filter")
        setSearchParams(searchParams);
        setIsOpen(false);
    }
    return isOpen && (
        <div className={`w-full mx-auto my-4 p-4 ${isDarkMode ? `${colors.border_gray_700} ${colors.bg_slate_900}`:`${colors.bg_gray_50}`} rounded-md border`}>
            <form className="flex flex-col gap-4 capitalize" onSubmit={(e) => e.preventDefault()}>
                {children}
                <div className="flex gap-2" >
                    <Button type="primary" onClick={handleReset}>
                        <p className="flex justify-center items-center gap-2 capitalize">
                            {/* <span><CiFilter /></span> */}
                            <span>reset</span>
                        </p>
                    </Button>
                    <Button type="secondary" onClick={() => setIsOpen(false)}>
                        <p className="flex justify-center items-center gap-2">
                            {/* <span><FaDeleteLeft /></span> */}
                            <span>Close</span>
                        </p>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FilterForm