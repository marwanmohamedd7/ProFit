import VerticualTabs from "../../../../ui/VerticualTabs"
import { BsBarChart } from "react-icons/bs";
import { TbRulerMeasure } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";
import TraineeProgressPhotos from "./traineeProgressPhotos/TraineeProgressPhotos";
import TrainerProgressPerformance from "./trainerProgressPerformance/TrainerProgressPerformance";
import TrainerProgressMeasurements from "./trainerProgressMeasurements/TrainerProgressMeasurements";
function TraineeProgress() {
    return (
        <div className="space-y-10 py-4 rounded-md">
            <VerticualTabs tabsFeild="progress" defaultTab="performance">
                <VerticualTabs.Tabs>
                    <VerticualTabs.Open opens="performance" icon={<BsBarChart />}>
                        Performance
                    </VerticualTabs.Open>
                    <VerticualTabs.Open opens="measurement" icon={<TbRulerMeasure />}>
                        Measurement
                    </VerticualTabs.Open>
                    <VerticualTabs.Open opens="photo" icon={<MdOutlinePhotoCamera />}>
                        Photo
                    </VerticualTabs.Open>
                </VerticualTabs.Tabs>

                <VerticualTabs.Window opens="performance">
                    {/* <DietsFreePlan /> */}
                    <TrainerProgressPerformance />
                </VerticualTabs.Window>
                <VerticualTabs.Window opens="measurement">
                    <TrainerProgressMeasurements/>
                </VerticualTabs.Window>
                <VerticualTabs.Window opens="photo">
                    <TraineeProgressPhotos />
                </VerticualTabs.Window>
            </VerticualTabs>
        </div>
    )
}

export default TraineeProgress
