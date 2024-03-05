import { useGetPageLocation } from "../hooks/useGetPageLocation"

function Title() {
    const title = useGetPageLocation()
    return (
        <h1 className="font-bold capitalize text-blue-900 text-2xl" >{title}</h1>
    )
}

export default Title
