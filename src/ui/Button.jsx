import { NavLink } from "react-router-dom"
import { useGetPageData } from "../hooks/useGetPageData";

function Button({ children, onClick, type, to, page }) {
  const pathNames = useGetPageData()
  const isActive = pathNames[0]?.replaceAll(" ", "-") === page;
  page = page?.replaceAll("-", " ");
  const styles = {
    main: `font-semibold capitalize transition-all duration-300 flex items-center gap-2 sm:gap-3 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md`,
    primary: `flex items-center justify-center gap-2 bg-blue-700 transition-all duration-300 border border-transparent text-white
     ${type === 'login' ? "text-md" : "text-sm"} font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    reset: `flex justify-center items-center gap-1.5 transition-all duration-300 px-4 py-2 border border-blue-700 text-sm font-bold rounded-md
     text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600`,
    mainBtn: `active:bg-blue-700 active:text-blue-50 focus:bg-blue-700 focus:text-blue-50
     ${isActive ? 'bg-blue-700 text-blue-50' : 'text-blue-700 hover:bg-blue-100'}`,
    logout: `text-red-600 bg-red-50 hover:bg-red-600 hover:text-red-50`,
    login: `w-full`,
    accept: `bg-green-100 text-green-600`,
    decline: `bg-red-100 text-red-600`,
    remove: `text-gray-400 hover:text-gray-600`
  }

  if (type === "mainBtn") return (
    <button>
      <NavLink to={to} className={`${styles.main} ${styles.mainBtn}`}>
        {children}
        <span>{page}</span>
      </NavLink>
    </button>
  )

  if (type === "primary" && to) return (
    <button>
      <NavLink to={to} className={`${styles.main} ${styles.primary}`}>
        {children}
      </NavLink>
    </button>
  )

  if (type === "login" && to) return (
    <button className={styles.login}>
      <NavLink to={to} className={`${styles.main} ${styles.primary}`}>
        {children}
      </NavLink>
    </button>
  )

  if (type === "logout") return (
    <button>
      <NavLink to={to} className={`${styles.main} ${styles.logout}`}>
        {children}
        <span>{page}</span>
      </NavLink>
    </button>
  )

  if (type === "reset") return (
    <button onClick={onClick} className={styles.reset}>
      {children}
    </button>
  )

  if (type === "remove") return (
    <button onClick={onClick} className={styles.remove}>
      {children}
    </button>
  )

  if (type === "accept") return (
    <button onClick={onClick} className={`${styles.main} ${styles.accept}`}>
      {children}
    </button>
  )

  if (type === "decline") return (
    <button onClick={onClick} className={`${styles.main} ${styles.decline}`}>
      {children}
    </button>
  )

  return (
    <button onClick={onClick} className={`${styles.main} ${styles.primary}`} >
      {children}
    </button>
  )
}

export default Button
