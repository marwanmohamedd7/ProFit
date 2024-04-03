import QualificationAndAchievement from "./qualifications/QualificationAndAchievement"
import Transformations from "./transformations/Transformations"

function Gallery() {
    return (
        <div className="space-y-10 my-4 bg-white p-4 rounded-md">
            <div className="space-y-4">
                <h1 className="capitalize text-blue-900 font-bold text-xl">transformations photo</h1>
                <Transformations />
            </div>
            <div className="space-y-4">
                <h1 className="capitalize text-blue-900 font-bold text-xl">Certifications and Achievements</h1>
                <QualificationAndAchievement />
            </div>
        </div>
    )
}

export default Gallery
