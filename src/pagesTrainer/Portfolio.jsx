import Title from "../ui/Title"
import BreadCrumbs from "../ui/BreadCrumbs"
import TrainerPortfolio from "../features/Trainer/portfolio/TrainerPortfolio"

function Portfolio() {
    return (
        <>
            <div className="pb-2">
                <BreadCrumbs />
                <Title />
            </div>
            <TrainerPortfolio />
        </>
    )
}

export default Portfolio
