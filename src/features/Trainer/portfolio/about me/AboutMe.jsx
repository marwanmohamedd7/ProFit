import Spinner from "../../../../ui/Spinner"
import AboutMeForm from "./AboutMeForm"
import { useGetUserAboutData } from "./useGetUserAboutData"

function AboutMe() {
    const { getUserAboutData, isLoading } = useGetUserAboutData()
    if (isLoading) return <div className="mt-24 flex justify-center items-center"><Spinner /></div>
    return <AboutMeForm getUserAboutData={getUserAboutData} />
}

export default AboutMe
