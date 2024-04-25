import FilterForm from "../../../ui/FilterForm"
import SearchInput from "../../../ui/SearchInput"

function NutritionOperations({ children, filterForm, filterTabs = {}, search }) {
    return (
        <div className="mt-4">
            <FilterForm filterTabs={filterTabs}>
                {filterForm}
            </FilterForm>
            <div className="flex flex-wrap gap-2 md:gap-0 justify-between my-4">
                <SearchInput placeholder={search} />
                {children}
            </div>
        </div>
    )
}

export default NutritionOperations
