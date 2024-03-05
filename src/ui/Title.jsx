import { useGetPageLocation } from "../hooks/useGetPageLocation"

function Title() {
    const { pathNames } = useGetPageLocation()
    return (
        <h1 className="font-bold capitalize text-blue-900 text-2xl" >{pathNames}</h1>
    )
}

export default Title
