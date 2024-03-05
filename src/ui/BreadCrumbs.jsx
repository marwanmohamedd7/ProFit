import { HiChevronRight, HiOutlineHome } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { useGetPageLocation } from "../hooks/useGetPageLocation"

function BreadCrumbs() {
    const { pathNames, role } = useGetPageLocation()
    const active = `text-blue-700`
    return (
        <nav className="flex text-sm mb-4 rounded-lg justify-start items-center max-w-auto" aria-label="Breadcrumb">
            <ol className="inline-flex bg-white px-5 py-2.5 font-light text-gray-500 rounded-md border items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {pathNames.length === 1 && pathNames[0] === "dashboard" ?
                    (
                        <li className="inline-flex items-center">
                            <NavLink to={`/${role}`} className={`inline-flex items-center gap-2 font-semibold hover:text-blue-700 ${active}`}>
                                <HiOutlineHome />
                                <span>Home</span>
                            </NavLink>
                        </li>
                    )
                    :
                    (
                        <>
                            <li className="inline-flex items-center">
                                <NavLink to={`/${role}`} className="inline-flex items-center gap-2 font-semibold hover:text-blue-700">
                                    <HiOutlineHome />
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            {
                                pathNames.map((item, index) => {
                                    const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`.replace(" ", "-");
                                    console.log(routeTo)
                                    const isLast = index === pathNames.length - 1;
                                    console.log(isLast)
                                    return isLast ? (
                                        <li key={index}>
                                            <div className="flex items-center text-gray-600">
                                                <span className="text-md"><HiChevronRight /></span>
                                                <NavLink to={`/${role}${routeTo}`} className={`ms-1 capitalize md:ms-2 font-semibold hover:text-blue-700 ${active}`}>
                                                    {item}
                                                </NavLink>
                                            </div>
                                        </li>
                                    ) : (
                                        <li key={index}>
                                            <div className={`flex items-center text-gray-600`}>
                                                <span className="text-md"><HiChevronRight /></span>
                                                <NavLink to={`/${role}${routeTo}`} className="ms-1 capitalize md:ms-2 font-semibold hover:text-blue-700">
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
