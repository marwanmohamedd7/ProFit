import { NavLink } from "react-router-dom"

function Button({ children, onClick, type, to, name: pageName, stylee, disabled = false }) {
  pageName = pageName?.replaceAll("-", " ");
  const styles = {
    main: `font-semibold capitalize transition-all duration-300 flex items-center gap-2 sm:gap-3 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md`,
    primary: `flex items-center justify-center gap-2 bg-blue-700 transition-all duration-300 border border-transparent text-white
     ${type === 'login' ? "text-md" : "text-sm"} font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    secondary: `flex justify-center items-center gap-1.5 transition-all duration-300 px-4 py-1.5 border border-blue-700 text-sm font-bold rounded-md
     text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    sideBtn: `active:bg-blue-700 active:text-blue-50 focus:bg-blue-700 focus:text-blue-50`,
    logout: `text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50`,
    login: `w-full`,
    accept: `bg-green-100 text-green-600`,
    decline: `bg-red-100 text-red-600`,
    remove: `text-gray-400 hover:text-gray-600`,
    iconUpdate: `text-blue-600 p-2 hover:text-blue-700 bg-blue-50 rounded-md`,
    iconDelete: `text-red-600 p-2 hover:text-red-700 bg-red-50 rounded-md`,
  }

  if (type === "sideBtn") return (
    <NavLink disabled={disabled} replace={true} to={to} className={({ isActive }) => isActive ?
      `${styles.main} ${styles.sideBtn} bg-blue-700 text-blue-50`
      :
      `${styles.main} ${styles.sideBtn} text-blue-700 hover:bg-blue-100`}>
      {children}
      <span>{pageName}</span>
    </NavLink>
  )

  if (type === "login") return (
    <button disabled={disabled} type="submit" className={`${styles.main} ${styles.primary} ${styles.login} ${stylee}`} >
      {children}
    </ button>
  )

  if (type === "logout") return (
    <button onClick={onClick} disabled={disabled} className={`${styles.main} ${styles.logout} ${stylee}`}>
      {children}
      <span>{pageName}</span>
    </button>
  )

  if (type === "secondary") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.secondary} ${stylee}`}>
      {children}
    </button>
  )

  if (type === "remove") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.remove} ${stylee}`}>
      {children}
    </button>
  )

  if (type === "accept") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.main} ${styles.accept} ${stylee}`}>
      {children}
    </button>
  )

  if (type === "decline") return (
    <button disabled={disabled} onClick={onClick} className={`${styles.main} ${styles.decline} ${stylee}`}>
      {children}
    </button>
  )

  if (type === "icon-update")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.iconUpdate} ${stylee}`} >
        {children}
      </button>
    )

  if (type === "icon-delete")
    return (
      <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.iconDelete} ${stylee}`} >
        {children}
      </button>
    )

  return (
    <button disabled={disabled} type="submit" onClick={onClick} className={`${styles.main} ${styles.primary} ${stylee}`} >
      {children}
    </button>
  )
}

export default Button
