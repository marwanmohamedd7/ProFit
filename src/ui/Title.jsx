import { useGetPageLocation } from "../hooks/useGetPageLocation"

function Title() {
    const { pathNames } = useGetPageLocation();
    const [section] = pathNames
    return (
        <h1 className="font-bold capitalize text-blue-900 text-2xl" >{section === "portfolio" ? `my ${section}` : section}</h1>
    )
}

export default Title
