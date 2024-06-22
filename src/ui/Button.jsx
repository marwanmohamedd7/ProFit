import { NavLink } from "react-router-dom";
import { useMainNav } from "../context/MainNavProvider";
import { HiChevronRight } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function Button({ children, onClick, type, to, name: pageName, customeStyle, disabled = false }) {
  const colors = styles();
  const { isOpen } = useMainNav();
  const { isDarkMode } = useDarkMode();

  const btnStyles = {
    main: `font-semibold capitalize transition-all duration-300 flex items-center rounded-md gap-3 p-2.5`,
    primary: `flex items-center justify-center gap-2 capitalize ${isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-700 text-white'} transition-all duration-300 border border-transparent font-bold text-sm tracking-wide py-2 px-4 rounded-md ${isDarkMode ? 'hover:bg-blue-800' : 'hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    secondary: `flex justify-center items-center gap-1.5 capitalize transition-all duration-300 px-4 py-2 border text-sm font-bold rounded-md ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' : 'border-blue-700 text-blue-700 bg-white hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    sideBtn: `${isDarkMode ? "active:bg-slate-900 active:text-blue-500 focus:bg-slate-900 focus:text-blue-500 active:border-blue-500 focus:border-blue-500" : "active:bg-blue-100 active:text-blue-700 focus:bg-blue-100 focus:text-blue-700 active:border-blue-700 focus:border-blue-700"} flex items-center justify-start active:border-l-4 focus:border-l-4 capitalize transition-all duration-100 flex items-center rounded-md gap-3 p-2.5`,
    sideBtnIcon: `${isDarkMode ? "active:bg-slate-900 active:text-blue-500 focus:bg-slate-900 focus:text-blue-500 active:border-blue-500 focus:border-blue-500" : "active:bg-blue-100 active:text-blue-700 focus:bg-blue-100 focus:text-blue-700 active:border-blue-700 focus:border-blue-700"} py-3 px-3.5 mx-auto transition-all duration-300 rounded-md`,
    logout: `${isDarkMode ? "text-red-100 bg-red-900 bg-opacity-80 hover:bg-red-800 hover:text-red-50" : "text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50"} font-semibold capitalize transition-all duration-300 flex items-center rounded-md`,
    logoutIcon: `${isDarkMode ? "text-red-100 bg-red-900 bg-opacity-80 hover:bg-red-800 hover:text-red-50" : "text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50"} py-3 px-3.5 mx-auto`,
    login: `w-full`,
    accept: `${isDarkMode ? `bg-green-900 text-green-500 bg-opacity-50` : `bg-green-100 text-green-500`}`,
    reject: `${isDarkMode ? `bg-red-900 text-red-500 bg-opacity-50` : `bg-red-100 text-red-500`}`,
    remove: `text-gray-400 hover:text-gray-600`,
    iconUpdate: `${isDarkMode ? `text-blue-500 hover:text-blue-400 bg-blue-900` : `text-blue-500 hover:text-blue-700 bg-blue-100`} bg-opacity-70 p-2 rounded-md`,
    iconDelete: `${isDarkMode ? `text-red-500 hover:text-red-400 bg-red-900` : `text-red-500 hover:text-red-700 bg-red-100`} bg-opacity-70 p-2 rounded-md`,
    viewLink: `px-4 py-1 capitalize text-sm rounded-md shadow-sm border transition-all duration-300 ${isDarkMode ? `${colors.text_white} ${colors.border_gray_700} hover:${colors.bg_slate_700}` : `${colors.text_gray_700} ${colors.border_gray_400} hover:${colors.bg_gray_50}`}`
  }

  if (type === "sideBtn") return (
    <NavLink disabled={disabled} replace={true} to={to} className={({ isActive }) => {
      let style;
      if (isActive) style = isDarkMode ? "text-blue-500 border-l-4 border-blue-500 bg-slate-900 font-semibold" : "text-blue-700 border-l-4 border-blue-700 bg-blue-100 font-semibold"
      if (!isActive) style = isDarkMode ? "text-gray-50 hover:bg-slate-700" : "text-gray-500 hover:bg-gray-100"
      return isActive ?
        `${isOpen ? `${btnStyles.sideBtn} ${style}` : `${btnStyles.sideBtn} ${btnStyles.sideBtnIcon} ${style}`}`
        :
        `${isOpen ? `${btnStyles.sideBtn} ${style}` : `${btnStyles.sideBtn} ${btnStyles.sideBtnIcon} ${style}`}`
    }}
    >
      {({ isActive }) => {
        return isActive && isOpen ?
          <div className="flex justify-between items-center w-full">
            {children}
            {<HiChevronRight className="text-lg" />}
          </div>
          : children
      }}
    </NavLink>
  )

  if (type === "login") return (
    <button disabled={disabled} type="submit" className={`${btnStyles.main} ${btnStyles.primary} ${btnStyles.login} ${customeStyle}`} >
      {children}
    </button>
  )

  if (type === "logout") return (
    <button onClick={onClick} disabled={disabled} className={isOpen ? `${btnStyles.main} ${btnStyles.logout} ${customeStyle}` : `${btnStyles.logoutIcon} ${btnStyles.logout} ${customeStyle}`}>
      {children}
      <span>{pageName}</span>
    </button>
  )

  if (type === "primary") return (
    <button disabled={disabled} onClick={onClick} className={`${btnStyles.primary} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "secondary") return (
    <button disabled={disabled} onClick={onClick} className={`${btnStyles.secondary} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "remove") return (
    <button disabled={disabled} onClick={onClick} className={`${btnStyles.remove} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "accept") return (
    <button disabled={disabled} onClick={onClick} className={`${btnStyles.main} ${btnStyles.accept} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "reject") return (
    <button disabled={disabled} onClick={onClick} className={`${btnStyles.main} ${btnStyles.reject} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "icon-update")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${btnStyles.iconUpdate} ${customeStyle}`} >
        {children}
      </button>
    )

  if (type === "icon-delete")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${btnStyles.iconDelete} ${customeStyle}`} >
        {children}
      </button>
    )

  if (type === "viewLink")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${btnStyles.viewLink} ${customeStyle}`} >
        {children}
      </button>
    )

  return (
    <button disabled={disabled} type="submit" onClick={onClick} className={`${btnStyles.main} ${btnStyles.primary} ${customeStyle}`} >
      {children}
    </button>
  )
}

export default Button;
