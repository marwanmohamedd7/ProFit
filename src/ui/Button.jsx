import { NavLink } from "react-router-dom"
import { useMainNav } from "../context/MainNavProvider"

function Button({ children, onClick, type, to, name: pageName, customeStyle, disabled = false }) {
  const { isOpen } = useMainNav()
  // pageName = pageName?.replaceAll("-", " ");
  const styles = {
    main: `font-semibold capitalize transition-all duration-300 flex items-center rounded-md gap-3 p-2.5`,
    primary: `flex items-center justify-center gap-2 bg-blue-700 transition-all duration-300 border border-transparent text-white
     ${type === 'login' ? "text-md" : "text-sm"} font-bold tracking-wide py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    secondary: `flex justify-center items-center gap-1.5 transition-all duration-300 px-4 py-2 border border-blue-700 text-sm font-bold rounded-md
     text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    sideBtn: `active:bg-blue-700 active:text-blue-50 focus:bg-blue-700 focus:text-blue-50 flex items-center justify-start`,
    sideBtnIcon: `py-3 px-3.5 mx-auto font-semibold capitalize transition-all duration-300 rounded-md active:bg-blue-700 active:text-blue-50 focus:bg-blue-700 focus:text-blue-50`,
    logout: `font-semibold capitalize transition-all duration-300 flex items-center rounded-md text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50`,
    logoutIcon: `py-3 px-3.5 mx-auto text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50`,
    login: `w-full`,
    accept: `bg-green-100 text-green-600`,
    reject: `bg-red-100 text-red-600`,
    remove: `text-gray-400 hover:text-gray-600`,
    iconUpdate: `text-blue-600 p-2 hover:text-blue-700 bg-blue-50 rounded-md`,
    iconDelete: `text-red-600 p-2 hover:text-red-700 bg-red-50 rounded-md`,
  }

  if (type === "sideBtn") return (
    <NavLink disabled={disabled} replace={true} to={to} className={({ isActive }) => isActive ?
      isOpen ? `${styles.main} ${styles.sideBtn} bg-blue-700 text-blue-50` : `${styles.sideBtn} ${styles.sideBtnIcon} bg-blue-700 text-blue-50`
      :
      isOpen ? `${styles.main} ${styles.sideBtn} text-blue-700 hover:bg-blue-100` : `${styles.sideBtn} ${styles.sideBtnIcon} text-blue-700 hover:bg-blue-100`
    }
    >
      {children}
      <span>{pageName}</span>
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

  if (type === "secondary") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.secondary} ${customeStyle}`}>
      {children}
    </button>
  )

  if (type === "primary") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.primary} ${customeStyle}`}>
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

  return (
    <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.main} ${styles.primary} ${customeStyle}`} >
      {children}
    </button>
  )
}

export default Button
