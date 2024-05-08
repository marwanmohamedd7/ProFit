import Title from "../ui/Title"
import BreadCrumbs from "../ui/BreadCrumbs"
import TrainerPortfolio from "../features/Trainer/portfolio/TrainerPortfolio"

function Portfolio() {
    return (
        <div className="divide-y">
            <div className="pb-4 capitalize">
                <BreadCrumbs />
                <Title />
            </div>
            <div>
                <TrainerPortfolio />
            </div>
        </div>
    )
}

export default Portfolio
