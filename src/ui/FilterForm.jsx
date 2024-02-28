import { useState } from "react"
import { CiFilter } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiMiniChevronDown } from "react-icons/hi2";
import FilterFormItem from "./FilterFormItem"
import Button from "./Button";

function FilterForm({ filterAttr }) {
    const [isOpen, setIsOpen] = useState(false)
    return !isOpen ? (
        <Button onClick={() => setIsOpen(true)}>
            <span><CiFilter /></span>
            <span>Filter</span>
            <span><HiMiniChevronDown /></span>
        </Button>
    ) : (
        <div className="w-full mx-auto my-4 px-4 sm:px-6 lg:px-8 py-5 bg-white rounded-md border">
            <form className="flex flex-col gap-4 capitalize" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-wrap justify-center gap-2">
                    {filterAttr.map((item, index) => <FilterFormItem item={item} key={index} />)}
                </div>

                <div className="col-span-3 flex justify-start space-x-4">
                    <Button type="primary" onClick={() => setIsOpen(false)}>
                        <span><CiFilter /></span>
                        <span>Filter</span>
                    </Button>
                    <Button type="reset">
                        <span><FaDeleteLeft /></span>
                        <span>Clear</span>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FilterForm
