import InputFloatingLabel from "../../../../ui/InputFloatingLabel";
import InputDropdownMultiSelection from "../../../../ui/InputDropdownMultiSelection";

const options = [
    { value: "weight_loss", label: "Weight Loss" },
    { value: "muscle_gain", label: "Muscle Gain" },
    { value: "body_building", label: "Body Building" },
    { value: "power_lifting", label: "Power Lifting" },
    { value: "crossfit", label: "Crossfit" },
    { value: "nutrition", label: "Nutrition" },
    { value: "body_lifting", label: "Body Lifting" },
];

function ProfessionalCredentialsForm({ control, register, errors, watch, disabled }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputDropdownMultiSelection name="specializations" placeholder="specializations" options={options} control={control} disabled={disabled} errors={errors?.specializations} />
            <div className="flex flex-col justify-end">
                <InputFloatingLabel item={{ label: "Years of Experience*", id: "yearsOfExperience", type: "number", value: watch("yearsOfExperience") }}
                    disabled={disabled}
                    register={{ ...register("yearsOfExperience", { required: "Experience field cannot be empty." }) }}
                    error={errors?.yearsOfExperience?.message} />
            </div>
        </div>
    )
}

export default ProfessionalCredentialsForm




/* <div className="flex flex-col gap-2">
                            <label htmlFor="tag-input" className="block text-sm font-medium text-gray-700">Specialization*</label>
                            <div className="flex flex-wrap gap-1 bg-gray-50 items-center border rounded-md p-1">
                                {tags.map((tag, index) => (
                                    <div className="flex items-center gap-2 bg-gray-200 rounded px-2 py-1" key={index}>
                                        <span>{tag}</span>
                                        <Button type="remove" onClick={() => removeTag(index)}>&times;</Button>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    id="tag-input"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyUp={addTag}
                                    className="flex-1 outline-none bg-gray-50"
                                    disabled={true}
                                    placeholder=""
                                />
                            </div>
                        </div> */