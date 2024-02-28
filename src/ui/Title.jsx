import { useGetPageData } from "../hooks/useGetPageData"

function Title() {
    const title = useGetPageData()
    return (
        <h1 className="font-bold capitalize text-blue-900 text-2xl" >{title}</h1>
    )
}

export default Title
