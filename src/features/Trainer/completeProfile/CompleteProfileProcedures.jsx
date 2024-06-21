import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";

const procedures = [
    {
        pageName: "personal-information",
        desc: "Create your special identity",
        src: "/images/person.png",
    },
    {
        pageName: "professional-credentials",
        desc: "Expertise and Impact",
        src: "/images/check.png",
    },
    {
        pageName: "subscription-pricing",
        desc: "Training packages and their costs.",
        src: "/images/coin.png",
    },
    {
        pageName: "submission-and-review",
        desc: "Administrative Review",
        src: "/images/lens.png",
    },
];

function CompleteProfileProcedures({ page }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    return (
        <div
            className="relative flex flex-col justify-around xl:px-16 lg:px-10 md:px-8 sm:px-6 px-4"
            style={
                isDarkMode
                    ? {
                        backgroundImage:
                            "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.90) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(59, 130, 246, 0.8) 80.52%), url('/trainerBackground.jpeg')",
                        backgroundColor: "black",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }
                    : {
                        backgroundImage:
                            "linear-gradient(0deg, rgba(225, 239, 254, 0.90) 0%, rgba(225, 239, 254, 0.90) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #1D4ED8 75.52%), url('/trainerBackground.jpeg')",
                        backgroundColor: "lightgray",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }
            }
        >
            <div className="flex flex-col items-center p-4">
                <h1 className={`${isDarkMode ? colors.text_white : colors.text_gray_700} font-bold text-2xl`}>
                    Trainer New Account
                </h1>
                <div className="flex flex-col items-center gap-8">
                    <img className="w-48" src={`${procedures[page].src}`} alt="" />
                    <div className="flex flex-col gap-8">
                        {procedures.map((step, index) => {
                            let style;
                            if (page === index)
                                style = {
                                    text: isDarkMode ? `text-blue-500` : `text-blue-700`,
                                    border: isDarkMode ? `border-blue-500` : `border-blue-700`,
                                    font: `font-bold`,
                                };
                            else if (page > index)
                                style = {
                                    text: isDarkMode ? `text-green-500` : `text-green-700`,
                                    border: isDarkMode ? `border-green-500` : `border-green-700`,
                                    bg: isDarkMode ? `bg-green-500` : `bg-green-700`,
                                };
                            else
                                style = {
                                    text: isDarkMode ? `text-gray-400` : `text-gray-500`,
                                    border: isDarkMode ? `border-gray-400` : `border-gray-500`,
                                };
                            return (
                                <div key={index} className={`flex items-center ${style.text} gap-4`}>
                                    <h4
                                        className={`rounded-full ${page > index ? "p-2.5" : "px-3 py-1"} border ${style.border} ${style?.bg ? `${style.bg} text-white` : ``
                                            } justify-center items-center flex`}
                                    >
                                        <span className="">{page > index ? <span className="text-sm"><FaCheck /></span> : index + 1}</span>
                                    </h4>
                                    <p className="flex flex-col gap-1">
                                        <span className={`${style.font ? style.font : "font-semibold"} capitalize`}>
                                            {(step.pageName).replaceAll("-", " ")}
                                        </span>
                                        <span className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{step.desc}</span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <p className={`text-center text-sm flex items-center justify-center gap-1 ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                <span className="">Already have an account?</span>
                <span className={`${isDarkMode ? colors.text_white : colors.text_gray_700} font-bold cursor-pointer`} onClick={() => navigate("/login", { replace: true })}>
                    Log in
                </span>
            </p>
        </div>
    );
}

export default CompleteProfileProcedures;
