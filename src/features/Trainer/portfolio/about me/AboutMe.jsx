import AboutMeForm from "./AboutMeForm"
import SpinnerMini from "../../../../ui/SpinnerMini"
import { useGetUserAboutData } from "./useGetUserAboutData"

function AboutMe() {
    const { getUserAboutData, isLoading } = useGetUserAboutData()
    if (isLoading) return <div className="flex items-center justify-center h-[50dvh]"><SpinnerMini size="text-2xl text-blue-900" /></div>
    return <AboutMeForm getUserAboutData={getUserAboutData} />
}

export default AboutMe
