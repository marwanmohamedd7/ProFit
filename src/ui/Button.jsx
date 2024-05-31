import { NavLink } from "react-router-dom"
import { useMainNav } from "../context/MainNavProvider"
import { HiChevronRight } from "react-icons/hi"
import { useDarkMode } from "../context/DarkModeProvider";


function Button({ children, onClick, type, to, name: pageName, customeStyle, disabled = false }) {
  const { isOpen } = useMainNav();
  const { isDarkMode } = useDarkMode();
  // pageName = pageName?.replaceAll("-", " ");
  const styles = {
    main: `font-semibold capitalize transition-all duration-100 flex items-center rounded-md gap-3 p-2.5`,
    primary: `flex items-center justify-center gap-2 bg-blue-700 transition-all duration-300 border border-transparent text-white
    font-bold text-sm tracking-wide py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    secondary: `flex justify-center items-center gap-1.5 transition-all duration-300 px-4 py-2 border border-blue-700 text-sm font-bold rounded-md
     text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    sideBtn: `${isDarkMode ? "active:bg-slate-900 active:text-blue-500 focus:bg-slate-900 focus:text-blue-500 active:border-blue-500 focus:border-blue-500" : "active:bg-blue-100 active:text-blue-700 focus:bg-blue-100 focus:text-blue-700 active:border-blue-700 focus:border-blue-700"} flex items-center justify-start active:border-l-4 focus:border-l-4 capitalize transition-all duration-100 flex items-center rounded-md gap-3 p-2.5`,
    sideBtnIcon: `${isDarkMode ? "active:bg-slate-900 active:text-blue-500 focus:bg-slate-900 focus:text-blue-500 active:border-blue-500 focus:border-blue-500" : "active:bg-blue-100 active:text-blue-700 focus:bg-blue-100 focus:text-blue-700 active:border-blue-700 focus:border-blue-700"} py-3 px-3.5 mx-auto transition-all duration-300 rounded-md`,
    logout: `${isDarkMode ? "text-red-100 bg-red-950 hover:bg-red-800 hover:text-red-50" : "text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50"} font-semibold capitalize transition-all duration-300 flex items-center rounded-md`,
    logoutIcon: `${isDarkMode ? "text-red-100 bg-red-950 hover:bg-red-800 hover:text-red-50" : "text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50"} py-3 px-3.5 mx-auto`,
    login: `w-full`,
    accept: `bg-green-100 text-green-600`,
    reject: `bg-red-100 text-red-600`,
    remove: `text-gray-400 hover:text-gray-600`,
    iconUpdate: `${isDarkMode ? `text-blue-500 hover:text-blue-400 bg-blue-800` : `text-blue-600 hover:text-blue-700 bg-blue-100`} bg-opacity-70 p-2 rounded-md`,
    iconDelete: `${isDarkMode ? `text-red-500 hover:text-red-400 bg-red-800` : `text-red-600 hover:text-red-700 bg-red-100`} bg-opacity-70 p-2 rounded-md`,
    viewLink: "px-4 py-1 capitalize text-sm text-blue-900 border border-blue-900 rounded-md shadow-sm hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700"
  }
  if (type === "sideBtn") return (
    <NavLink disabled={disabled} replace={true} to={to} className={({ isActive }) => {
      let style;
      if (isActive) style = isDarkMode ? "text-blue-500 border-l-4 border-blue-500 bg-slate-900 font-semibold" : "text-blue-700 border-l-4 border-blue-700 bg-blue-100 font-semibold"
      if (!isActive) style = isDarkMode ? "text-gray-50 hover:bg-slate-700" : "text-gray-500 hover:bg-gray-100"
      return isActive ?
        `${isOpen ? `${styles.sideBtn} ${style}` : `${styles.sideBtn} ${styles.sideBtnIcon} ${style}`}`
        :
        `${isOpen ? `${styles.sideBtn} ${style}` : `${styles.sideBtn} ${styles.sideBtnIcon} ${style}`}`
    }
    }
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
    <button disabled={disabled} type="submit" className={`${styles.main} ${styles.primary} ${styles.login} ${customeStyle}`} >
      {children}
    </ button>
  )

  if (type === "logout") return (
    <button onClick={onClick} disabled={disabled} className={isOpen ? `${styles.main} ${styles.logout} ${customeStyle}` : `${styles.logoutIcon} ${styles.logout} ${customeStyle}`}>
      {children}
      <span>{pageName}</span>
    </button>
  )

  if (type === "primary") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.primary} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "secondary") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.secondary} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "remove") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.remove} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "accept") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.main} ${styles.accept} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "reject") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.main} ${styles.reject} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "icon-update")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.iconUpdate} ${customeStyle}`} >
        {children}
      </button>
    )

  if (type === "icon-delete")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.iconDelete} ${customeStyle}`} >
        {children}
      </button>
    )

  if (type === "viewLink")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.viewLink} ${customeStyle}`} >
        {children}
      </button>
    )

  return (
    <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.main} ${styles.primary} ${customeStyle}`} >
      {children}
    </button>
  )
}

export default Button
