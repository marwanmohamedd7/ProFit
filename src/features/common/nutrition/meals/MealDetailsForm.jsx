import { BiTrash } from "react-icons/bi"
import { useDarkMode } from "../../../../context/DarkModeProvider"
import styles from "../../../../styles/styles"
import ConfirmDelete from "../../../../ui/ConfirmDelete"
import InputDropdown from "../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"
import InputTextArea from "../../../../ui/InputTextArea"
import Modal from "../../../../ui/Modal"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"

function MealDetailsForm({ register, watch, errors, getValues, disabled, variation, mealToggle, setMealToggle, activeDayMeals, handleDeleteMealSection }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="grid gap-2 grow">
            <div className="col-span-2 flex items-center gap-2 grow w-full">
                <InputFloatingLabel
                    item={{ id: "mealname", label: "meal name", value: watch("mealname") }}
                    disabled={disabled}
                    error={errors?.mealname?.message}
                    register={
                        {
                            ...register("mealname", {
                                required: 'This field is required',
                            })
                        }
                    }
                />
                <InputDropdown item={
                    {
                        id: "mealtype",
                        label: "Meal Type",
                        options: ["Breakfast", "Lunch", "Snack", "Dinner"]
                    }
                }
                    disabled={disabled}
                    error={errors?.mealtype?.message}
                    getValues={getValues}
                    register={{
                        ...register("mealtype", {
                            required: "Select meal type."
                        })
                    }}
                />
                {
                    variation === "diet" &&
                    <div className="flex items-center gap-2">
                        <Modal>
                            <Modal.Open opens="delete-meal-section">
                                <button disabled={activeDayMeals <= 2 ? true : false} className={`${isDarkMode ? `${colors.bg_red_800} ${colors.text_white} hover:${colors.bg_red_700}` : `${colors.bg_red_700} ${colors.text_white} hover:${colors.bg_red_600}`} disabled:cursor-not-allowed xl:p-3 p-2.5 rounded-lg text-lg`}><BiTrash /></button>
                            </Modal.Open>
                            <Modal.Window opens="delete-meal-section">
                                <ConfirmDelete onConfirm={handleDeleteMealSection} resourceName="section" />
                            </Modal.Window>
                        </Modal>
                        <button onClick={() => setMealToggle(value => !value)} className={`${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_gray_100} ${colors.border_gray_700}` : `${colors.bg_gray_100} ${colors.text_gray_700}`} border xl:p-3 p-2.5 rounded-lg text-lg`}>{mealToggle ? <FaChevronUp /> : <FaChevronDown />}</button>
                    </div>
                }
            </div>
            <div className="grid col-span-2">
                <InputTextArea
                    disabled={disabled}
                    errors={errors?.mealnote?.message}
                    placeholder="Meal note..."
                    register={{
                        ...register("mealnote", {
                            required: false,
                        })
                    }}
                />
            </div>
        </div>
    )
}

export default MealDetailsForm
