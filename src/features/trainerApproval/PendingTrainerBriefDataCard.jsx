import { IoCheckmarkOutline } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"
import Button from "../../ui/Button"

function PendingTrainerBriefDataCard() {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-between p-4 bg-white shadow rounded-lg max-w-full">
            <div className="flex items-center">
                <img
                    src="\uifaces-popular-image.jpg" // Replace with actual path to the image
                    alt="Profile"
                    className="rounded-md h-16 w-16 object-cover mr-4"
                />
                <div className=" flex flex-col gap-1 justify-center">
                    <h4 className="font-bold text-md text-blue-700">Ahmed Tarek</h4>
                    <p className="flex flex-col text-blue-950 font-light text-xs">
                        <span>ahmedtarek@gmail.com</span>
                        <span className="underline">+20 100 982 1081</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm">
                <Button type="accept">
                    <span className="text-base">
                        <IoCheckmarkOutline />
                    </span>
                    <span>Accept</span>
                </Button>
                <Button type="decline">
                    <span className="text-base">
                        <RxCross1 />
                    </span>
                    <span>Decline</span>
                </Button>
            </div>
        </div>
    )
}

export default PendingTrainerBriefDataCard
