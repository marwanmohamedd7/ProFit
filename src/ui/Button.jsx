import { NavLink } from "react-router-dom"

function Button({ children, onclick, type, to, name: pageName }) {
  pageName = pageName?.replaceAll("-", " ");
  const styles = {
    main: `font-semibold capitalize transition-all duration-300 flex items-center gap-2 sm:gap-3 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md`,
    primary: `flex items-center justify-center gap-2 bg-blue-700 transition-all duration-300 border border-transparent text-white
     ${type === 'login' ? "text-md" : "text-sm"} font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    reset: `flex justify-center items-center gap-1.5 transition-all duration-300 px-4 py-2 border border-blue-700 text-sm font-bold rounded-md
     text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    sideBtn: `active:bg-blue-700 active:text-blue-50 focus:bg-blue-700 focus:text-blue-50`,
    logout: `text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50`,
    login: `w-full`,
    accept: `bg-green-100 text-green-600`,
    decline: `bg-red-100 text-red-600`,
    remove: `text-gray-400 hover:text-gray-600`
  }

  if (type === "sideBtn") return (
    <NavLink replace={true} to={to} className={({ isActive }) => isActive ?
      `${styles.main} ${styles.sideBtn} bg-blue-700 text-blue-50`
      :
      `${styles.main} ${styles.sideBtn} text-blue-700 hover:bg-blue-100`}>
      {children}
      <span>{pageName}</span>
    </NavLink>
  )

  if (type === "submit") return (
    <button className={`${styles.main} ${styles.primary} ${styles.login}`} >
      {children}
    </ button>
  )

  if (type === "logout") return (
    <button className={`${styles.main} ${styles.logout}`}>
      {children}
      <span>{pageName}</span>
    </button>
  )

  if (type === "reset") return (
    <button onClick={onclick} className={styles.reset}>
      {children}
    </button>
  )

  if (type === "remove") return (
    <button onClick={onclick} className={styles.remove}>
      {children}
    </button>
  )

  if (type === "accept") return (
    <button onClick={onclick} className={`${styles.main} ${styles.accept}`}>
      {children}
    </button>
  )

  if (type === "decline") return (
    <button onClick={onclick} className={`${styles.main} ${styles.decline}`}>
      {children}
    </button>
  )

  return (
    <button onClick={onclick} className={`${styles.main} ${styles.primary}`} >
      {children}
    </button>
  )
}

export default Button
