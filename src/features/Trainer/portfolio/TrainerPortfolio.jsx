import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi2";
import Gallery from "./gallery/Gallery";
import AboutMe from "./about me/AboutMe";
import FreePlans from "./free plan/FreePlans";
import CompoundTabs from "../../../ui/CompoundTabs";
import TrainerReviews from "./reviews/TrainerReviews";
import styles from "../../../styles/styles";
import { useDarkMode } from "../../../context/DarkModeProvider";

function TrainerPortfolio() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [floatedMessage, setFloatedMessage] = useState(true);
    return (
        <>
            {
                floatedMessage &&
                <div className={`flex justify-between border ${isDarkMode && colors.border_gray_700} rounded-lg p-4 mt-4`}>
                    <div className="flex flex-col justify-center gap-4">
                            <h1 className={`flex items-center gap-2 ${isDarkMode ? colors.text_gray_50 : colors.text_gray_900} font-bold text-lg capitalize`}>
                            <span className="text-2xl"><HiInformationCircle /></span>
                            <p>Content Management Policy</p>
                        </h1>

                            <ul className={`list-disc text-xs font-semibold ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500} space-y-1.5 pl-6`}>
                            <li>Any changes in your Portfolio Data, your changes will be sent to the admin for review and approval</li>
                            <li>This process may take some time</li>
                        </ul>
                    </div>
                        <div className={`rounded text-lg ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}><button onClick={() => setFloatedMessage(value => !value)} className="cursor-pointer transition-all duration-300 rounded-full p-1"><IoClose /></button></div>
                </div>
            }
            <CompoundTabs tabsFeild="profile" defaultTab="free-plan">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="free-plan">free plan</CompoundTabs.Open>
                    <CompoundTabs.Open opens="gallery">gallery</CompoundTabs.Open>
                    <CompoundTabs.Open opens="reviews">reviews</CompoundTabs.Open>
                    <CompoundTabs.Open opens="about">about me</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="free-plan">
                    <FreePlans />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="gallery">
                    <Gallery />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="reviews">
                    <TrainerReviews />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="about">
                    <AboutMe />
                </CompoundTabs.Window>
            </CompoundTabs>
        </>
    )
}

export default TrainerPortfolio
