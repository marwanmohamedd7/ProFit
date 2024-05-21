import { usePageLocation } from "../hooks/usePageLocation"

function Title() {
    const { pathName } = usePageLocation();
    const [section] = pathName
    return (
        <h1 className="font-bold capitalize text-blue-900 text-2xl" >{section === "portfolio" ? `my ${section}` : section}</h1>
    )
}

export default Title
