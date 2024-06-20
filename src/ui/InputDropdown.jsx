import { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useDarkMode } from "../context/DarkModeProvider";

function InputDropdown({ item: { id, label, options }, register, error, getValues, disabled, handleEvent, initialValue }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [selectValue, setSelectValue] = useState(initialValue || "");

    useEffect(() => {
        const value = getValues?.[id];
        if (value) {
            if (typeof value === "string") setSelectValue(value);
            else setSelectValue(value[0]);
        }
    }, [getValues, id]);

    // useEffect(() => {
    //     setSelectValue(initialValue);
    // }, [initialValue]);
    return (
        <div className="relative flex flex-col gap-1 grow">

            {
                getValues ?
                    <div className="relative">
                        <select
                            id={id}
                            {...register}
                            disabled={disabled}
                            onBlur={(e) => {
                                const select = e.target;
                                setSelectValue(select.value);
                                select.classList[select.value ? 'add' : 'remove']('used');
                            }}
                            className={`capitalize flex w-full text-xs sm:text-sm p-[6.5px] border rounded-md 
                            ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200} 
                            ${isDarkMode ? colors.bg_slate_800 : colors.bg_white} 
                            ${disabled ? `${isDarkMode ? `${colors.text_gray_400} disabled:bg-slate-700` : `${colors.text_gray_500} disabled:bg-gray-50`} cursor-not-allowed` : isDarkMode ? colors.text_white : colors.text_gray_700}
                            ${isDarkMode ? `focus:ring-blue-500 focus:border-blue-500` : `focus:ring-blue-700 focus:border-blue-700`} 
                            focus:outline-none peer`}
                        >
                            <option className={`${isDarkMode ? colors.text_gray_400 : colors.text_gray_400}`} value=""></option>
                            {options.map((option, index) => <option className={`${isDarkMode ? colors.text_white : colors.text_gray_700} text-sm`} key={index} value={option}>{option}</option>)}
                        </select>

                        <label
                            htmlFor={id}
                            className={`absolute whitespace-nowrap block text-lg font-medium 
                            ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}
                            ${isDarkMode ? `${colors.text_white} peer-focus:text-white` : `${colors.text_gray_700} peer-focus:text-blue-700`} duration-300 transform scale-75
                            top-1.5 sm:top-1.5 z-10 origin-[0] px-2 mx-1.5 my-[0.125rem] ${selectValue && "px-2 text-sm scale-75 -translate-y-4 left-0"} 
                            peer-focus:px-2 peer-focus:text-sm peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-0`}
                        >
                            {label}
                        </label>
                        {error && <span className={`${colors.text_red_700} text-xs`}>{error}</span>}
                    </div>
                    :
                    <div className="relative">
                        <select
                            id={id}
                            {...register}
                            disabled={disabled}
                            onChange={(e) => {
                                handleEvent(e.target.value);
                                setSelectValue(e.target.value);
                            }}
                            className={`capitalize flex w-full text-xs sm:text-sm p-[6.5px] border rounded-md
                            ${isDarkMode ? colors.text_white : colors.text_gray_700}
                            ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200}
                            ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}
                            ${isDarkMode ? `focus:ring-blue-500 focus:border-blue-500` : `focus:ring-blue-700 focus:border-blue-700`}
                            focus:outline-none peer`}
                        >
                            <option className={`${isDarkMode ? colors.text_gray_400 : colors.text_gray_400}`} value=""></option>
                            {options.map((option, index) => (
                                <option
                                    className={`${isDarkMode ? colors.text_white : colors.text_gray_700} text-sm`}
                                    key={index}
                                    value={option}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                        <label
                            htmlFor={id}
                            className={`absolute whitespace-nowrap block text-lg font-medium
                            ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}
                            ${isDarkMode ? `${colors.text_white} peer-focus:text-white` : `${colors.text_gray_700} peer-focus:text-blue-700`} duration-300 transform scale-75
                            top-1.5 sm:top-1.5 z-10 origin-[0] px-2 mx-1.5 my-[0.125rem] ${selectValue && "px-2 text-sm scale-75 -translate-y-4 left-0"}
                            peer-focus:px-2 peer-focus:text-sm peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-0`}
                        >
                            {label}
                        </label>
                        {error && <span className={`text-xs ${isDarkMode ? "text-red-500" :"text-red-700"}`}>{error}</span>}
                    </div>
            }
        </div>
    );
}

export default InputDropdown;

// return (
//     <div className="relative flex flex-col gap-1 grow">
//         <div className="relative">
//             <select
//                 id={id}
//                 {...register}
//                 disabled={disabled}
//                 onBlur={(e) => {
//                     const select = e.target;
//                     setSelectValue(select.value);
//                     select.classList[select.value ? 'add' : 'remove']('used');
//                 }}
//                 className={`capitalize flex w-full text-xs sm:text-sm p-[6.5px] border rounded-md
//                     ${isDarkMode ? colors.text_white : colors.text_gray_700}
//                     ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200}
//                     ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}
//                     ${isDarkMode ? `focus:ring-blue-500 focus:border-blue-500` : `focus:ring-blue-700 focus:border-blue-700`}
//                     focus:outline-none peer`}
//             >
//                 <option className={`${isDarkMode ? colors.text_gray_400 : colors.text_gray_400}`} value=""></option>
//                 {options.map((option, index) => <option className={`${isDarkMode ? colors.text_white : colors.text_gray_700} text-sm`} key={index} value={option}>{option}</option>)}
//             </select>
//             <label
//                 htmlFor={id}
//                 className={`absolute whitespace-nowrap block text-lg font-medium
//                     ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}
//                     ${isDarkMode ? `${colors.text_white} peer-focus:text-white` : `${colors.text_gray_700} peer-focus:text-gray-700`} duration-300 transform scale-75
//                         top-1.5 sm:top-1.5 z-10 origin-[0] px-2 mx-1.5 my-[0.125rem] ${selectValue && "px-2 text-sm scale-75 -translate-y-4 left-0"}
//                         peer-focus:px-2 peer-focus:text-sm peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-0`}
//             >
//                 {label}
//             </label>
//             {error && <span className={`${colors.text_red_700} text-xs`}>{error}</span>}
//         </div>
//     </div>
// );


// function InputDropdown({ item: { label, options }, register, error, getValues, disabled, handleEvent, initialValue }) {
//     const colors = styles();
//     const { isDarkMode } = useDarkMode();
//     const [selectValue, setSelectValue] = useState(initialValue || "");

//     useEffect(() => {
//         const value = getValues?.[label];
//         if (value) {
//             setSelectValue(typeof value === "string" ? value : value[0]);
//         }
//     }, [getValues, label]);

//     useEffect(() => {
//         setSelectValue(initialValue);
//     }, [initialValue]);

//     return (
//         <div className="relative flex flex-col gap-1 grow">
//             <div className="relative">
// <select
//     id={label}
//     {...register}
//     disabled={disabled}
//     onChange={(e) => {
//         handleEvent(e.target.value);
//         setSelectValue(e.target.value);
//     }}
//     className={`capitalize flex w-full text-xs sm:text-sm p-[6.5px] border rounded-md
//     ${isDarkMode ? colors.text_white : colors.text_gray_700}
//     ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200}
//     ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}
//     ${isDarkMode ? `focus:ring-blue-500 focus:border-blue-500` : `focus:ring-blue-700 focus:border-blue-700`}
//     focus:outline-none peer`}
// >
//     <option className={`${isDarkMode ? colors.text_gray_400 : colors.text_gray_400}`} value=""></option>
//     {options.map((option, index) => (
//         <option
//             className={`${isDarkMode ? colors.text_white : colors.text_gray_700} text-sm`}
//             key={index}
//             value={option}
//         >
//             {option}
//         </option>
//     ))}
// </select>
//                 <label
//                     htmlFor={label}
//                     className={`absolute whitespace-nowrap block text-lg font-medium
//                     ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}
//                     ${isDarkMode ? `${colors.text_white} peer-focus:text-white` : `${colors.text_gray_700} peer-focus:text-gray-700`} duration-300 transform scale-75
//                         top-1.5 sm:top-1.5 z-10 origin-[0] px-2 mx-1.5 my-[0.125rem] ${selectValue && "px-2 text-sm scale-75 -translate-y-4 left-0"}
//                         peer-focus:px-2 peer-focus:text-sm peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-0`}
//                 >
//                     {label}
//                 </label>
//                 {error && <span className={`${colors.text_red_700} text-xs`}>{error}</span>}
//             </div>
//         </div>
//     );
// }

// export default InputDropdown;
