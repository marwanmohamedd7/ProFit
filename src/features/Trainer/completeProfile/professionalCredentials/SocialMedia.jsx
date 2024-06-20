import { useState } from "react"
import { NavLink } from "react-router-dom"
import Button from "../../../../ui/Button"
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function SocialMedia({ link, register, disabled, watch }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [showLink, setShowLink] = useState("")
    const textStyle = isDarkMode ? colors.text_white : colors.text_gray_900;
    return (
        <div className={`flex flex-wrap items-center justify-between gap-4 rounded py-2 ${textStyle}`}>
            <span className="text-xl basis-40 flex items-center gap-4" >
                <img className="w-10" src={link.img} alt={`${link.name}-icon`} />
                <NavLink to={link.url} target={`${link.url ? "_blank" : ""}`} className="text-sm">
                    <p className="flex flex-col justify-center gap-1">
                        <span className={`font-semibold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>{link.name}</span>
                        {link.url && <span className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{(link.url).startsWith("https://") ? (link.url).replace("https://", "") : link.url}</span>}
                    </p>
                </NavLink>
                {/* <NavLink to={link.url} target={`${link.url ? "_blank" : ""}`} className="text-sm">
                    {link.url ? (link.url).startsWith("https://") ? (link.url).replace("https://", "") : link.url : link.name}
                </NavLink> */}
            </span>
            <div className="flex items-center gap-2 capitalize">
                {showLink === link.name &&
                    <div className="relative">
                        {/* <div className="absolute z-50 flex items-center justify-center right-2 top-2 text-gray-500 hover:text-gray-700 transition-all duration-300 font-bold px-1 py-0.5 rounded-full hover:bg-red-200 cursor-pointer text-xs ">&#10005;</div> */}
                        <InputFloatingLabel
                            disabled={disabled}
                            register={register}
                            item={{ label: link.name, id: link.name, paddingStyle: "py-2 px-2", value: watch }} />
                    </div>
                }
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        setShowLink(showLink === link.name ? "" : link.name)
                    }}
                    disabled={disabled}
                    type="secondary">
                    {showLink === link.name ? "Cancel" : "Link"}
                </Button>
            </div>
        </div>
    )
}

export default SocialMedia
