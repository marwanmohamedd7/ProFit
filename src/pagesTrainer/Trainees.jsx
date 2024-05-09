import TrainerSubscribedTrainees from "../features/Trainer/trainees/TrainerSubscribedTrainees"
import BreadCrumbs from "../ui/BreadCrumbs"
import Title from "../ui/Title"

function Trainees() {
    return (
        <div className="divide-y">
            <div className="pb-4 capitalize">
                <BreadCrumbs />
                <Title />
            </div>
            <TrainerSubscribedTrainees />
        </div>
    )
}

export default Trainees
