import { CiApple, CiDumbbell } from "react-icons/ci";
import DietsFreePlan from "./diets/DietsFreePlan"
import VerticualTabs from "../../../../ui/VerticualTabs"

function FreePlans() {
    return (
        <div className="space-y-10 py-4 rounded-md">
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
        </div >
    )
}

export default FreePlans
