import { useEffect, useState } from "react";

function InputDropdown({ item: { id, label, options }, register, error, getValues, disabled }) {
    const [selectValue, setSelectValue] = useState("");
    useEffect(function () {
        const value = getValues?.[id]
        if (value) {
            if (typeof value === "string") setSelectValue(value)
            else setSelectValue(value[0])
        }
    }, [getValues, id])
    return (
        <div className="relative flex flex-col gap-1 grow">
            <div className="relative">
                <select
                    id={id}
                    {...register}
                    disabled={disabled}
                    onBlur={(e) => {
                        const select = e.target;
                        setSelectValue(select.value)
                        select.classList[select.value ? 'add' : 'remove']('used');
                    }}
                    className="capitalize flex w-full text-xs sm:text-sm p-1.5 border text-gray-700 border-gray-300 bg-white rounded-md
                    focus:outline-none focus:ring-blue-700 focus:border-blue-700 peer"
                >
                    <option className="text-gray-400" value="">...</option>
                    {options.map((option, index) => <option className="text-gray-700 text-sm" key={index} value={option}>{option}</option>)}
                    {/* Add options here */}
                </select>
                <label
                    htmlFor={id}
                    className={`absolute whitespace-nowrap block text-lg font-medium bg-white disabled:bg-gray-50 text-gray-700 duration-300 transform scale-75
                        top-1.5 sm:top-1.5 z-10 origin-[0] px-2 mx-1.5 my-[0.1rem] ${selectValue && "px-2 text-sm scale-75 -translate-y-4 left-0"} 
                        peer-focus:px-2 peer-focus:text-sm peer-focus:text-blue-700 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-0`}
                >
                    {label}
                </label>
                {error && <span className="text-red-700 text-xs">{error}</span>}
            </div>
        </div>
    );
}

export default InputDropdown;
