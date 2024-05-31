import { NavLink } from "react-router-dom"
import { useCurrentUser } from "../context/UserProvider"
import { usePageLocation } from "../hooks/usePageLocation"
import { HiChevronRight, HiOutlineHome } from "react-icons/hi"
import styles from "../styles/styles";
import { useDarkMode } from "../context/DarkModeProvider";

function BreadCrumbs() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { userRole } = useCurrentUser()
    let { pathName } = usePageLocation()
    const active = `text-blue-700`
    const handleClick = (e, isLast) => {
        if (isLast) {
            e.preventDefault();
        }
    };
    return (
        <nav className="flex text-sm mb-4 rounded-lg justify-start items-center max-w-auto" aria-label="Breadcrumb">
            <ol className={`inline-flex px-5 py-2.5 font-light ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700} ${colors.text_gray_200}` : `${colors.bg_gray_50} ${colors.text_gray_500}`} rounded-md border items-center space-x-1 md:space-x-2 rtl:space-x-reverse`}>
                {pathName.length === 1 && pathName[0] === "dashboard" ?
                    (
                        <li className="inline-flex items-center">
                            <NavLink to={`/${userRole}`} className={`inline-flex items-center gap-2 font-semibold ${isDarkMode ? `hover:${colors.text_blue_500}` : `hover:${colors.text_blue_700}`} ${active}`}>
                                <HiOutlineHome />
                                <span>Home</span>
                            </NavLink>
                        </li>
                    )
                    :
                    (
                        <>
                            <li className="inline-flex items-center">
                                <NavLink to={`/${userRole}`} className={`inline-flex items-center gap-2 font-semibold ${isDarkMode ? `hover:${colors.text_blue_500}` : `hover:${colors.text_blue_700}`}`}>
                                    <HiOutlineHome />
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            {
                                pathName.map((item, index) => {
                                    const routeTo = `/${pathName.slice(0, index + 1).join('/')}`.replace(" ", "-");
                                    const isLast = index === pathName.length - 1;
                                    return isLast ? (
                                        <li key={index}>
                                            <div className={`flex items-center ${isDarkMode ? `${colors.text_gray_300}` : `${colors.text_gray_600}`}`}>
                                                <span className="text-md pt-0.5"><HiChevronRight /></span>
                                                <NavLink
                                                    to={`/${userRole}${routeTo}`}
                                                    className={`ms-1 capitalize md:ms-2 font-semibold ${active} ${isLast ? `${isDarkMode ? `${colors.text_gray_500}` : `${colors.text_gray_400}`} cursor-not-allowed` : `${isDarkMode ? `hover:${colors.text_blue_500}` : `hover:${colors.text_blue_700}`}`}`}
                                                    onClick={(e) => handleClick(e, isLast)}
                                                    aria-disabled={isLast}
                                                >
                                                    {item}
                                                </NavLink>
                                            </div>
                                        </li>
                                    ) : (
                                        <li key={index}>
                                            <div className={`flex items-center ${isDarkMode ? `${colors.text_gray_300}` : `${colors.text_gray_600}`}`}>
                                                <span className="text-md pt-0.5"><HiChevronRight /></span>
                                                    <NavLink aria-disabled={isLast} to={`/${userRole}${routeTo}`} className={`ms-1 capitalize md:ms-2 font-semibold ${isDarkMode ? `hover:${colors.text_blue_500}` : `hover:${colors.text_blue_700}`}`}>
                                                    {item}
                                                </NavLink>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </>
                    )
                }
            </ol>
        </nav>
    )
}

export default BreadCrumbs
