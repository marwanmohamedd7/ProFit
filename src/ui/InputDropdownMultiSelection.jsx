import Select from "react-select";
import { Controller } from "react-hook-form";
import { useDarkMode } from "../context/DarkModeProvider";

const getCustomStyles = (isDarkMode, disabled) => ({
    control: (provided, state) => ({
        ...provided,
        cursor: disabled ? "not-allowed" : "pointer", // Corrected property name
        border: isDarkMode ? '1px solid #444' : '1px solid #eee',
        backgroundColor: disabled
            ? (isDarkMode ? '#334155' : '#f9fafb') // slate-700 and gray-50 colors
            : (isDarkMode ? '#1e293b' : '#ffffff'), // default background colors
        padding: '2px',
        boxShadow: 'none',
        borderRadius: "6px",
        '&:hover': { borderColor: isDarkMode ? '#888' : '#aaa' },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        fontSize: '14px',
        color: isDarkMode ? '#ccc' : '#222',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: isDarkMode ? '#ddd' : '#333',
    }),
    multiValue: (provided, state) => ({
        ...provided,
        backgroundColor: disabled
            ? (isDarkMode ? '#475569' : '#e9e9e9')
            : (isDarkMode ? '#334155' : '#e9e9e9'),
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        color: isDarkMode ? '#ddd' : '#333',
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        color: isDarkMode ? '#bbb' : '#888',
        '&:hover': {
            backgroundColor: isDarkMode ? '#d9534f' : '#c23b22',
            color: 'white',
        },
    }),
});

function InputDropdownMultiSelection({ name, placeholder, options, required, control, disabled, errors }) {
    const { isDarkMode } = useDarkMode();
    const formattedOptions = typeof options[0] === "string" ? options.map(option => ({ value: option, label: option })) : options;
    return (
        <div className="relative flex flex-col gap-1.5">
            {
                name !== "specializations" && <span className={`text-xs pl-0.5 ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>{placeholder}</span>
            }
            <Controller
                name={name}
                control={control}
                disabled={disabled}
                rules={{ required: required ?? `${placeholder} field cannot be empty.` }}
                render={({ field }) => (
                    <Select
                        {...field}
                        isDisabled={disabled}
                        options={formattedOptions}
                        isMulti
                        placeholder={placeholder}
                        classNamePrefix="select"
                        styles={getCustomStyles(isDarkMode, disabled)}
                    />
                )}
            />
            {errors && <span className={`text-xs ${isDarkMode ? "text-red-500" : "text-red-700"}`}>{errors}</span>}
        </div>
    )
}

export default InputDropdownMultiSelection;
