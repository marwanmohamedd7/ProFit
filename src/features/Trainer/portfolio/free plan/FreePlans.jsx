import { CiApple, CiDumbbell } from "react-icons/ci";
import DietsFreePlan from "./diets/DietsFreePlan"
import VerticualTabs from "../../../../ui/VerticualTabs"

function FreePlans() {
    return (
        <VerticualTabs tabsFeild="plan" defaultTab="diet">
            <VerticualTabs.Tabs>
                <VerticualTabs.Open opens="diet" icon={<CiApple />}>
                    diet
                </VerticualTabs.Open>
                <VerticualTabs.Open opens="workout" icon={<CiDumbbell />}>
                    workout
                </VerticualTabs.Open>
            </VerticualTabs.Tabs>

            <VerticualTabs.Window opens="diet">
                <DietsFreePlan />
            </VerticualTabs.Window>
            <VerticualTabs.Window opens="workout">
                {/* <DietsFreePlan/> */}
            </VerticualTabs.Window>
        </VerticualTabs>
    )
}

export default FreePlans
