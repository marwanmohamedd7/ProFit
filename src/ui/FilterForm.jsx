import { useState } from "react"
import { CiFilter } from "react-icons/ci";
// import { FaDeleteLeft } from "react-icons/fa6";
import { HiMiniChevronDown } from "react-icons/hi2";
import { useCurrentUser } from "../context/UserProvider";
import Button from "./Button";
import FilterTabs from "./FilterTabs";

function FilterForm({ children, filterTabs = {} }) {
    const { userRole } = useCurrentUser();
    const [isOpen, setIsOpen] = useState(true);
    return !isOpen ? (
        <Button onClick={() => setIsOpen(true)}>
            <span><CiFilter /></span>
            <span>Filter</span>
            <span><HiMiniChevronDown /></span>
        </Button>
    ) : (
        <div className="w-full mx-auto my-4 px-4 sm:px-6 lg:px-8 py-5 bg-white rounded-md border">
            <form className="flex flex-col gap-4 capitalize" onSubmit={(e) => e.preventDefault()}>
                {
                    userRole === 'trainer' &&
                    <div className="flex justify-center">
                        <FilterTabs filterTabs={filterTabs} />
                    </div>
                }

                {children}

                <div className="flex gap-2">
                    <Button type="primary">
                        <p className="flex justify-center items-center gap-2">
                            <span><CiFilter /></span>
                            <span>Filter</span>
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
